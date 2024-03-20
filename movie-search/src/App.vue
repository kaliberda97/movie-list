<script setup>
import Search from "./components/Search.vue";
import { state } from "./store";
import { computed } from "vue";

const movies = computed(() => {
  return state.data;
});
</script>

<template>
  <div>
    <Search @search="state.handleSearch" />
    <div v-if="movies">
      <ul>
        <li v-for="movie in movies" :key="movie.imdbID">
          <img :src="movie.Poster" alt="Movie Poster" width="100" />
          <h3>{{ movie.Title }}</h3>
          <p>{{ movie.Year }}</p>
        </li>
      </ul>
    </div>
    <p v-else>Loading...</p>
  </div>
</template>

<style scoped>
ul {
  list-style-type: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

li {
  width: 300px;
  height: 500px;
  margin: 10px;
  background-color: gray;
  border-radius: 50px;
}

img {
  width: 250px;
  height: 350px;
  margin: 10px;
  border-radius: 25px;
}
</style>