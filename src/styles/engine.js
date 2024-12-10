const pianokeys = document.querySelectorAll(".pianokeys .key");


pianokeys.forEach((key)=>{
    console.log(key.dataset.key);
    key.addEventListener("click",() => playTuner(key.dataset.key));
});