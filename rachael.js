document.getElementById('playButton').addEventListener('click', function() {
    var video = document.getElementById('video');
    video.style.display = 'block';
    video.play();
    this.style.display = 'none';
});
