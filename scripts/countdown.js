let dates = ["July 10", "July 24", "August 7", "August 21"]

var timer = 1
var countDownDate = dates[timer] + ", 2022 18:30 est"
var countDown = new Date(countDownDate).getTime();

document.getElementById("countdown").innerHTML = countDownDate.replace('2022 18:30', "6:30pm");

var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDown - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("TimeTill").innerHTML = days + " days " + hours + " hours " + minutes + " minutes " + seconds + " seconds till gameday";

    if (distance < 0) {
        clearInterval(x)

        if (days <= -2) {
            timer = timer + 1

            countDownDate = dates[timer] + ", 2022 18:00 est"

            document.getElementById("countdown").innerHTML = countDownDate.replace('2022 18:00', "6:30pm");
            document.getElementById("TimeTill").innerHTML = "";

        } else {
            document.getElementById("TimeTill").innerHTML = "GAME TIME"
        }
    }
}, 500);

