import firebase from "firebase";

const config = {
  apiKey: "AIzaSyDuqoqG7-4qRk3U6wBBP9cC0SgRgtsv6wE",
  authDomain: "https://apigithub-db9e8.firebaseio.com",
  databaseURL: "https://apigithub-db9e8.firebaseio.com",
};

firebase.initializeApp(config);

export const db = firebase.database();
