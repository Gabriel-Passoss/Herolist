<script>
  import Header from './components/Header.vue'
  import Card from './components/Card.vue'
  import { http } from './services/axios.js'

  const timeStamp = '1655940616667';
  const publicKey = '2c70e036a6175dd5b71c49194f1b773c';
  const hash = 'a3eb6ac42f1c7d1fbe62e1a4f94c8b2c';
  
  export default {
    name: 'App',
    components: {
      Header,
      Card
    },
    data() {
      return {
        heroName: 'string',
        heroDescription: 'string',
        hero: Array
      }
    },
    created() {
      http.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
        .then((res)  => {
        this.hero = res.data.data.results
        console.log(res.data.data.results)
      })
    }
  }
</script>

<template>
  <Header />
  <Card
    v-for="hero in hero"
    :hero="hero"
    :key="hero.id"
  />
</template>

<style>

</style>
