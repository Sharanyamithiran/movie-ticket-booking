
var selectmovie = document.querySelector(".movie-select");
var email = document.getElementById("email-input");
var selectshowtime = document.getElementById("showtime-input");
var numberoftickets = document.getElementById("numberoftickets");
  
var ticketButton = document.querySelector(".ticketbtn");
var resetButton = document.querySelector(".resetbtn");
var bookingDisplayArea = document.querySelector(".not");

ticketButton.addEventListener("click",function(event) {
    event.preventDefault();

    var movieValue = selectmovie.value.trim();
    var emailValue = email.value.trim();
    var selecttimeValue =  selectshowtime.value.trim();
    var numticketsValue = numberoftickets.value.trim();

    if( movieValue === "--Choose Movie--" || emailValue === "" || selecttimeValue === "--Choose Show Time--" || numticketsValue === "") {
        alert("Fill all the details");
        return;
    }

    var bookingsDetailsText = "Movie:" + movieValue + "\n" +
                               "Email:" + emailValue + "\n" +
                               "Time:" + selecttimeValue + "\n"  +
                               "Tickets:" + numticketsValue;
    bookingDisplayArea.value = bookingsDetailsText;
    alert("Tickets booked successfully");
});

