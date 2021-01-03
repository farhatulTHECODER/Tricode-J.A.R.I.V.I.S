// Speech or Welcome speech of J.A.R.V.I.S
//var jarvis = new Artyom;
//jarvis.say("Hey welcome, how can i help you");

/*var Jarvis_Speech = new Audio("jarvisSpeech1.mp3");
Jarvis_Speech.play();*/

// Get the battery!
/*var battery = navigator.battery || navigator.webkitBattery || navigator.mozBattery;*/

// A few useful battery properties
/*console.warn("Battery charging: ", battery.charging); // true
console.warn("Battery level: ", battery.level); // 0.58
console.warn("Battery discharging time: ", battery.dischargingTime);
*/
// Add a few event listeners
/*battery.addEventListener("chargingchange", function(e) {
	console.warn("Battery charge change: ", battery.charging);
}, false);
battery.addEventListener("chargingtimechange", function(e) {
	console.warn("Battery charge time change: ", battery.chargingTime);
}, false);
battery.addEventListener("dischargingtimechange", function(e) {
	console.warn("Battery discharging time change: ", battery.dischargingTime);
}, false);
battery.addEventListener("levelchange", function(e) {
	console.warn("Battery level change: ", battery.level);
}, false);
var battery = navigator.battery;
var level    = battery.level * 100;
var batteryLevel = jQuery('.battery .battery-level');
batteryLevel.css('width', level + '%');
batteryLevel.text(level + '%');
if (battery.charging) {
    batteryLevel.addClass('charging');
} else if (level > 50) {  
    batteryLevel.addClass('high');  
} else if (level >= 25 ) {  
    batteryLevel.addClass('medium');  
} else {  
    batteryLevel.addClass('low');  
}
function updateBatteryDisplay(battery) {
	var level = battery.level * 100;
	var batteryLevel = jQuery('.battery .battery-level');
	batteryLevel.css('width', level + '%');
	batteryLevel.text(level + '%');
	if (battery.charging) {
	    batteryLevel.addClass('charging');
	    batteryLevel.removeClass('high');  
	    batteryLevel.removeClass('medium');  
	    batteryLevel.removeClass('low');  
	} else if (level > 50) {  
	    batteryLevel.addClass('high');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('medium');  
	    batteryLevel.removeClass('low');  
	} else if (level >= 25 ) {  
	    batteryLevel.addClass('medium');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('high');  
	    batteryLevel.removeClass('low');  
	} else {  
	    batteryLevel.addClass('low');  
	    batteryLevel.removeClass('charging');
	    batteryLevel.removeClass('high');  
	    batteryLevel.removeClass('medium');  
	}
}

var battery = navigator.battery;
updateBatteryDisplay(battery);
battery.onchargingchange = function () {
    updateBatteryDisplay(battery);
};
battery.onlevelchange = function () {
    updateBatteryDisplay(battery);
};*//*
var chargingStateEl = document.getElementById('chargingState');
var chargingTimeEl = document.getElementById('chargingTime');
var dichargeTimeEl = document.getElementById('dischargeTime');
var levelEl = document.getElementById('level');

function updateBatteryUI(battery) {
  levelEl.textContent = (battery.level * 100) + '%';
  chargingTimeEl.textContent = battery.chargingTime + ' Seconds';
  dichargeTimeEl.textContent = battery.dischargingTime + ' Seconds';

  if (battery.charging === true) {
    chargingStateEl.textContent = 'Charging';
  } else if (battery.charging === false) {
    chargingStateEl.textContent = 'Discharging';
  }
}

function monitorBattery(battery) {
  // Update the initial UI.
  updateBatteryUI(battery);

  // Monitor for futher updates.
  battery.addEventListener('levelchange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('chargingchange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('dischargingtimechange',
    updateBatteryUI.bind(null, battery));
  battery.addEventListener('chargingtimechange',
    updateBatteryUI.bind(null, battery));
}

if ('getBattery' in navigator) {
  navigator.getBattery().then(monitorBattery);
} else {
  ChromeSamples.setStatus('The Battery Status API is not supported on ' +
    'this platform.');
}*/

const speechRecognition = window.webkitSpeechRecognition
      || window.SpeechRecognition;
/*navigator.getBattery()
.then(function(battery) {
  Speak(battery.level);
});*/
let user = "You";
let AI = "Jarvis";

function startListening(){
  const recog = new speechRecognition();
  var audio = new Audio("recognising.mp3");
  audio.play();
  recog.start();
  recog.onstart = console.log("Listening...");//JARVIS is recognising user's voice
  //results
  recog.onresult = function (data){handleResults(data);
    recog.stop(()=>{
      var audio = new Audio("recognising.mp3");
      audio.play();
    });
  };
}
function handleResults(data){
  let text = data.results[0][0].transcript;
  text = text.toLowerCase();
  console.log(user+":"+text);
  ProcessCommand(text);
}
function ProcessCommand(UserText){
  //Opening Apps or Websites
  if(UserText.includes('instagram')){//printing the text in console Window
    //var Jarvis = new Artyom;
    //Jarvis.say(AI+": Opening Instagram");
    Speak("Opening Instagram...");
    window.open('https://www.instagram.com');
  }else if(UserText.includes('youtube')){//printing the text in console Window
    Speak("Opening Youtube");
    window.open('https://www.youtube.com');
  }else if(UserText.includes('whatsapp')){//printing the text in console Window
    Speak("Opening What'sApp");
    window.open('https://web.whatsapp.com');
  }else if(UserText.includes('google')){//printing the text in console Window
    Speak("Opening Google");
    window.open('https://www.google.com');
  }else if(UserText.includes('yahoo')){//printing the text in console Window
    Speak("Opening Yahoo");
    window.open('https://in.yahoo.com');
  }else if(UserText.includes('pinterest')){//printing the text in console Window
    Speak("Opening Pinterest");
    window.open('https://www.pinterest.com');
  }else if(UserText.includes('facebook')){//printing the text in console Window
    Speak("Opening facebook");
    window.open('https://www.facebook.com');
  }else if(UserText.includes('dailyhunt')){//printing the text in console Window
    Speak("Opening dailyhunt");
    window.open('https://www.dailyhunt.com');
  }else if(UserText.includes('twitter')){//printing the text in console Window
    Speak("Opening Twitter");
    window.open('https://www.twitter.com').innerHTML(target="_blank");
  }else if(UserText.includes('goibibo')){//printing the text in console Window
    Speak("Opening Goibibo");
    window.open('https://www.goibibo.com');
  }else if(UserText.includes('brainly')){//printing the text in console Window
    Speak("Opening Brainly");
    window.open('https://www.brainly.in');
  }else if(UserText.includes('mail')){//printing the text in console Window
    Speak("Opening GMail");
    window.open('https://mail.google.com');
  }else if(UserText.includes('yahoomail')){//printing the text in console Window
    Speak("Opening YahooMail");
    window.open('https://www.mail.yahoo.com');
  }else if(UserText.includes('googledrive') || UserText.includes('drive')){//printing the text in console Window
    Speak("Opening Google Drive");
    window.open('https://www.drive.google.com');
  }else if(UserText.includes('googledocs') || UserText.includes('docs')){//printing the text in console Window
    Speak("Opening Google Docs");
    window.open('https://www.docs.google.com');
  }else if(UserText.includes('how are you')){//printing the text in console Window
    Speak("yeah, i am fine");
  }else if(UserText.includes("the") && UserText.includes("time")){
    Speak("The Time Is" + getCurrentTime());
  }else if(UserText.includes("month") && UserText.includes("now")){
    Speak("This is" + getCurrentMonth() + "Month");
  }else if(UserText.includes("which day is this")){
    Speak("This is" + getCurrentDay() + "day of a week");
  }else if(UserText.includes("which year is this")){
    Speak("This is" + getCurrentYear());
  }else if(UserText.includes('very good')){//printing the text in console Window
    Speak("Thank you very much");
  }else if(UserText.includes('hello')){//printing the text in console Window
    Speak("Hi,how can i help you");
  }else if(UserText.includes('hi')){//printing the text in console Window
    Speak("Hello,How can i help you");
  }else if(UserText.includes('')){//printing the text in console Window
    Speak("Please tell me how to help you");
  }else {//printing the text in console Window
    Speak("I cant understand,what you are saying");
  }/*else if(UserText.includes('what is the charge in my mobile') || UserText.includes('whats the charge in my mobile')|| UserText.includes('what is the charge in my device')
  || UserText.includes('whats the charge in my device')|| UserText.includes('what is the charge in my device')|| UserText.includes('charge in my mobile')|| UserText.includes('battery level in my mobile') || UserText.includes('battery level in my device')
){
    navigator.getBattery().then(function(battery) {
    Speak(battery.level);
});
  }*/
  /*if(recog===stop()){
  var audio = new Audio("recognising.mp3");
  audio.play();
}*/
}
//The Live time
function getCurrentTime(){
  const date = new Date();
  let hour = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  //let amOrpm = date.
  
  return `${hour} ${minutes} ${seconds}`;
}
function getCurrentMonth(){
  const date = new Date();
  let theMonth = date.getUTCMonth();
  //let theDay = date.getDay();

  return `${theMonth}`;
}
function getCurrentDay(){
  const date = new Date();
  let theDay = date.getUTCDay();
  return `${theDay}`;
}
function getCurrentYear(){
  const date = new Date();
  let theYear = date.getUTCFullYear();
  return `${theYear}`;
}

function Speak(TEXT){
  const utter = new SpeechSynthesisUtterance();
  utter.text = TEXT;

  window.speechSynthesis.speak(utter);
}

//window.addEventListener('DOMContentLoaded', startListening());


/*//Speech of J.A.R.V.I.S

function startDictation() {
  if(window.hasOwnProperty('webkitSpeechRecognition')){
      var recognition = new webkitSpeechRecognition();
      recognition.continuous = false;
      recognition.lang = "en-US";
      recognition.interimResults = false;
      recognition.start();

      recognition.onresult = function(e){
          document.getElementById('transcript').value
          = e.results[0][0].transcript;

          recognition.stop();
          document.getElementById('VoiceAssistant').submit();

    }
    

    recognition.onerror = function(e) {
      recognition.stop();
    }
  }
  if(e.results[0][0].transcript === "open YouTube" || e.results[0][0].transcript === "YouTube"){
    window.open("https://www.youtube.com");
  }
}*/