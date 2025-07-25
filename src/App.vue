<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <nav class="navbar bg-dark navbar-dark">
  <div class="container">
    <router-link class="navbar-brand" to="/">
      <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
      Poké API
    </router-link>
    <div>
      <router-link class="btn btn-outline-primary me-2" to="/">Home</router-link>
      <router-link class="btn btn-outline-primary" to="/pokemon">Pokémon</router-link>
    </div>
  </div>
</nav>

<div class="container text-center">
  <RouterView />
</div>

  
</template>

