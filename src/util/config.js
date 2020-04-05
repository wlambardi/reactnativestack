import Firebase from 'firebase';
let config = {
    apiKey: "AIzaSyCDEmtKSjlhy7bLdgZJBcobSp4TuNM3zrs",
    authDomain: "rrhh-web-console.firebaseapp.com",
    databaseURL: "https://rrhh-web-console.firebaseio.com",
    projectId: "rrhh-web-console",
    storageBucket: "rrhh-web-console.appspot.com",
    messagingSenderId: "76886641181",
    appId: "1:76886641181:web:fac1556c44745107c854f4",
    measurementId: "G-0L1THHMXYZ"
};
let app = Firebase.initializeApp(config);
export const db = app.database();