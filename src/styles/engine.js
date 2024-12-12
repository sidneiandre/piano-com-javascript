const pianokeys = document.querySelectorAll(".pianokeys .key");
const volumeSlider = document.querySelector(".volume-Slider input");
const keysCheck = document.querySelector(".keys-check input");

let mapedKeys = [];
let audio = new Audio("src/tunes/a.wav");

const playTuner = (key) => {
    audio.src = `src/tunes/${key}.wav`;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};


pianoKeys.forEach((key)=>{
    key.addEventListener("click",() => playTuner(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

document.addEventListener("keydown", (e) => {

    if(mapedKeys.includes(e.key)){
        playTuner(e.key);
    }   
});

const handlerVolume = (e) => {
    audio.volume = e.target.value;
};

const showHideKeys = () => {
    pianokeys.forEach(key=> key.classList.toggle("hide")); 
};

volumeSlider.addEventListener("input", handlerVolume);

keysCheck.addEventListener("click", showHideKeys);