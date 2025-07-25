<script setup>
import Pokemon from '../components/Pokemon.vue'
import axios from 'axios';
import {ref, onMounted} from 'vue';
import {useRoute, useRouter} from 'vue-router';
import Loading from '@/components/Loading.vue';
import {useGetData} from '@/composables/getData';

const route = useRoute();
const router = useRouter();

const back = () => {
    router.push('/pokemon');
}

const pokemon = ref({});

const {data, getData, loading, error}  = useGetData();

// const getData = async() => {
    
//     try{
//         const {data} = await axios.get(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);
//         //console.log(data);
//         pokemon.value = data;
//         //console.log(pokemon.value);
//     }catch(error){
//         console.log(error);
//         pokemon.value(null);
//     }
// }

getData(`https://pokeapi.co/api/v2/pokemon/${route.params.name}`);



</script>
<template>
    <div v-if="loading">
        <Loading/>
    </div>
    <div v-if="error" class="alert alert-danger mt-2">
        {{ error }}
    </div>
    <div v-if="data">
        <h1>Poke name: {{ $route.params.name }}</h1>
        <img  v-if="data.sprites" :src="`${data.sprites?.front_default}`">
        
    </div>
    <div v-else>
        <h1>No se encontró el pokémon</h1>
    </div>
    <button class="btn btn-outline-primary" @click="back">Volver</button>
    
</template>