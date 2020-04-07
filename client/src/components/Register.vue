<template>
  <section class="container">
    <h1 class="large text-primary">
      Register
    </h1>
    <p class="lead">
      Create your Account
    </p>
    <form action="/" class="form">
      <div class="form-group">
        <input type="text" placeholder="Nama">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Email">
      </div>
      <div class="form-group">
        <input type="text" placeholder="Username">
      </div>
      <div class="form-group">
        <input type="password" placeholder="Password">
      </div>
      <input type="button" value="Register" class="btn btn-primary">
    </form>
    <p class="my-1">
      Already have an account?
      <router-link to="/login">Login</router-link>
    </p>
  </section>
</template>

<script>
  export default {
    name: "Register"
  }
</script>

<style scoped>

</style>
