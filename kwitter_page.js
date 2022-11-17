//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAilnm8KZdy46lBF6McCyOdV3W0_F6lxl8",
      authDomain: "kwitter-e067d.firebaseapp.com",
      databaseURL: "https://kwitter-e067d-default-rtdb.firebaseio.com",
      projectId: "kwitter-e067d",
      storageBucket: "kwitter-e067d.appspot.com",
      messagingSenderId: "640555701305",
      appId: "1:640555701305:web:3411e5ad2aa5fe29a169e8"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    
      user_name = localStorage.getItem("user_name")
      room_name = localStorage.getItem("room_name")
    
      function send()
      {
       msg = document.getElementById("msg").value
       firebase.database().ref(room_name).push({
        name: user_name,
        message: msg,
        like: 0
       })
       document.getElementById("msg").value = " "
      }
    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
             firebase_message_id = childKey;
             message_data = childData;
    //Start code
    
    //End code
          } });  }); }
    getData();
    