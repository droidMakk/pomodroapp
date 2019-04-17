import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBd0rXnoOueqO2yHZ3WjN-gPW_3d7nuYRY",
    authDomain: "pomdroapp.firebaseapp.com",
    databaseURL: "https://pomdroapp.firebaseio.com",
    projectId: "pomdroapp",
    storageBucket: "pomdroapp.appspot.com",
    messagingSenderId: "903821659307"
};

firebase.initializeApp(config);

export default firebase;