var selectmovie = document.querySelector(".movie-select");
var email = document.getElementById("email-input");
var selectshowtime = document.getElementById("showtime-input");
var numberoftickets = document.getElementById("numberoftickets");

var ticketButton = document.querySelector(".ticketbtn");
var resetButton = document.querySelector(".resetbtn");
var bookingDisplayArea = document.querySelector(".not");

ticketButton.addEventListener("click", function(event) {
    event.preventDefault();

    var movieValue = selectmovie.value;
    var emailValue = email.value;
    var selecttimeValue = selectshowtime.value;
    var numticketsValue = numberoftickets.value;

    if (movieValue === "--Choose Movie--" || emailValue === "" || selecttimeValue === "--Choose Show Time--" || numticketsValue === "") {
        alert("Fill all the details");
        return;
    }

    var bookingsDetailsText = "Movie: " + movieValue + " | Email: " + emailValue + " | Time: " + selecttimeValue + " | Tickets: " + numticketsValue;
    bookingDisplayArea.value = bookingsDetailsText;
    alert("Tickets booked successfully!");
});