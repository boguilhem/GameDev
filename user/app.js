// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8qgRPsI7lhkHDJXolsN7Jx8dPqEvk_N0",
  authDomain: "amagad-dnd-simulator.firebaseapp.com",
  databaseURL: "https://amagad-dnd-simulator.firebaseio.com",
  projectId: "amagad-dnd-simulator",
  storageBucket: "amagad-dnd-simulator.appspot.com",
  messagingSenderId: "657061116541",
  appId: "1:657061116541:web:98d38cb385c7dde49d4f14",
  measurementId: "G-CF001VZ2V0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const dbRef = firebase.database().ref();

const usersRef = dbRef.child('users');
const userListUI = document.getElementById("userList");

usersRef.on("child_added", snap => {

    let user = snap.val();

    let $li = document.createElement("li");
    $li.innerHTML = user.name;
    $li.setAttribute("child-key", snap.key);
    $li.addEventListener("click", userClicked)
    userListUI.append($li);
});


function userClicked(e) {

    var userID = e.target.getAttribute("child-key");

    const userRef = dbRef.child('users/' + userID);
    const userDetailUI = document.getElementById("userDetail");

    userDetailUI.innerHTML = ""

    userRef.on("child_added", snap => {
        var $p = document.createElement("p");
        $p.innerHTML = snap.key + " - " + snap.val()
        userDetailUI.append($p);
    });

}

