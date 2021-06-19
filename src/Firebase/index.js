import firebase from 'firebase'; 

const firebaseConfig = {
    apiKey: "AIzaSyBk0RIfTPuNx8LHOYx9XOywhw2aOYP2w7s",
    authDomain: "ycmlg-2021.firebaseapp.com",
    databaseURL: "https://ycmlg-2021-default-rtdb.firebaseio.com",
    projectId: "ycmlg-2021",
    storageBucket: "ycmlg-2021.appspot.com",
    messagingSenderId: "342265162233",
    appId: "1:342265162233:web:1a87274126e0c626467528"
}; 

export default firebase.initializeApp(firebaseConfig);