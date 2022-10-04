<template>
  <Container>
    <Bullet v-for="(bullet, idx) in bullets" :key="idx" :x="bullet.x" :y="bullet.y" />
    <Plane :plane="plane" />
    <EnemyPlane v-for="(bullet, idx) in enemyPlane" :key="idx" :x="bullet.x" :y="bullet.y" />
  </Container>
</template>
<script setup lang="ts">
import Plane from './components/plane.vue'
import Bullet from './components/bullet.vue'
import EnemyPlane from './components/enemy-plane.vue'
import { reactive } from 'vue'
import { initGame } from './game'

// setInterval(() => {
//   plane.attack()
// }, 700)
setInterval(()=>{
},1000)


const { plane, bullets, enemyPlane } = initGame(reactive({}), reactive([]), reactive([]))
</script>

<style>
body {
  text-align: center;
}
</style>
