let dictionary = ["chi disprezza compra",
  "fondamentalmente",
  "lato mio",
  "chi ha lingua va a roma",
  "chi la fa l'aspetti",
  "trendsetter",
  "ogni lasciata è persa",
  "momento momento momento",
  "ti rubo un secondo",
  "ubi maior",
  "nessuna si è mai lamentata",
  "nessuna ha mai avuto da ridire",
  "ciao patato",
  "vanno via sempre i migliori",
  "progetto superstagista",
  "ho una call",
  "al netto di",
  "a valle di quanto sopra",
  "la cosa che impatta",
  "se il buongiorno si vede dal mattino",
  "vado a lavare i denti e poi ci sono",
  "vado un secondo in bagno e ci sono",
  "blink blink",
  "con calma",
  "parallelamente",
  "lato SEO",
  "lanciamo il missile",
  "se non avessi la barba",
  "ho la riunione del calcio",
  "se hai bisogno bussa",
  "non ci sono",
  ",mi è entrata una ciglia nell'occhio",
  "non capisco perchÃ¨ sono sempre un benchmark negativo",
  "mi raccomando gli allineamenti"];

let openDictionary = [...dictionary];

function randomizeText(){
  if (openDictionary.length === 0)
    openDictionary = [...dictionary];
  let i = Math.floor(Math.random()*openDictionary.length);
  let out = openDictionary[i];
  openDictionary.splice(i, 1);
  return out;
}

document.addEventListener("DOMContentLoaded", function(event) {
  let options = ["sombrero","mariaci"];
  let i = Math.floor(Math.random()*options.length);
  console.log("Playing:"+ options[i]);
  document.querySelector("source").src = options[i] + ".mp3";
  document.querySelector("audio").load();
});

let utterance = new SpeechSynthesisUtterance();
let voices = [];

let voiceDemon = setInterval(loadVoices, 100);

function loadVoices() {
  if(voices.length === 0){
   voices = window.speechSynthesis.getVoices();
  }
  else{
    utterance.voice = voices[21];
    clearInterval(voiceDemon);
  }
}


function speech(){
  document.querySelector("audio").play();
  speechSynthesis.cancel();
  utterance.text = randomizeText();
  utterance.pitch = 0.6;
  speechSynthesis.speak(utterance);
}
