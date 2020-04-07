<template>
  <div>
    <nav class="navbar bg-dark">
      <h5>
        <router-link to="/">
          <i class="fas fa-code"></i>Vue Login
        </router-link>
      </h5>
      <ul>
        <li>
          <router-link to="/profile" id="profile-navbar">Profile</router-link>
        </li>
        <li>
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/register">Register</router-link>
        </li>
        <li>
          <router-link to="/" @click.native="logout" id="logout-navbar">Logout</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
<script>
  import $ from "jquery";
  import EventBus from "./EventBus";

  EventBus.$on('logged_in', test => {
    console.log(test)
  })

  export default {
    data() {
      if (localStorage.getItem('usertoken') == null) {
        console.log($('#profile-navbar').text())
      }
      return {
        auth: '',
        user: ''
      }
    },

    methods: {
      logout() {
        localStorage.removeItem('usertoken');
      }
    },

    mounted() {
      EventBus.$on('logged_in', status => {
        this.auth = status
      })
    }
  }
</script>
