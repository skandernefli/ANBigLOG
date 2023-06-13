// main.js

import Vue from 'vue';
import App from './App.vue';
import router from './router';
import { store } from './store/index';

import '../src/assets/css/bootstrap.min.css';
import '../src/assets/css/font-awesome.min.css';
import '../src/assets/css/magnific-popup.css';
import '../src/assets/css/default.css';
import '../src/assets/css/style.css';
import '../src/assets/css/custom.css';

Vue.config.productionTip = false;

let app = null;



// Function to check if network connection is available
function isOnline() {
  return window.navigator.onLine;
}

// Function to pause or resume the app based on network status
function handleNetworkStatusChange() {
  if (isOnline()) {
    console.log('Network connection restored. Resuming app...');
    app =new Vue({
      store,
      router,
      render: h => h(App)
    }).$mount('#app');// Resume app execution
  } else {
    console.log('Network connection lost. Pausing app...');
    app.$destroy(); // Pause app execution
  }
}

// Listen for online/offline events
window.addEventListener('online', handleNetworkStatusChange);
window.addEventListener('offline', handleNetworkStatusChange);

// Initial check for network status
handleNetworkStatusChange();
