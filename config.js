
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js ";
   

  const firebaseConfig = {
    apiKey: "AIzaSyCG4R09XJx5ZoIQcmxDyUKj1dhvC05PAEQ",
    authDomain: "netflix-clone-983b6.firebaseapp.com",
    projectId: "netflix-clone-983b6",
    storageBucket: "netflix-clone-983b6.appspot.com",
    messagingSenderId: "959000966746",
    appId: "1:959000966746:web:63f9feae97e5c88a4f8a63",
    measurementId: "G-Q33CV7BB42"
  };
  
  // Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);


 
