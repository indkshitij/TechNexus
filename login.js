// // Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

// // Import the functions you need from the SDKs you need

//  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
//  const database = firebase.database()
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBMLIRRVrwKDBUmJDFX_keiWHlHY_YTOhM",
  authDomain: "technexus-8922a.firebaseapp.com",
  projectId: "technexus-8922a",
  storageBucket: "technexus-8922a.appspot.com",
  messagingSenderId: "684302873445",
  appId: "1:684302873445:web:29593df706b63d76f6a78c",
};

// // Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

document.getElementById("login").addEventListener("click", () => {
  console.log("hii");
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Login successful
    var user = userCredential.user;
    Swal.fire({
      title: "Welcome!",
      text: "You Are Successfully Logged In!",
      icon: "success",
    }).then(() => {
      // Redirect to a different page
      document.location.href = "./index.html";
    });
  })
  .catch((error) => {
    // Login failed
    var errorCode = error.code;
    var errorMessage = error.message;
    Swal.fire({
      title: "Try Again",
      text: "You have entered wrong email or password",
      icon: "error",
      button: "Try Again!",
    });
  });
});
