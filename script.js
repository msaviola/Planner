
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
    const currentDate = moment().format('dddd, MMMM DD, YYYY');
    console.log(currentDate);
    $("#currentDay").text(JSON.stringify(currentDate))
    //currentDate.text(currentDate)
  }

  

  // $("#savBtn").on("click", function (event) {
  //   // event.preventDefault() prevents submit button from trying to send a form.
  //   // Using a submit button instead of a regular button allows the user to hit
  //   // "Enter" instead of clicking the button if desired
  //   event.preventDefault();
  //   console.log("pressed save btn");

  //   const taskToDo=$('#task').val();
  //   window.localStorage;
  //   //localStorage.setItem("key", "value");
  //   //movies.push(movieName);
  // })
  $("#add-task").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // Using a submit button instead of a regular button allows the user to hit
    // "Enter" instead of clicking the button if desired
    event.preventDefault();
    console.log("pressed save btn");
    //var movie = $("#movie-input").val();

    var taskName=$('#task-input').val();
    console.log(taskName);
    localStorage.setItem("key", taskName);
    console.log(window.localStorage);
    
  })


  function getSavedTasks(){
    var saved = localStorage.getItem("key");
  }
  
  
  
  $(document).ready(function() {
    displayDate()
    console.log(window.localStorage);
    
  })