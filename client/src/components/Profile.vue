<template>
  <section class="container">
    <h1 class="large text-primary">
      Profile
    </h1>
    <table>
      <tr>
        <td>Name</td>
        <td>:</td>
        <td>{{ name }}</td>
      </tr>
      <tr>
        <td>Email</td>
        <td>:</td>
        <td>{{ email }}</td>
      </tr>
      <tr>
        <td>Username</td>
        <td>:</td>
        <td>{{ username }}</td>
      </tr>
    </table>
  </section>
</template>

<script>
  import jwtDecode from 'jwt-decode';
  import router from '../router';

  export default {
    data() {
      const token = localStorage.usertoken;
      if (typeof token === 'undefined') {
        router.push({name: 'Login'})
      } else {
        const decode = jwtDecode(token);
        return {
          name: decode.name,
          email: decode.email,
          username: decode.username
        }
      }
    }
  }
</script>

<style scoped>

</style>
