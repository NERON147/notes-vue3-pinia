<template>

<nav
  class="navbar is-dark"
  aria-label="main navigation"
  role="navigation"
>
    <div class="container is-max-desktop px-2">

    
  <div class="navbar-brand">
    <div class="navbar-item is-size-4 is-family-monospace" >
      Notes
    </div>

    <a
    @click.prevent="showMobileNav = !showMobileNav"
      class="navbar-burger"
      :class="{ 'is-active' : showMobileNav }"
      aria-expanded="false"
      aria-label="menu"
      data-target="navbarBasicExample"
      role="button"
    >
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </a>
  </div>

  <div
    id="navbarBasicExample"
    class="navbar-menu"
    :class="{ 'is-active' : showMobileNav }"
  >

    <div class="navbar-end">
      <router-link to="/" class="navbar-item">
        Notes
    </router-link>
    <router-link to="/stats" class="navbar-item">
        Stats
    </router-link>
    </div>
  </div>
</div>
</nav>

</template>

<script setup>
import { ref } from 'vue';

const showMobileNav = ref(false)
</script>

<style>

@media (max-width: 1023px){
    .navbar-menu{
        position: absolute;
        left: 0;
        width: 100%;
    }
}

</style>