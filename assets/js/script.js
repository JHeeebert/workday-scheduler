$(document).ready(function () {
// Code to display the current date in the header of the page
var today = dayjs().format("[Today is ] dddd MMMM D YYYY");
$("#currentDay").text(today);
var time = dayjs().format("[The time right now is ] hh:mm");
$("#currentTime").text(time);

// saveBtn click listener
$(".saveBtn").on("click", function () {
  //get values from HTML.
  console.log(this);
  var info = $(this).siblings(".description").val();
  var time = $(this).parent().attr("id");
  // console.log(time) DEBUG -----
  // console.log(text) DEBUG -----
  // Code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements.
  localStorage.setItem(info, time,);
})
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
// Color Settings for Hour divs //
function hourCheck() {
  var currentHour = dayjs().hour();

  $(".time-block").each(function () {
    var blockTime = parseInt($(this).attr("id").split("hour")[1]);
      console.log(blockTime, currentHour)
    if (blockTime < currentHour) {
      $(this).addClass("past");
      $(this).removeClass("future");
      $(this).removeClass("present");
    }
    else if (blockTime === currentHour) {
      $(this).removeClass("past");
      $(this).addClass("present");
      $(this).removeClass("future");
    }
    else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  })
}
hourCheck();
})