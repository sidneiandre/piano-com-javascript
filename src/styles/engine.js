const pianokeys = document.querySelectorAll(".pianokeys .key");

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