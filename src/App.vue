<script setup>
  import { onMounted, computed } from 'vue'
  import { useHeroes } from './composables/heroesHook'
  import HeaderComponent from './components/Header.vue'
  import Card from './components/Card.vue'

  const { fetchHeroes, filteredHero } = useHeroes() 

  onMounted(() => {
    fetchHeroes()
  })
</script>

<template>
  <HeaderComponent />
  <div
    v-for="hero in filteredHero"
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
