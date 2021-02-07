import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyC_DhEKz3wCwA3qJ5JJdlK71IJhW7G6EXY",
    authDomain: "pokemon-game-14755.firebaseapp.com",
    databaseURL: "https://pokemon-game-14755-default-rtdb.firebaseio.com",
    projectId: "pokemon-game-14755",
    storageBucket: "pokemon-game-14755.appspot.com",
    messagingSenderId: "949941730967",
    appId: "1:949941730967:web:635792f65c5330d55933d2"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
