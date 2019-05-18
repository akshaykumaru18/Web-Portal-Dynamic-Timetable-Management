function update_Timetable(){
var days = ["","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  alert("function triggered");

for (var i = 1; i < 10; i++) {

   for (var j = 1; j < 10; j++) {
      var content = document.getElementById("timetable").rows[i].cells[j].innerText;
      if(content === '' ){
        alert("Empty");
      }else{
        //alert(timeings[j]);
       alert("Subject : " + content + " Time : " + timings[j] + "Day : " + days[i]");
      }
     //iterate through columns
     //columns would be accessed using the "col" variable assigned in the for loop
   }
}
}
