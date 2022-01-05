var countDownDate = "January 16, 2022 18:00 est"
var countDown = new Date(countDownDate).getTime();

document.getElementById("countdown").innerHTML = countDownDate.replace('2022 18:00', "6pm");

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
        console.log('Game Time')
        clearInterval(x);
        document.getElementById("TimeTill").innerHTML = "GAME TIME"
    }
}, 1000);