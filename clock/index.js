const currentHour = document.querySelector('.hour-hand');
const currentSecond = document.querySelector('.second-hand');
const currentMinutes = document.querySelector('.min-hand');

setInterval(update, 1000);

function update() {
    const currentDate = new Date();
    const totalSecondsInMinute = 60;
    const totalMinuteOnAClock = 60;
    const totalHoursOnAClock = 12;
    const secondRatio = currentDate.getSeconds() / totalSecondsInMinute;    // the answer eg: 0.75, which is 75% of a minute
    // This number will indicate how much the seconds pointer on the clock must turn in degrees
    const secondHandPosition = 360 * secondRatio;
    const minuteRatio = (secondRatio + currentDate.getMinutes()) / totalMinuteOnAClock;
    const minuteHandPosition = 360 * minuteRatio;
    const hourRatio = (minuteRatio + currentDate.getHours()) / totalHoursOnAClock;    // add minuteRatio because the movement of hour hand depends on minute hand
    const hourHandPosition = 360 * hourRatio;

    setRotation(currentSecond, secondHandPosition);
    setRotation(currentMinutes, minuteHandPosition);
    setRotation(currentHour, hourHandPosition);
}

function setRotation(currentHand, handPosition) {
    currentHand.style.setProperty("--rotation", handPosition);
}