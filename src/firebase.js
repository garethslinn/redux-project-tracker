import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyAHn2BUDDGr-XCvw_S9ckETrlrhOfrDJWs",
    authDomain: "tracker-a3d83.firebaseapp.com",
    databaseURL: "https://tracker-a3d83.firebaseio.com",
    projectId: "tracker-a3d83",
    storageBucket: "tracker-a3d83.appspot.com",
    messagingSenderId: "269905149442"
};

export const firebaseApp = firebase.initializeApp(config);