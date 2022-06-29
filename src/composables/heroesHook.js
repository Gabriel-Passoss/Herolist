import { ref, computed } from 'vue'
import { http } from '../services/axios.js'

const timeStamp = '1655940616667';
const publicKey = '2c70e036a6175dd5b71c49194f1b773c';
const hash = 'a3eb6ac42f1c7d1fbe62e1a4f94c8b2c';

const heroesData = ref([])
const filterFavorite = ref(false)
const listHeroesFavorites = ref([])
const searchInput = ref("")

// Variable to show favorited heroes or all heroes
const showHeroes = computed(() => filterFavorite.value ? listHeroesFavorites.value : heroesData.value)

// Function to toggle the button to show favorites or not
function toggleFilterFavorite() {
  filterFavorite.value = !filterFavorite.value
}

// variable to define whether or not there is a filter being applied
const filteredHero = computed(() => {
  if (!searchInput.value) return showHeroes.value
  return showHeroes.value.filter((hero) => hero.name.toLowerCase().trim().search(searchInput.value.toLowerCase().trim()) > -1)
})

// Connect to Marvel's API
async function fetchHeroes() {
  await http.get(`/v1/public/characters?ts=${timeStamp}&apikey=${publicKey}&hash=${hash}`)
    .then((res) => {
      console.log(res.data.data.results)
      heroesData.value = res.data.data.results
    })
}

// Function to favorite or unfavorite hero
function toggleFavoriteHero(idHero) {
  const heroIndex = listHeroesFavorites.value.findIndex((x) => x.id == idHero)
  if (heroIndex > -1) {
    listHeroesFavorites.value.splice(heroIndex, 1)
  } else {
    const heroSelected = heroesData.value.find((x) => x.id == idHero)
    listHeroesFavorites.value.push(heroSelected)
  }
}

export const useHeroes = () => {
  return {
    heroesData,
    fetchHeroes,
    toggleFavoriteHero,
    listHeroesFavorites,
    filterFavorite,
    toggleFilterFavorite,
    searchInput,
    filteredHero,
  }
}