<template>
  <v-app>
    <v-main>
      <AppBar />
      <Home />
    </v-main>
  </v-app>
</template>

<script setup>
  import Home from '@/components/Home.vue'
  import AppBar from '@/components/AppBar.vue'
</script>
