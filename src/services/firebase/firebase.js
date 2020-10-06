import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCNH_Y_8CyucgHO4EPxSWXo3tqj7fdA2sI',
  authDomain: 'react-firebase-poc-1c7c7.firebaseapp.com',
  databaseURL: 'https://react-firebase-poc-1c7c7.firebaseio.com',
  projectId: 'react-firebase-poc-1c7c7',
  storageBucket: 'react-firebase-poc-1c7c7.appspot.com',
  messagingSenderId: '22747307388',
  appId: '1:22747307388:web:7f1b827487805fa48118f9',
  measurementId: 'G-35J14GSF02',
};

firebase.initializeApp(config);

export default firebase;
