// // Firebase
// console.log("hiii")

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";

// //  import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-database.js";
// //  const database = firebase.database()
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMLIRRVrwKDBUmJDFX_keiWHlHY_YTOhM",
//   authDomain: "technexus-8922a.firebaseapp.com",
//   projectId: "technexus-8922a",
//   storageBucket: "technexus-8922a.appspot.com",
//   messagingSenderId: "684302873445",
//   appId: "1:684302873445:web:29593df706b63d76f6a78c"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-auth.js";

//  const auth = getAuth();


// window.login = function(e) {
//   e.preventDefault(); 

//   function signInWithEmailPassword() {
//     var email = "test@example.com";
//     var password = "hunter2";
//     // [START auth_signin_password]
//     auth.signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         alert("hb")
//         // ...
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//       });
// };
  
// }
// Firebase configuration and initialization (already included in your code)

// Assuming you have included the Firebase SDK in your HTML file

window.login = function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Login successful
      var user = userCredential.user;
      alert("Login successful!");
      // Redirect to a different page
      document.location.href = "./index.html";
    })
    .catch((error) => {
      // Login failed
      var errorCode = error.code;
      var errorMessage = error.message;
      alert("Error: " + errorMessage);
    });
};
