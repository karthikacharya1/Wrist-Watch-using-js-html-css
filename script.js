// take element by id html Id
const hour=document.getElementById("hour");
 const minute=document.getElementById("minute");
 const seconds=document.getElementById("seconds");
// get clock by get method
 const setclock=setInterval(function clock(){
  let datenow = new Date()
  let hr=datenow.getHours()
    let min=datenow.getMinutes()
    let sec=datenow.getSeconds()
// rotation speed
     let calcHr= hr*30+min/2;
   let calcMin=min*6;
  let calcSec=sec*6;

    hour.style.transform=`rotate(${calcHr}deg)`;
   minute.style.transform=`rotate(${calcMin}deg)`;
     seconds.style.transform=`rotate(${calcSec}deg)`;
 },1000);// const hour = document.getElementById("hour");
// const minute = document.getElementById("minute");
// const seconds = document.getElementById("seconds");

// const setClock = setInterval(function clock() {
//   let dateNow = new Date();
//   let hr = dateNow.getHours();
//   let min = dateNow.getMinutes();
//   let sec = dateNow.getSeconds();

//   let calcHr = hr * 30 + min / 2;
//   let calcMin = min * 6;
//   let calcSec = sec * 6;

//   hour.style.transform = `rotate(${calcHr}deg)`;
//   minute.style.transform = `rotate(${calcMin}deg)`;
//   seconds.style.transform = `rotate(${calcSec}deg)`;
// }, 1000);
