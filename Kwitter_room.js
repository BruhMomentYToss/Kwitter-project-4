// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyDNtASR0VBHFwPc9hdsnuM5pzCthqU8BwA",
      authDomain: "kwitter-ace31.firebaseapp.com",
      databaseURL: "https://kwitter-ace31-default-rtdb.firebaseio.com",
      projectId: "kwitter-ace31",
      storageBucket: "kwitter-ace31.appspot.com",
      messagingSenderId: "738392522352",
      appId: "1:738392522352:web:dbb9b4b4af7e863b777eb5"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE


user_name= localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome "+user_name + "!";

function addRoom()
{
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
            
      })
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html"
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room name- "+ Room_names);
      row="<div class='room_name' id=" + Room_names + "onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>" 
      document.getElementById("output").innerHTML=row;
      //End code
      });});}
getData();


function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location="kwitter_page.html"
}

function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}