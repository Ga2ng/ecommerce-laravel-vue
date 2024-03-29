/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

import './bootstrap';
import { createApp } from 'vue';
import router from './router';

import App from './App.vue';

import store from './store';

/**
 * Next, we will create a fresh Vue application instance. You may then begin
 * registering components with the application instance so they are ready
 * to use in your application's views. An example is included for you.
 */

const app = createApp({
  components: {
    App
  }
});

import Navbar from './components/Navbar.vue';
app.component('Navbar', Navbar);

import ButtonDirect from './components/ButtonDirect.vue';
app.component('ButtonDirect', ButtonDirect);

import ButtonState from './components/ButtonState.vue';
app.component('ButtonState', ButtonState);

import Card from './components/Card.vue';
app.component('Card', Card);

import NotifCart from './components/NotifCart.vue';
app.component('NotifCart', NotifCart);

import CartItem from './components/CartItem.vue';
app.component('CartItem', CartItem);

import PopUpCheckout from './components/PopUpCheckout.vue';
app.component('PopUpCheckout', PopUpCheckout);


// import App from './App.vue';
// app.component('App', App);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Object.entries(import.meta.glob('./**/*.vue', { eager: true })).forEach(([path, definition]) => {
//     app.component(path.split('/').pop().replace(/\.\w+$/, ''), definition.default);
// });

/**
 * Finally, we will attach the application instance to a HTML element with
 * an "id" attribute of "app". This element is included with the "auth"
 * scaffolding. Otherwise, you will need to add an element yourself.
 */

app.use(store);
app.use(router);
app.mount('#app');
