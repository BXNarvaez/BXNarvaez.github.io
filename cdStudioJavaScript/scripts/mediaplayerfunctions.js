import soundscapeData from "./soundscapedata.js";

const slideshowContent = soundscapeData.map((soundscape) => {

    let soundscapeDiv = document.createElement('div');
    soundscapeDiv.setAttribute('id', soundscape.id);
    soundscapeDiv.setAttribute('class', "slide");

    soundscapeDiv.innerHTML = `

        <video src='${soundscape.video}' autoplay loop muted></video>
        <audio src='${soundscape.audio}' autoplay loop></audio>

    `;

    return soundscapeDiv;
})

const slideshowContainer = document.getElementById('slideshow-container');

slideshowContent.forEach(function(soundscape) {
    slideshowContainer.append(soundscape);
})

const mediaMenu = document.getElementById("media-menu");

var inactivityTime = function () {
    var time;
    Reset();

    document.onmousemove = Reset;
    document.onkeydown = Reset;

    function FadeOutMenu() {
        mediaMenu.setAttribute("style", "opacity: 0");
    }

    function Reset() {
        clearTimeout(time);
        mediaMenu.setAttribute("style", "opacity: 255");
        time = setTimeout(FadeOutMenu, 5000);
    }
}

/* ------------------------------------------------------------------------------------------ */

let paused = false;
var slides = document.getElementsByClassName("slide");
var slideIndex = 0;

const pausePlayButton = document.getElementById('pause-play');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const volumeSlider = document.getElementById('volume-slider');

//PAUSE/PLAY BUTTON FUNCTIONALITY
pausePlayButton.addEventListener('click', function() {
    paused = !paused;

    pausePlayButton.setAttribute('src', paused ? "../images/icons/play.png" : "../images/icons/pause.png");
    paused ? slides[slideIndex].querySelector("video").pause() : slides[slideIndex].querySelector("video").play();
    paused ? slides[slideIndex].querySelector("audio").pause() : slides[slideIndex].querySelector("audio").play();
})

//PREV/NEXT BUTTONS FUNCTIONALITY
function updateSlides(n) {

    if (n > slides.length - 1) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    for (let i = 0; i < slides.length; i++) {

        slides[i].style.display = "none";
        slides[i].querySelector("video").pause();
        slides[i].querySelector("audio").pause();
    }

    slides[slideIndex].style.display = "block";
    slides[slideIndex].querySelector("video").play();

    slides[slideIndex].querySelector("audio").volume = volumeSlider.value;
    slides[slideIndex].querySelector("audio").play();
}

updateSlides(slideIndex);

prevButton.addEventListener('click', function() {
    updateSlides(slideIndex -= 1);
});
nextButton.addEventListener('click', function() {
    updateSlides(slideIndex += 1);
});

//VOLUME SLIDER FUNCTIONALITY
volumeSlider.addEventListener('input', function () {
    slides[slideIndex].querySelector("audio").volume = volumeSlider.value;
})


window.onload = inactivityTime();