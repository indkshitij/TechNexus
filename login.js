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
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// const auth = getAuth();


// Firebase configuration and initialization (already included in your code)

// Assuming you have included the Firebase SDK and Swal library in your HTML file

const loginButton = document.getElementById("login");
loginButton.addEventListener("click", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Login successful
      Swal.fire({
        title: "Welcome back!",
        text: "You have successfully logged in!",
        icon: "success"
      }).then(() => {
        // Redirect to a different page
        document.location.href = "inde.html";
      });
    })
    .catch((error) => {
      // Login failed
      Swal.fire({
        title: "Login failed",
        text: "Invalid email or password",
        icon: "error"
      });
    });
});
