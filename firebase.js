// Firebase
console.log("hiii")

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLIRRVrwKDBUmJDFX_keiWHlHY_YTOhM",
  authDomain: "technexus-8922a.firebaseapp.com",
  projectId: "technexus-8922a",
  storageBucket: "technexus-8922a.appspot.com",
  messagingSenderId: "684302873445",
  appId: "1:684302873445:web:29593df706b63d76f6a78c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

const auth = getAuth();


window.signup = function(e) {
  e.preventDefault(); 
  var obj = {
    Name: document.getElementById("username").value,
    Email: document.getElementById("email").value,
    Password: document.getElementById("password").value
  };
  createUserWithEmailAndPassword(auth, obj.Email, obj.Password)
    .then(()=> {
      Swal.fire({
        title: "Good job!",
        text: "You have successfully signed up!",
        icon: "success"
      }).then(() => {
        
        document.location.href = "login.html";
      });
    })
    .catch(function(err) {
      alert("Error: " + err);
    });
  console.log(obj);
};
