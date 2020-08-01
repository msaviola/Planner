
// // functions
// function myCalendar() {
//     $(document).ready(function () {
//         let momentVar = moment().format('dddd, MMMM DD, YYYY');
//         let workHours = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
// function currentDay(){
//     let currentDay = $("#currentDay").text(momentVar);
//         return currentDay;



// $(document).ready(function() {

//   console.log(displayDate)


// })

/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// functions
function displayDate() {
    const currentDate = moment().format('H')
    const currentDateEl = $("#currentDay");
    currentDateEl.text(currentDate)
  }
  
  
  
  $(document).ready(function() {
    displayDate()
  })