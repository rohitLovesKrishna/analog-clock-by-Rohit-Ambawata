var hour = document.querySelector('.hour');
var minute = document.querySelector('.minute');
var second = document.querySelector('.second');
var header2 = document.querySelector('h2');
var header = document.querySelector('h1');
  
function currentTime() {
    "use strict";
    var time = new Date(), hr = time.getHours(), mint = time.getMinutes(), sec = time.getSeconds(), sec_position = sec * 6, mint_position = mint * 6, hour_position = hr * 30 + mint / 2; //30 deg   = 5 mint and its equal to 1 hr length
    second.style.transform = `rotate(${sec_position}deg)`;
    minute.style.transform = `rotate(${mint_position}deg)`;
     hour.style.transform = `rotate(${hour_position}deg)`;
    header.style.transform = `scale(${sec/30})`;
  
    header2.innerHTML = time.getHours()+":"+time.getMinutes()+":"+time.getSeconds();
};
setInterval(currentTime, 1000);
 