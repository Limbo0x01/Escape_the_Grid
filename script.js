const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
const gridSize = 20; // each cell in the grid is 20px by 20px
const gridWidth = canvas.width / gridSize;
const gridHeight = canvas.height / gridSize;
let playerPosition = { x: 0, y: gridHeight - 1 };
let score = 0;

// Initialize the game grid
let grid = Array.from({ length: gridHeight }, () => Array.from({ length: gridWidth }, () => 0));

// Placeholder for generating maze and placing security bots
function generateMaze() {
    // Implement maze generation logic here
}

// Draw game area
function drawGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawMaze();
    drawPlayer();
    document.getElementById('score').textContent = `Score: ${score}`;
}

function drawMaze() {
    for (let y = 0; y < gridHeight; y++) {
        for (let x = 0; x < gridWidth; x++) {
            if (grid[y][x] === 1) { // Wall
                ctx.fillStyle = '#ff0000';
                ctx.fillRect(x * gridSize, y * gridSize, gridSize, gridSize);
            }
        }
    }
}

function drawPlayer() {
    ctx.fillStyle = '#00ff00';
    ctx.fillRect(playerPosition.x * gridSize, playerPosition.y * gridSize, gridSize, gridSize);
}

// Player movement logic
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            if (playerPosition.y > 0 && grid[playerPosition.y - 1][playerPosition.x] === 0) playerPosition.y--;
            break;
        case 'ArrowDown':
            if (playerPosition.y < gridHeight - 1 && grid[playerPosition.y + 1][playerPosition.x] === 0) playerPosition.y++;
            break;
        case 'ArrowLeft':
            if (playerPosition.x > 0 && grid[playerPosition.y][playerPosition.x - 1] === 0) playerPosition.x--;
            break;
        case 'ArrowRight':
            if (playerPosition.x < gridWidth - 1 && grid[playerPosition.y][playerPosition.x + 1] === 0) playerPosition.x++;
            break;
    }
    drawGame();
});

generateMaze();
drawGame();

