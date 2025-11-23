<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>VueSFC</h1>

      <nav>
        <RouterLink to="/">Quotes List</RouterLink>
        <RouterLink to="/random">Random Quote</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

header {
  line-height: 1.5;
  max-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #eee;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
  margin-top: 1rem;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
  text-decoration: none;
  color: #333;
}

nav a.router-link-exact-active {
  color: #42b663;
  font-weight: bold;
}

nav a:first-of-type {
  border: 0;
}
</style>