// Seleccionar el número de likes y el botón
const likeBtn = document.querySelector('#like-btn');
const likesCount = document.querySelector('#likes');

// Manejar el evento onclick
likeBtn.onclick = function() {
    // Incrementar el número de likes
    let currentLikes = parseInt(likesCount.textContent);
    likesCount.textContent = currentLikes + 1;
}
