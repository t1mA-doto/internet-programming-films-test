<template>
  <div id="app">
    <nav>
      <router-link to="/movies">Список фильмов</router-link>
    </nav>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
#app {
  font-family: Arial, sans-serif;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

nav {
  background-color: #42b983;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
}

nav a {
  color: white;
  text-decoration: none;
  font-size: 18px;
  font-weight: bold;
  padding: 8px 16px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: #359268;
}

.container {
  background-color: #f5f5f5;
  border-radius: 8px;
  padding: 20px;
  min-height: 400px;
}
</style>
