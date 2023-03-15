const myLabel = document.getElementById("myLabel");

update();
setInterval(update, 1000);

function update(){

    let date = new Date();

    myLabel.innerHTML = formatTime(date);

    function formatTime(){
        let hours = addZero(date.getHours());
        let minutes = addZero(date.getMinutes());
        let seconds = addZero(date.getSeconds());
        let amOrPm = hours >= 12 ? "pm" : "am";

        hours = (hours % 12) || 12;

        return `${hours}:${minutes}:${seconds} ${amOrPm}`;
    }

    function addZero(time){
        if(time < 10){time = "0" + time;}
        return time;
    }
}