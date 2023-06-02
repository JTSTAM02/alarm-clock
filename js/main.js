let clicked; // variable for button click 
let alarmTime;
let alarmTriggered = false; // added to stop recurring alerts

function startInterval() { //starts recurring action
  getSeconds(); //Initial Function
  clicked = setInterval(getSeconds, 1000); // Updates time every second
}

function stopInterval() { // prevents getSeconds() from repeated execution and alerts
  clearInterval(clicked); 
}

function getSeconds() {
  let currentDateTime = new Date();
  let currentTimestamp = currentDateTime.getTime(); // Both give current date and time
  let alarmTimestamp = getAlarmTime();

  if (currentTimestamp >= alarmTimestamp && alarmTime && !alarmTriggered) {
    alarmTriggered= true;
    stopInterval();
    alert("Alarm triggered!");
  }

  let dateTimeString = currentDateTime.toLocaleString(); //Turns date and time into a string
  document.getElementById('demo').textContent = dateTimeString; //updates area below button with correct date and time
}

function getAlarmTime() {
  const inputElement = document.getElementById('alarmtime');
  const inputTime = inputElement.value; // gets the value entered in input box
  if (!inputTime) return null; // if nothing in inputted, return null
  const alarmTimeParts = inputTime.split(':'); // splits input into hours and minutes
  const currentDate = new Date(); 
  const alarmDateTime = new Date( // created a new date object with date and entered alarm time
    currentDate.getFullYear(), //retrieves this info from currentDate object
    currentDate.getMonth(),
    currentDate.getDate(),
    parseInt(alarmTimeParts[0]), // converts string of hour back into number
    parseInt(alarmTimeParts[1]) // converts string of minutes back into number
  );
  return alarmDateTime.getTime();
}

function setAlarm() {
  const inputElement = document.getElementById('alarmtime'); // gives the input element for the alarm time
  alarmTime = inputElement.value; //gets value from input box
  if (alarmTime) {
    alarmTriggered = false; 
    alert("Alarm set for " + alarmTime); //alert that alarm has been set
  } else {
    alert("Please enter a valid alarm time.");
  }
}

