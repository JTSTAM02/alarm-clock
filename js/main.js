let clicked;
let alarmTime;
let alarmTriggered = false;

function startInterval() {
  getSeconds(); // Call initially
  clicked = setInterval(getSeconds, 1000); // Update every second
}

function stopInterval() {
  clearInterval(clicked);
}

function getSeconds() {
  let currentDateTime = new Date();
  let currentTimestamp = currentDateTime.getTime();
  let alarmTimestamp = getAlarmTimestamp();

  if (currentTimestamp >= alarmTimestamp && alarmTime && !alarmTriggered) {
    alarmTriggered= true;
    stopInterval();
    alert("Alarm triggered!");
  }

  let dateTimeString = currentDateTime.toLocaleString();
  document.getElementById('demo').textContent = dateTimeString;
}

function getAlarmTimestamp() {
  const inputElement = document.getElementById('alarmtime');
  const inputTime = inputElement.value;
  if (!inputTime) return null;
  const alarmTimeParts = inputTime.split(':');
  const currentDate = new Date();
  const alarmDateTime = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    currentDate.getDate(),
    parseInt(alarmTimeParts[0]),
    parseInt(alarmTimeParts[1])
  );
  return alarmDateTime.getTime();
}

function setAlarm() {
  const inputElement = document.getElementById('alarmtime');
  alarmTime = inputElement.value;
  if (alarmTime) {
    alarmTriggered= false;
    alert("Alarm set for " + alarmTime);
  } else {
    alert("Please enter a valid alarm time.");
  }
}

