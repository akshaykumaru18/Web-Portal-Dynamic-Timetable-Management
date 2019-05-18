
function addNewFaculty() {

  var facultyName = document.getElementById('facultyName').value;
  var contactNumber = document.getElementById('contactNumber').value;
  var emailId = document.getElementById('emailid').value;
  var department = document.getElementById('departments').value;
  validateEmail(emailId);

}


function createAccount(){
  var email = document.getElementById('emailid').value;
  var password = "password";
alert("create Account Linked");
firebase.auth().createUserWithEmailAndPassword(email, password).then(function(){
    var user = firebase.auth().currentUser.uid;
    var database = firebase.database();
    firebase.database().ref('users/' + firebase.auth().currentUser.uid + '/').set({
      department : "COMPUTER SCIENCE AND ENGINEERING",
      emailID : email,
      security_level : "1",
      user_id : firebase.auth().currentUser.uid,
    });
    //To Send Verification Email
    var user = firebase.auth().currentUser;
    user.sendEmailVerification().then(function() {
        alert("email sent");
      }).catch(function(error) {
        alert(error.message);
      });

}).catch(function(error) {
   console.log(error.code);
   console.log(error.message);
});

}

function validateEmail(sEmail) {

  var facultyName = document.getElementById('facultyName').value;
  var contactNumber = document.getElementById('contactNumber').value;
  var emailId = document.getElementById('emailid').value;
  var department = document.getElementById('departments').value;

  alert("Triggered");
  var reEmail = /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/;

  if(sEmail.match(reEmail)) {
  //  alert("valid email address");

    var phoneno = /^\d{10}$/;
      if(contactNumber.match(phoneno)){
        alert("valid phone number");
        var database = firebase.database();
        firebase.database().ref('COMPUTER SCIENCE AND ENGINEERING/Faculty/Lecturers/' + facultyName).set({
          department : "COMPUTER SCIENCE AND ENGINEERING",
          emailID: sEmail,
          lecturerName : facultyName,
          phoneNumber : contactNumber,
        });

        createAccount();
        return true;
      }else{
        alert("invalid phone number");
      }


  }
    return false;

}






/*
function loadFaculty(){

  var rootRef = firebase.database().ref().child("COMPUTER SCIENCE AND ENGINEERING/subjects");
  rootRef.on("child_added", snap =>{

    var subjectName = snap.child("subject_Name").val();

  //  alert("Subject Name : " + subjectName);
   alert(subjectName);
    //  alert(snap.val());
  });

}
*/
