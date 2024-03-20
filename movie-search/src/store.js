import { reactive, watchEffect } from "vue";

const key = import.meta.env.VITE_KEY;
//const api = `http://www.omdbapi.com/
//завтра устранить ошибку 

const handleSearch = (name) => {
  state.searchTerm = name;
};

export const state = reactive({
  data: [],
  handleSearch: handleSearch,
  searchTerm: "Harry Potter",
});

watchEffect(async () => {
  const response = await fetch(`${api}&s=${state.searchTerm}`);
  const data = await response.json();
  state.data = data.Search;
  console.log(state.data);
});