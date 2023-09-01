const alarm = document.getElementById('alarm');
const timeDisplay = document.getElementById('time');
const alarmTimeInput = document.getElementById('alarmTime');
const setAlarmButton = document.getElementById('setAlarm');
let alarmTime = null;

const playAlarm = () => {
  alarm.play();
  setTimeout(() => { //sets a timer to schedule a function after specific amount of time has passed
    alert("Time's up! Alarm is ringing!"); //ensures music begins before alert
  }, 1000)
};

const stopAlarm = () => {
  alarm.pause();
};

//----------------------Format out of Military Time-----------------------------------------------------------------
const formatTime = (time) => {
  const [hours, minutes] = time.split(':');
  return `${parseInt(hours) % 12}:${minutes}`;
};

alarmTimeInput.addEventListener('keydown', (event) => {
  if(event.key === 'Enter'){
    handleClick();
  }
})
//------------------------Handles Set Alarm button action------------------------------------------------------
const handleClick = () => {
  const alarmTimeString = alarmTimeInput.value;
  if (alarmTimeString) {
    const formattedTime = formatTime(alarmTimeString);
    const [hours, minutes] = alarmTimeString.split(':');
    const now = new Date();
    alarmTime = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hours, minutes);
    alert(`Alarm set for ${formattedTime}`);
  }
};



//-----------Handles alarm functionality-------------------------------------------------
(function updateClock() {
  const now = new Date(); // gets current date and time
  timeDisplay.textContent = `${now.toLocaleTimeString('en-US')}`;
  if (alarmTime && now.getTime() >= alarmTime.getTime()) {
    playAlarm();
    alarmTime = null; // ensures no double trigger of alarm
  }
  requestAnimationFrame(updateClock);
})(); // utilization of Immediately Invoked Function Expression (IIFE)


// ------------------Event Listeners for Set and Stop Alarm------------------------------------------------------------
setAlarmButton.addEventListener('click', handleClick);

const stopAlarmButton = document.getElementById('stopAlarm');
stopAlarmButton.addEventListener('click', stopAlarm);

