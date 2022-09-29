<template>
  <Container>
    <Bullet v-for="(bullet, idx) in bullets" :key="idx" :x="bullet.x" :y="bullet.y"></Bullet>
    <Plane :plane="plane" />
  </Container>
</template>
<script setup lang="ts">
import Plane from './components/plane.vue'
import Bullet from './components/bullet.vue'
import { reactive } from 'vue'
import { initGame } from './game'

// setInterval(() => {
//   plane.attack()
// }, 700)

const { plane, bullets } = initGame(reactive({}), reactive([]))
</script>

<style>
body {
  text-align: center;
}
</style>
