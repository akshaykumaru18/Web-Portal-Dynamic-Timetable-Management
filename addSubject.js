function initFaculty(){
  var rootRef = firebase.database().ref().child("COMPUTER SCIENCE AND ENGINEERING/Faculty/Lecturers/");
  rootRef.on("child_added", snap =>{
    var facultyName = snap.child("lecturerName").val();
    var x = document.getElementById("facultyList");
    var option = document.createElement("option");
    option.text = facultyName;
    x.add(option);
    //alert(facultyName);
  });

}

function initSubjects(){
  var rootRef = firebase.database().ref().child("COMPUTER SCIENCE AND ENGINEERING/subjects/");
  rootRef.on("child_added", snap =>{
    var subjectName = snap.child("subject_Name").val();
    var table = document.getElementById("subjectList");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    cell1.innerHTML = subjectName;
    row.appendChild(cell1);
    table.appendChild(row);
  });

}


function addNewSubject() {

  var year = document.getElementById('year').value;
  var subjectName = document.getElementById('subName').value;
  var semester = document.getElementById('semester').value;
  var subjectCode = document.getElementById('subCode').value;
  var numUnits = document.getElementById('numUnits').value;
  var lecturerName = document.getElementById('facultyList').value;
  alert(subjectName + semester + subjectCode + numUnits + year);
  writeSubjectData(subjectName, semester, subjectCode, numUnits, lecturerName,year);
  loadSubjectData();
  facultySubject();


}

function facultySubject(){
//  alert("triggered");
    var subjectName = document.getElementById('subName').value;
    var lecturerName = document.getElementById('facultyList').value;
    var semester = document.getElementById('semester').value;

   var database = firebase.database();
   firebase.database().ref('COMPUTER SCIENCE AND ENGINEERING/Faculty/Lecturers/'+ lecturerName+'/'+'subject Handled/'+ semester +'/' + subjectName + '/').set({
  department : "COMPUTER SCIENCE AND ENGINEERING",
  semester : semester,
  subject_Name : subjectName,
});
}


function writeSubjectData(subjectName, semester, subjectCode, numUnits,lecturerName,year) {

    // Get a reference to the database service
  var database = firebase.database();
  firebase.database().ref('COMPUTER SCIENCE AND ENGINEERING/subjects/' + subjectName).set({
  department : "COMPUTER SCIENCE AND ENGINEERING",
  number_of_Units: numUnits,
  semester : semester,
  subject_Code : subjectCode,
  subject_Name : subjectName,
  lecturerName : lecturerName,
  year : year,
});

//reload_page();
}
