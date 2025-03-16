document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("puzzleCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;
    
    let img = new Image();
    img.src = "assets/puzzle-image.jpg"; // Asegúrate de que esta imagen exista en tu carpeta "assets"
    
    img.onload = function () {
        let rows = 3, cols = 3;
        let pieceSize = canvas.width / cols;
        let pieces = [];
        let emptyIndex = { x: 2, y: 2 }; // Último espacio vacío en 3x3
    
        // Crear piezas del rompecabezas
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                if (x !== 2 || y !== 2) { // Dejar una casilla vacía
                    pieces.push({ x, y, sx: x * pieceSize, sy: y * pieceSize });
                }
            }
        }
        
        // Mezclar las piezas de forma aleatoria
        pieces.sort(() => Math.random() - 0.5);

        // Función para dibujar el rompecabezas
        function drawPuzzle() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            pieces.forEach(piece => {
                ctx.drawImage(img, piece.sx, piece.sy, pieceSize, pieceSize, 
                              piece.x * pieceSize, piece.y * pieceSize, pieceSize, pieceSize);
            });
        }

        // Detectar clic y mover piezas
        canvas.addEventListener("click", function (event) {
            let rect = canvas.getBoundingClientRect();
            let x = Math.floor((event.clientX - rect.left) / pieceSize);
            let y = Math.floor((event.clientY - rect.top) / pieceSize);
            let dx = Math.abs(x - emptyIndex.x);
            let dy = Math.abs(y - emptyIndex.y);
            
            if ((dx === 1 && dy === 0) || (dx === 0 && dy === 1)) {
                let movingPiece = pieces.find(p => p.x === x && p.y === y);
                if (movingPiece) {
                    movingPiece.x = emptyIndex.x;
                    movingPiece.y = emptyIndex.y;
                    emptyIndex.x = x;
                    emptyIndex.y = y;
                    drawPuzzle();
                }
            }
            
            // Verificar si el puzzle está completo
            if (isPuzzleComplete()) {
                document.getElementById("nextButton").style.display = "block";
            }
        });

        // Función para verificar si el puzzle está completo
        function isPuzzleComplete() {
            return pieces.every(p => p.x * pieceSize === p.sx && p.y * pieceSize === p.sy);
        }

        drawPuzzle();
    };
});
