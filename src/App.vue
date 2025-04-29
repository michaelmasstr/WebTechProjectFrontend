<template>
  <div>
    <nav>
      <router-link to="/">Login</router-link> |
      <router-link to="/dashboard">Dashboard</router-link> |
      <router-link to="/admin">Admin</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {}
</script>

<style>
nav {
  background-color: #eee;
  padding: 10px;
  text-align: center;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: black;
}
</style>
