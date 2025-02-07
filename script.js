function generateGrid(num_squares) {
    const container = document.querySelector(".container");

    for (let i = 0; i < num_squares; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        container.appendChild(row);
        for (let i = 0; i < num_squares; i++) {
            const div = document.createElement("div");
            div.classList.add("square");
            row.appendChild(div);
        }
    }
}

function clearGrid() {
    const container = document.querySelector(".container");
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function rgb_squares() {
    const squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener("mouseover", () => {
            // square.setAttribute("style", "background: blue");
            const randomBetween = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
            const r = randomBetween(0, 255);
            const g = randomBetween(0, 255);
            const b = randomBetween(0, 255);
            square.style.backgroundColor =  `rgb(${r},${g},${b})`;
        })
    })
    squares.forEach((square) => {
        square.addEventListener("mouseout", () => {
            square.setAttribute("style", "background: black");
        })
    })
}

const grid_btn = document.querySelector(".grid-btn");
grid_btn.addEventListener("click", () => {
    clearGrid();
    let grid_size = prompt("Please enter # of squares per side:");
    if (grid_size > 100) {
        alert("# of squares has to be smaller than 100!");
    } else {
        generateGrid(grid_size);
    }
    rgb_squares();
})
