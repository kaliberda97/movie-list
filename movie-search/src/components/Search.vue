<script setup>
import { getCurrentInstance, ref } from "vue";
import { state } from "../store";

const instance = getCurrentInstance();

const search = () => {
  instance.emit("search", state.searchTerm);
  state.searchTerm = "";
};
</script>

<template>
  <div>
    <h1>Search Movies</h1>
    <form @submit.prevent="search">
      <input
        type="text"
        v-model="state.searchTerm"
        placeholder="Enter movie tittle"
      />
      <button type="submit">Search</button>
    </form>
  </div>
</template>

<style scoped>
input {
  width: 80vw;
  height: 25px;
  border-radius: 6px;
  border: none;
  margin-bottom: 10px;
}

button {
  color: white;
  background-color: black;
  padding: 4px;
  border-radius: 6px;
  cursor: pointer;
}
</style>