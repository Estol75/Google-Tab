 var imgCount = 5;
    var dir = 'images/';
     var randomCount = Math.round(Math.random() * (imgCount - 1)) + 1;
     var images = new Array
         images[1] = "bg-01.gif",
          images[2] = "bg-02.png",
          images[3] = "bg-04.png",
          images[4] = "bg-07.jpg"
          images[5] = "bg-08.png"

   document.body.style.backgroundImage = "url(" + dir + images[randomCount] + ")";


var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();
m = checkTime(m);
s = checkTime(s);
document.getElementById('txt').innerHTML =
h + ":" + m ;
var t = setTimeout(startTime, 500);

function checkTime(i) {
if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
return i;
   }
