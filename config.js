import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA84MbcFurbPbZmxLxB6fFY5InSLJ_hJug",
  authDomain: "schoolattendence-app-a96f9.firebaseapp.com",
  databaseURL: "https://schoolattendence-app-a96f9-default-rtdb.firebaseio.com",
  projectId: "schoolattendence-app-a96f9",
  storageBucket: "schoolattendence-app-a96f9.appspot.com",
  messagingSenderId: "619209052702",
  appId: "1:619209052702:web:995df3084707ab3a59940f"
};
let app = firebase.initializeApp(firebaseConfig);
 export default app.database();