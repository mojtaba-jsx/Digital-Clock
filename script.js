setInterval(()=>{
    const time =document.querySelector('#time');
let data =new Date();
let hours = data.getHours();
let minute = data.getMinutes();
let seconde = data.getSeconds();
let day_night ="AM";
    if(hours>12){
        day_night ="PM";
        hours = hours - 12;
    }
    if(hours<10){
        hours = "0" + hours;
    }
    if(minute<10){
        minute = "0" + minute;
    }
    if(seconde<10){
        econde = "0" +seconde;
    }
time.textContent =hours + ":" + minute + ":" + seconde + " " + day_night;
})
