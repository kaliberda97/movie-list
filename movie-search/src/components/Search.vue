
<script setup>
import { state } from '../store.js'
import MovieCard from './MovieCard.vue';

</script>
<template>
  <div>
    <h1>Search Movies</h1>
    <form @submit.prevent>
      <input v-model="state.searchTerm" type="text" placeholder="Enter movie title..." autofocus>
    </form>
    <MovieCard />
  </div>
</template>

<style scoped>
input {
  width: 15rem;
  height: 25px;
  border-radius: 6px;
  border: none;
  margin-bottom: 10px;
  background-color: lightgray;
}

::placeholder {
  color: gray;
  opacity: 1; 
}

::-ms-input-placeholder { 
  color: black;
}

button {
  color: white;
  background-color: black;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
}
</style>
