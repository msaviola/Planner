

// functions
function displayDate() {
    const currentDate = moment().format('dddd, MMMM DD, YYYY');
    console.log(currentDate);
    $("#currentDay").text(JSON.stringify(currentDate))
   
}

//function currentTime(){
  
  //var Time=document.querySelector$("#Time"+i)
 

  function colorCoding() {

    let hourNow24 = moment().format('HH');   
    //console.log(hourNow24);
  
    var workHours = ["08", "09", "10", "11", "12", "13", "14", "15", "16", "17"]

    
   
    if(hourNow24 >= 8 && hourNow24 <= 17) {
  
      for (let i =0; i<=10 ; i++) { 
        //console.log(workHours[i]);

        if (workHours[i] == hourNow24) {
          $('#task-input'+i).css('background-color', 'red');
          //console.log($('#task-input'+i));
          continue;
        }
        
        if (workHours[i]<hourNow24) {
          $('#task-input'+i).css('background-color', 'grey');
        } 
        if (workHours[i]>hourNow24){
          $('#task-input'+i).css('background-color', 'green');
           console.log($('#task-input'+i));
           console.log(workHours[i]);
           console.log(hourNow24);

        }
        else{
          $('#task-input'+i).css('background-color', 'light grey');
          //console.log($('#task-input'+i));
        }
      }
  
    }
    else {
      
      $("textarea").css('background-color', 'pink');
    }


  }


  $(".saveBtn").on("click", function(event) {
    // event.preventDefault() prevents submit button from trying to send a form.
    // "Enter" instead of clicking the button if desired

    event.preventDefault();
    console.log("pressed save btn");
    

    var taskName0=$('#task-input0').val();    
    localStorage.setItem("task0", taskName0);

    var taskName1=$('#task-input1').val();    
    localStorage.setItem("task1", taskName1);

    var taskName2=$('#task-input2').val();    
    localStorage.setItem("task2", taskName2);

    var taskName3=$('#task-input3').val();    
    localStorage.setItem("task3", taskName3);

    var taskName4=$('#task-input4').val();    
    localStorage.setItem("task4", taskName4);

    var taskName5=$('#task-input5').val();    
    localStorage.setItem("task5", taskName5);

    var taskName6=$('#task-input6').val();    
    localStorage.setItem("task6", taskName6);

    var taskName7=$('#task-input7').val();    
    localStorage.setItem("task7", taskName7);

    var taskName8=$('#task-input8').val();    
    localStorage.setItem("task8", taskName8);

    var taskName9=$('#task-input9').val();    
    localStorage.setItem("task9", taskName9);


    
    
  })


  function getSavedTasks(){

    console.log("getting previous tasks");

    var saved0 = localStorage.getItem("task0");
    $('#task-input0').text(saved0);

    var saved1 = localStorage.getItem("task1");
    $('#task-input1').text(saved1);

    var saved2 = localStorage.getItem("task2");
    $('#task-input2').text(saved2);

    var saved3 = localStorage.getItem("task3");
    $('#task-input3').text(saved3);

    var saved4 = localStorage.getItem("task4");
    $('#task-input4').text(saved4);

    var saved5 = localStorage.getItem("task5");
    $('#task-input5').text(saved5);

    var saved6 = localStorage.getItem("task6");
    $('#task-input6').text(saved6);

    var saved7 = localStorage.getItem("task7");
    $('#task-input7').text(saved7);

    var saved8 = localStorage.getItem("task8");
    $('#task-input8').text(saved8);

    var saved9 = localStorage.getItem("task9");
    $('#task-input9').text(saved9);

  }
  
  
  
  $(document).ready(function() {
    displayDate()
    getSavedTasks()
    console.log(window.localStorage);
    colorCoding()
    
  })