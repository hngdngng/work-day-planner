$(document).ready(function() {
    var currentDateDisplay = $("#currentDay"); //target <p> with ID currentDay 
    var currentDate = moment().format("dddd, MMMM Do, YYYY"); //pull current date using moment.js in preffered format
    currentDateDisplay.text(currentDate);//replace text content with current date when user loads HTML
    
    
})