// import React, { createContext, useEffect, useState } from "react";
// import {
//   GoogleAuthProvider,
//   createUserWithEmailAndPassword,
//   getAuth,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signInWithPopup,
//   signOut,
//   updateProfile,
// } from "firebase/auth";
// import app from "../firebase/firebase.config";

// export const AuthContext = createContext();
// const auth = getAuth(app);
// const googleProvider = new GoogleAuthProvider();

// const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [loading, setloading] = useState(true);

//   const createUser = (email, password) => {
//     return;
//     createUserWithEmailAndPassword(auth, email, password);
//   };

//   const signUpWithGmail = () => {
//     return signInWithPopup(auth, googleProvider);
//   };

//   const login = (email, password) => {
//     return signInWithEmailAndPassword(auth, email, password);
//   };

//   const logOut = () => {
//     signOut(auth);
//   };

//   const updateuserProfile = (name, photoURL) => {
//     updateProfile(auth.currentUser, {
//       displayName: name,
//       photoURL: photoURL,
//     });
//   };

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
//       if (currentUser) {
//         setUser(currentUser);
//         setloading(false);
//       } else {
//         // User is signed out
//         // ...
//       }
//     });
//     return () => {
//       return unsubscribe();
//     };
//   }, []);

//   const authInfo = {
//     user,
//     createUser,
//     signUpWithGmail,
//     login,
//     logOut,
//     updateuserProfile,
//   };

//   return (
//     <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
//   );
// };

// export default AuthProvider;

import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  // updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signUpWithGmail = () => {
    const googleProvider = new GoogleAuthProvider();
    googleProvider.setCustomParameters({ prompt: "select_account" });
    return signInWithPopup(auth, googleProvider);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  // const updateuserProfile = (name, photoURL) => {
  //   return updateProfile(auth.currentUser, {
  //     displayName: name,
  //     photoURL: photoURL,
  //   });
  // };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signUpWithGmail,
    login,
    logOut,
    // updateuserProfile,
    
  };

  return (
    <AuthContext.Provider value={authInfo}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
