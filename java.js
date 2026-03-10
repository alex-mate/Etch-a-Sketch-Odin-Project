let size = 16;
const resetButton = document.querySelector("#reset");
const container = document.querySelector("#container");

function createGrid(size) {
  for (let i = 0; i < size * size; i++) {
    const div = document.createElement("div");
    div.classList.add("grid-item");

    div.addEventListener("mouseover", () => {
      let darkness = Number(div.dataset.darkness) || 0;

      if (darkness >= 10) return;

      darkness++;
      div.dataset.darkness = darkness;

      const shade = 255 - darkness * 25;
      div.style.backgroundColor = `rgb(${shade}, ${shade}, ${shade})`;
    });

    container.appendChild(div);
  }

  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
}

function resetGrid() {
  const input = prompt("Enter new grid size (max 100):");

  if (input === null) return;

  size = Number(input);

  if (isNaN(size) || size < 1 || size > 100) {
    alert("Please enter a number between 1 and 100");
    return;
  }

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  createGrid(size);
}

resetButton.addEventListener("click", resetGrid);

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

createGrid(size);
