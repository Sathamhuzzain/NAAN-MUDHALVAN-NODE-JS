// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // console.log(import.meta.env.VITE_SOME_KEY);

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_APIKEY,
//   authDomain: import.meta.env.VITE_AUTHDOMAIN,
//   projectId: import.meta.env.VITE_PROJECTID,
//   storageBucket: import.meta.env.VITE_STORAGEBUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
//   appId: import.meta.env.VITE_APPID,
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// console.log(import.meta.env.VITE_SOME_KEY);

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
};

// Import the functions you need from the SDKs you need

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyCCJj6_lkz-oIWEGpLtl3KZ_W928GghEfY",
//   authDomain: "foodyard-project.firebaseapp.com",
//   projectId: "foodyard-project",
//   storageBucket: "foodyard-project.appspot.com",
//   messagingSenderId: "354466081318",
//   appId: "1:354466081318:web:03a96670fb2030de8f94e7",
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

// const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app; // Add this line
