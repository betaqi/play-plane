<template>
  <Container :x="plane.x" :y="plane.y">
    <Sprite :texture="planePng"></Sprite>
  </Container>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, PropType, reactive, Ref, ref } from 'vue'
import planePng from '../assets/plane.png'
import type { IPlane } from '../game'

const { plane } = defineProps({
  plane: {
    type: Object as PropType<IPlane>,
    required: true
  }
})

const keyDown = (e: KeyboardEvent) => {
  switch (e.code) {
    case 'ArrowDown':
      plane.moveDown()
      break
    case 'ArrowUp':
      plane.moveUp()
      break
    case 'ArrowLeft':
      plane.moveLeft()
      break
    case 'ArrowRight':
      plane.moveRight()
      break
    case 'Space':
      plane.attack()
  }
}

onMounted(() => {
  addEventListener('keydown', keyDown)
})
onUnmounted(() => {
  removeEventListener('keydown', keyDown)
})
</script>

<style scoped></style>
