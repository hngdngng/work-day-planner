$(document).ready(function () {
    console.log('Ready');
    var currentDateDisplay = $("#currentDay"); //target <p> with ID currentDay 
    var currentDate = moment().format("dddd, MMMM Do, YYYY"); //pull current date using moment.js in preffered format
    currentDateDisplay.text(currentDate);//replace text content with current date when user loads HTML
    $(".saveBtn").on("click", logUserInput)

    renderDisplay();
});

function logUserInput(event) {
    event.preventDefault()
    //console.log($(this));
    var task = $(this.previousElementSibling).val().trim();
    console.log(task);
    var hourEdited = $(this.parentElement).attr("id");
    console.log(hourEdited);
    localStorage.setItem(hourEdited, task); //create a local storage memory with key of hourEdited with value of the task the user inputed
}

function renderDisplay() {
    var timeArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];
    timeArray.forEach(hour => {
        renderTask(hour);
        changeBlockColor(hour, moment().hour());
    });
}

function renderTask(hour) {
    var savedTask = localStorage.getItem("hour-" + hour);
    if (savedTask) {
        $('#hour-' + hour).find('textarea').text(savedTask);
        console.log("saved task :" + savedTask);
    }
}

function changeBlockColor(hour, currentHour) {
    console.log(currentHour);
    if (currentHour == hour) {
        $('#hour-' + hour).addClass("present");
    } else if (currentHour < hour) {
        $('#hour-' + hour).addClass("future");
    } else {
        $('#hour-' + hour).addClass("past");
    }
}