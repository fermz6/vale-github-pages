document.addEventListener("DOMContentLoaded", function () {
    let canvas = document.getElementById("puzzleCanvas");
    let ctx = canvas.getContext("2d");
    canvas.width = 400;
    canvas.height = 400;

    let img = new Image();
    img.src = "assets/puzzle-image.jpg";
    img.onload = function () {
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        // Aquí puedes agregar lógica de rompecabezas (usar librerías como Puzzly.js o hacerlo manual)
    };

    // Simulación de completar el puzzle
    setTimeout(() => {
        document.getElementById("nextButton").style.display = "block";
    }, 5000);
});
