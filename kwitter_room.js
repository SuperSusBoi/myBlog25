const firebaseConfig = {
    apiKey: "AIzaSyDJcp-R60Za8OvuzL2t1ofMhKD_WvaIUIs",
    authDomain: "kwitterproject-cf550.firebaseapp.com",
    projectId: "kwitterproject-cf550",
    storageBucket: "kwitterproject-cf550.appspot.com",
    messagingSenderId: "5366307238",
    appId: "1:5366307238:web:ef940aa4690c749f691767"
};

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;

                console.log("Room Name - " + Room_names);
                row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div<hr>";
                document.getElementById("output").innerHTML += row;

          });
    });
}
getData();

function addRoom() {
    room_name = document.getElementById("room_name").value;

    firebase.database().ref("/").child(room_name).update({
          purpose : "adding room name"
    });

    localStorage.setItem("room_name", room_name);

    window.location = "kwitter_page.html";
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}