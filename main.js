function showNext() {
    document.getElementById('puzzleCanvas').style.display = 'none';
    document.getElementById('nextButton').style.display = 'none';
    document.getElementById('menu').style.display = 'block';
}

function showSection(section) {
    let content = document.getElementById('content');
    if (section === 'photos') {
        content.innerHTML = `<img src="assets/photo1.jpg"><img src="assets/photo2.jpg">`;
    } else if (section === 'music') {
        content.innerHTML = `<div id="vinyl"></div><audio controls src="assets/song.mp3"></audio>`;
    } else if (section === 'letter') {
        content.innerHTML = `<p>Querida Valentina, ¡feliz cumpleaños! ❤️</p>`;
    } else if (section === 'counter') {
        let startDate = new Date("2022-08-05");
        let today = new Date();
        let daysPassed = Math.floor((today - startDate) / (1000 * 60 * 60 * 24));
        content.innerHTML = `<p>Han pasado ${daysPassed} días desde el 5 de agosto de 2022.</p>`;
    }
}
