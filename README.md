# Etch-a-Sketch

A browser-based drawing grid built with **JavaScript, HTML, and CSS Grid**.

This project was created as part of **The Odin Project – JavaScript Foundations** curriculum to practice DOM manipulation, event handling, and dynamic UI creation.

## Demo

Move your mouse across the grid to draw.

Each square reacts to hover, allowing you to sketch freely on the board.

## Features

- Dynamic grid generation (default **16 × 16**)
- Hover drawing effect
- Grid resizing with user input
- Input validation (maximum grid size: **100 × 100**)
- Grid automatically rebuilds when resized
- Clean layout using **CSS Grid**

## How It Works

1. JavaScript dynamically creates the grid squares.
2. CSS Grid arranges them into a perfect square layout.
3. Each square listens for a `mouseover` event.
4. When hovered, the square changes color to simulate drawing.
5. The **Resize Grid** button allows the user to rebuild the grid with a different size.

## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript (DOM Manipulation)**
- **CSS Grid**

## Project Structure
etch-a-sketch
│
├── index.html
├── style.css
├── java.js
└── README.md

## What I Practiced

- Creating elements dynamically with JavaScript
- Using loops to generate UI components
- Handling user input with `prompt()`
- Attaching event listeners to DOM elements
- Resetting and rebuilding UI components
- Managing state inside DOM elements

## Future Improvements

Possible enhancements for a more advanced version:

- Random RGB color drawing
- Progressive darkening effect on repeated hover
- Clear grid button
- Drawing modes (rainbow / grayscale)
- UI improvements and controls

## Acknowledgements

This project was completed as part of:

**The Odin Project**  
https://www.theodinproject.com/
