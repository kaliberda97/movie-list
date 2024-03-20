<script setup>
import {state} from './store'
import { computed } from 'vue'
import Search from './components/Search.vue'


// a computed ref
const movies = computed(() => {
  return state.data
})
</script>

<template>
  <div class="container">
    <Search @search="state.handleSearch" />
    <div v-if="movies">
      <ul  >
        <li v-for="movie in movies" :key=movie.imdbID>
          <img :src=movie.Poster alt="Movie Poster" width="100">
          <h3 >{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
       
        </li>
      </ul>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>



<style scoped>
img{
  width: 250px;
  height: 350px;
  object-fit: cover;
  object-position: center center;
  margin-top: 20px;
  border-radius: 25px;
}
ul{
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
 flex-wrap: wrap;

}
li{
 
  width: 300px;
  height: 500px;
  margin: 10px;
  background-color:gray;
  border-radius: 50px;
}
.container{
  background-color: lightgray;
}
</style>