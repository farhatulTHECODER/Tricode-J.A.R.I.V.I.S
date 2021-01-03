const startButton = document.querySelector("#start");
const recognition = new webkitSpeechRecognition();
recognition.continous=false;
recognition.lang="en-US";
recognition.interimResults=false;
recognition.maxAlternative=1;

const synth = window.speechSynthesis;

if(startButton){
    startButton.addEventListener('click',recognition.start(),false);
}

/*startButton.addEventListener("click", () =>{
   recognition.start();
});*/

let utter = new SpeechSynthesisUtterance("Hi, how are you?");
utter.onend=()=>{
    recognition.start();
};

recognition.onresults=(e) => {
    const transcript = e.results[e.results.length - 1].transcript.trim();

    if(transcript === "hey"){
        recognition.stop();
        utter.text("Hi, how are you?");
        synth.speak(utter);
        console.log("Hi, how are you");
    }
}