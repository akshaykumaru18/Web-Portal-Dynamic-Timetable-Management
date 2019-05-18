  alert("Linked")
  var tblUsers = document.getElementById('tbl_users_list');
  var databaseRef = firebase.database().ref('Users/');
  var rowIndex = 1;

  databaseRef.once('value', function(snapshot) {
    snapshot.forEach(function(childSnapshot) {
   var childKey = childSnapshot.key;
   var childData = childSnapshot.val();

   var row = tblUsers.insertRow(rowIndex);
   var cellId = row.insertCell(0);
   var cellName = row.insertCell(1);
   cellId.appendChild(document.createTextNode(childKey));
   cellName.appendChild(document.createTextNode(childData.user_name));

   rowIndex = rowIndex + 1;
    });
  });

  function save_user(){
   var user_name = document.getElementById('user_name').value;

   var uid =document.getElementById('user_id').value;

   var data = {
    user_id: uid,
    user_name: user_name
   }

   var updates = {};
   updates['/Users/' + uid] = data;
   firebase.database().ref().update(updates);

   alert('The user is created successfully!');
   reload_page();
  }

  function update_user(){
   var user_name = document.getElementById('user_name').value;
   var user_id = document.getElementById('user_id').value;

   var data = {
    user_id: user_id,
    user_name: user_name
   }

   var updates = {};
   updates['/Users/' + user_id] = data;
   firebase.database().ref().update(updates);

   alert('The user is updated successfully!');

   reload_page();
  }

  function delete_user(){
   var user_id = document.getElementById('user_id').value;

   firebase.database().ref().child('/Users/' + user_id).remove();
   alert('The user is deleted successfully!');
   reload_page();
  }

  function reload_page(){
   window.location.reload();
  }
