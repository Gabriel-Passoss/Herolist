import { ref, computed } from 'vue'
import { http } from '../services/axios.js'

const timeStamp = '1655940616667';
const publicKey = '2c70e036a6175dd5b71c49194f1b773c';
const hash = 'a3eb6ac42f1c7d1fbe62e1a4f94c8b2c';

const heroes = ref([])
const filterFavorite = ref(false)
const favoriteHeroes = ref([])
const searchHeroes = ref("")

const showHeroes = computed(() => filterFavorite.value ? favoriteHeroes.value : heroes.value)

const filteredHero = computed(() => {
  if (!searchHeroes.value) return showHeroes.value
  return showHeroes.value.filter((hero) => hero.name.toLowerCase().trim().search(searchHeroes.value.toLowerCase().trim()) > -1)
})

function fetchHeroes() {
  http.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .then((res) => {
      console.log(res.data.data.results)
      heroes.value = res.data.data.results
    })
}

function toggleHeroSelected(idHero) {
  const heroIndex = favoriteHeroes.value.findIndex((x) => x.id == idHero)
  if (heroIndex > -1) {
    favoriteHeroes.value.splice(heroIndex, 1)
  } else {
    const heroSelected = heroes.value.find((x) => x.id == idHero)
    favoriteHeroes.value.push(heroSelected)
  }
}

function toggleFilterFavorite() {
  filterFavorite.value = !filterFavorite.value
}

export const useHeroes = () => {
  return {
    heroes,
    fetchHeroes,
    toggleHeroSelected,
    favoriteHeroes,
    filterFavorite,
    toggleFilterFavorite,
    searchHeroes,
    filteredHero,
  }
}