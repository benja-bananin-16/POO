function playVideo(secondaryContainer) {
    // Selecciona el video principal
    var mainVideo = document.getElementById("mainVideo");
    var mainSource = mainVideo.querySelector('source');

    // Selecciona el video secundario dentro del contenedor (small video)
    var secondaryVideo = secondaryContainer.querySelector('video');
    var secondarySource = secondaryVideo.querySelector('source');

    // Guarda el src del video principal temporalmente
    var tempSrc = mainSource.src;

    // Cambia el src del video principal al del video secundario
    mainSource.src = secondarySource.src;

    // Cambia el src del video secundario al que tenía el video principal
    secondarySource.src = tempSrc;

    // Recarga los videos
    mainVideo.load();
    secondaryVideo.load();

    // Agrega un evento para reproducir el video cuando se pasa el mouse sobre el video secundario
    secondaryVideo.addEventListener('mouseover', function() {
        console.log('Mouseover event triggered!');
        mainVideo.play();
    });
}