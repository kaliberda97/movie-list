<template>
    <div>
      <h1>demo</h1>
    <form @submit.prevent="search" >
      <input type="text" v-model="state.searchTerm" placeholder="Enter movie title" >
      <button type="submit" >Search</button>
    </form>
    </div>
  
  </template>
  
  <script setup>
  import {state} from "../store"
  import { getCurrentInstance } from 'vue'
  
 
  
  const instance = getCurrentInstance()
  const search = () => {
    // Emit the search term to the parent component
    instance.emit('search', state.searchTerm)
    state.searchTerm = ''
  }
  </script>
  
  <style scoped>
  input{
    width: 80vw;
    height: 25px;
    border-radius: 10px;
    border: none;
    outline: none;
    padding-left: 10px;
    font-size: 15px;
    margin-bottom: 10px;
    
  }
  button {
    margin: 3px;
    padding: 4px;
    border-radius: 5px;
    border: none;
    outline: none;
    font-size: 15px;
    cursor: pointer;
    color: white;
    background-color: #000000;
   
  }
  h1{
    text-align: center;
    font-size: 30px;
    font-weight: 600;
    color: #000000;
  }
  </style>