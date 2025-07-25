<script setup>
// import axios from 'axios';

import {ref} from 'vue';


import {RouterLink} from 'vue-router'
import Pokemon from '../components/Pokemon.vue'
import {useGetData} from '@/composables/getData';
import Loading from '@/components/Loading.vue';

const pokemon_L = ref([]);

const {data, getData, loading, error}  = useGetData();

// const getData = async () => {
//     try{
//         const {data} = await axios.get('https://pokeapi.co/api/v2/pokemon');
        
//         //console.log(data.results)
//         pokemon_L.value = data.results;
//     }catch(error){
//         console.log(error);
//     }
// };

// getData();

// getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
getData(`https://pokeapi.co/api/v2/pokemon/`);
</script>
<template>
    <h1>Pokémon</h1>
    <div v-if="loading">
        <Loading/>
    </div>
    <div v-if="error" class="alert alert-danger mt-2">
        {{ error }}
    </div>
    <div v-if="data">
        <ul class="list-group">
            <Pokemon  v-for="poke in data.results" :name="poke.name"/>
        </ul>
        <div class="mt-2">
            <button :disabled="!data.previous" class="btn btn-succes me-2" @click="getData(data.previous)">Previous</button>
            <button :disabled="!data.next" class="btn btn-primary" @click="getData(data.next)">Next</button>
        </div>
        
    </div>

    
    
</template>