<script setup>
import { ref, defineProps, computed } from 'vue'
import { useHeroes } from '../composables/heroesHook'
import { HeartIcon } from '@heroicons/vue/solid'
import { HeartIcon as HeartOutline } from '@heroicons/vue/outline'

const { toggleFavoriteHero, listHeroesFavorites } = useHeroes()

const props = defineProps({
  hero: Object,
})

const isFavorited = computed(() => {
  return listHeroesFavorites.value.some((x) => x.id == props.hero.id)
})

</script>

<template>
  <main>
    <img :src="props.hero.thumbnail.path + '.' + props.hero.thumbnail.extension" alt="">
    <div>
      <h1>{{ props.hero.name }}</h1>
      <p>{{ props.hero.description }}</p>
      <button class="details">
        <a :href="props.hero.urls[0].url" target="_blank" class="details">More details</a>
      </button>
      <a @click="toggleFavoriteHero(props.hero.id)" :class="{favorited: isFavorited}" id="favoriteButton">
        <HeartIcon v-if="isFavorited" class="favorite-icon"/>
        <HeartOutline v-else class="favorite-icon"/>

      </a>
    </div>
  </main>
</template>

<style scoped>
  

main {
  width: 100vw;
  height: calc(100vh - 80px);
  background-color: rgb(32, 32, 32);

  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: center;
}

img {
  margin-top: 5.5rem;
  height: 35rem;
  width: 35rem;
  border-radius: 20px;
  max-width: 35rem;
  max-height: 35rem;
}

div {
  width: 45rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  position: relative;
}

h1 {
  font-family: 'Bebas Neue', sans-serif;
  font-size: 4.3rem;
  letter-spacing: 0.2rem;
  color: var(--title);

  margin-top: 2.5rem;
  margin-bottom: 2.5rem;

  text-shadow: 0 4px 0 black;
  border-bottom: 1px solid #fff;
}

p {
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  letter-spacing: 0.03rem;
  color: var(--description);
  text-align: center;

  text-shadow: 0 1px 0 black;
}

#favoriteButton {
  position: absolute;
  top: -170px;
  right: 30px;

}

a.favorited .icon {
  transform: scale(1.28)
}
.favorite-icon {
  margin: 1.5rem;
  height: 1.7rem;
  color: #EB1E01;
}

button.details {
  width: 9rem;
  max-height: 3rem;
  border-radius: 15px;

  background-color: #f1333d;
  box-shadow: 0 1px 0 black;
  border: none;

  padding: 2px 1rem;
  margin-top: 1.5rem;

  transition: 0.4s
}

button.details:hover {
  background-color: #F0141E
}

a.details {
  font-family: 'Inter', sans-serif;
  font-size: 1.07rem;
}

@media (max-width: 1080px) {
  main {
    height: calc(100vh - 70px);
  }

  img {
    max-height: 300px;
    max-width: 300px;
    margin-top: 9rem;
  }
}

@media (min-width: 1080px) {
  main {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    max-width: calc(100vw - 18px);
  }

  img {
    margin-right: 8rem;
  }
}
</style>