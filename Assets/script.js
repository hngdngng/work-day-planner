$(document).ready(function () {
    //once the HTML is loaded:

    var currentDateDisplay = $("#currentDay"); //target <p> with ID currentDay 
    var currentDate = moment().format("dddd, MMMM Do, YYYY"); //pull current date using moment.js in preffered format
    currentDateDisplay.text(currentDate);//replace text content with current date when user loads HTML
    renderDisplay(); //call renderDisplay to update time block colors and update calender tasks/events

    $(".saveBtn").on("click", logUserInput); //call logUserInput function when save button is clicked
});

function logUserInput(event) {
    event.preventDefault() // prevent page from refreshing
    var task = $(this.previousElementSibling).val().trim(); //store user input in textarea as variable 'task'
    var hourEdited = $(this.parentElement).attr("id"); //store hour of the timeblock of save-button clicked
    localStorage.setItem(hourEdited, task); //create a local storage memory with key of hourEdited and value of the task the user inputed
}

function renderDisplay() {
    var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"]; //9AM-5PM military time
    timeArray.forEach(hour => { //=> same as saying function (hour) {}, forEach loops through timeArray
        //for each hour in the loop, call on functions to update calendar task and hour block color 
        renderTask(hour);
        changeBlockColor(hour, 11); //moment().hour pulls current hour in military time
    });
}

function renderTask(hour) {
    var savedTask = localStorage.getItem("hour-" + hour); //pull item from local storage matching current hour of the loop in line 21
    if (savedTask) { //if value exist
        $('#hour-' + hour).find('textarea').text(savedTask); //update textarea to show savedTask
    }
}

function changeBlockColor(hour, currentHour) {
    //compare current hour of the loop in line 21 to current hour of the user's browser
    if (currentHour == hour) { 
        $('#hour-' + hour).addClass("present"); //add class, updates colors per CSS
    } else if (currentHour < hour) {
        $('#hour-' + hour).addClass("future");
    } else {
        $('#hour-' + hour).addClass("past");
    }
}