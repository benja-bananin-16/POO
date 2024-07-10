let clickCount = 0;
document.getElementById('clicks').onclick = function() {
    this.textContent = 'clicks: ' + (++clickCount);
};
