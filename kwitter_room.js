
//AÑADE TUS ENLACES DE FIREBASE
var firebaseConfig = {
      apiKey: "AIzaSyAWhKvTO6pzII1OxmNI2S1cs71A-zbV4dI",

      authDomain: "kwitter-f2ff4.firebaseapp.com",
    
      databaseURL: "https://kwitter-f2ff4-default-rtdb.firebaseio.com",
    
      projectId: "kwitter-f2ff4",
    
      storageBucket: "kwitter-f2ff4.appspot.com",
    
      messagingSenderId: "238934511995",
    
      appId: "1:238934511995:web:a0b2ab485424a9dfe02dde"
    
    
    };
    
    
    // Initialize Firebase
    
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Bienvenido a kwitter <3"+user_name+ "!"



    function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
   //Inicia código
      console.log(firebase_message_id);
      console.log(message_data);
      names = message_data['name'];
      message = message_data['message'];
      like = message_data['like'];
      name_with_tag = "<h4> " + names + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class= 'glyphicon glyphicon-thums-up'>Me gusta: " + like + "</span></button><hr>";

      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML +=row;
      //Finaliza código
   } });  }); }
getData();


