import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import firebase from "firebase/compat/app"
// import firebase from "firebase";
require("firebase/auth");
Vue.prototype.$axios = axios
Vue.config.productionTip = false



// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDExREjRjGH_qbRY7uhfwRln7Ea1eSK5SU",
  authDomain: "test-a2ff1.firebaseapp.com",
  projectId: "test-a2ff1",
  storageBucket: "test-a2ff1.appspot.com",
  messagingSenderId: "681156163349",
  appId: "1:681156163349:web:bc4d0f3cb66b35f409db1c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
