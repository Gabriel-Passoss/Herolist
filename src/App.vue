<script setup>
  import { onMounted } from 'vue'
  import { useHeroes } from './composables/heroesHook'
  import Header from './components/Header.vue'
  import Card from './components/Card.vue'

  const { heroes, fetchHeroes } = useHeroes()

  onMounted(() => {
    fetchHeroes()
  })
</script>

<template>
  <Header />
  <div
    v-for="hero in heroes"
    :key="hero.id"
  >
  <Card
    @selected="setHeroSelected($event)"
    @removeSelected="removeHeroSelected($event)"
    :hero="hero"
  />
  </div>
</template>

<style>
</style>
