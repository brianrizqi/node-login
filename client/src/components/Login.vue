<template>
  <section class="container">
    <!--    <div class="alert alert-danger">-->
    <!--      Invalid credentials-->
    <!--    </div>-->
    <h1 class="large text-primary">
      Login
    </h1>
    <p class="lead">
      Sign into your account
    </p>
    <form class="form" v-on:submit.prevent="login">
      <div class="form-group">
        <input type="text" placeholder="Email" v-model="email">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password" v-model="password">
      </div>
      <input type="submit" value="Login" class="btn btn-primary">
    </form>
    <p class="my-1">
      Dont have an account?
      <router-link to="/register">Login</router-link>
    </p>
  </section>
</template>

<script>
  import axios from 'axios'
  import router from '../router'
  import EventBus from "./EventBus";

  export default {
    data() {
      return {
        email: '',
        password: ''
      }
    },

    methods: {
      login() {
        axios.post('/api/login', {
          email: this.email,
          password: this.password
        }).then(res => {
          localStorage.setItem('usertoken', res.data.token);
          this.email = '';
          this.password = '';
          router.push({name: 'Profile'})
        }).catch(err => {
          console.log(err);
        })
        this.emitMethod();
      },
      emitMethod() {
        EventBus.$emit('logged_in','loggedin')
      }
    }
  }
</script>
