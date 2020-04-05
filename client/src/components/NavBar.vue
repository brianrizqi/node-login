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
          <router-link to="/login">Login</router-link>
        </li>
        <li>
          <router-link to="/login">Register</router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
  export default {
    name: "NavBar"
  }
</script>

<style scoped>

</style>
