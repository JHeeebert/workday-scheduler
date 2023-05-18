var today = dayjs();
$('#currentDay').text(today.format('[Today is] dddd MMM D, YYYY'));
var time = dayjs();
$('#currentTime').text(today.format('[The time is] hh: mm A '));

//Controls color changing on rows
var rows = $(".row")
let currentTime = parseInt(dayjs().format('HA'));

$(".row").each(function(row) {  
    let rowHour = parseInt(row.id) 
    let textinput = $(this).children(".description")
    console.log(textinput)
    if (rowHour === currentTime) {
          $(textinput).css("background-color", "red");
    }
  });

// //Save to local storage
localStorage.setItem()
// //Button select
$(document).ready(function(){
$(".saveBtn").on("click", function() {
var time = 
var text =
})
})






  //   else if (rowHour > currentTime) {
  //   $(".description").css("background-color", "green");
  //   }
  //   if (currentTime === rowHour) {
  // $(textinput).css("background-color", "red");
  //   }
  //    else if(currentTime > rowHour) {
  //     $(textinput).css("background-color", "red");
  //   } else if (currentTime < rowHour) {
  //     $(textinput).css("background-color", "red")
  //   }

 

// function setColor(element, color) {
//   element.classList.add("past");
// }














// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.