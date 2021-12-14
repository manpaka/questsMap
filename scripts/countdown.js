var countDownDate = "December 19, 2021"
var countDown = new Date(countDownDate).getTime();

document.getElementById("countdown").innerHTML = countDownDate.replace('2021', "");

// Upcoming Dates
/* 
December 19, 2021
January 02, 2022
January 16, 2022
January 30, 2022
Febuary 13, 2022
Febuary 27, 2022
*/

var x = setInterval(function(){
    var now = new Date().getTime();

    var distance = countDown - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("TimeTill").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds till gameday?";

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("TimeTill") = "GAME TIME"
    }
}, 1000);