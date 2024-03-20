import { reactive } from "vue";
import { ref, watchEffect } from 'vue'
const key= import.meta.env.VITE_KEY

const API_URL = `https://www.omdbapi.com/?apikey=${key}`
const defaultSearchTerm = 'Harry Potter'

const searchTerm = ref(defaultSearchTerm)
const movies = ref(null)



const handleSearch = (term) => {
  
  state.searchTerm = term

}

export  const state = reactive({
    count: 0,
    increment:() =>(state.count++),
    data: [],
    searchTerm:'Harry Potter',
    handleSearch: handleSearch
  });

  watchEffect(async () => {
    const url = `${API_URL}&s=${state.searchTerm}`
    const response = await fetch(url)
    const data = await response.json()
    state.data = data.Search
 
  })