<script setup>
import {useFavoritosStore} from '@/store/favoritos.js';
import { storeToRefs } from 'pinia';

const useFavoritos = useFavoritosStore();

const {favoritos} =storeToRefs(useFavoritos);
const {remove} = useFavoritos;


</script>
<template>
    <h1>Favoritos</h1>
    <p v-if="favoritos.length === 0">No hay favoritos</p>
    <ul v-else class="list-group">
        <li class="list-group-item"
          v-for="poke in favoritos"
          :key="poke.id"          
        >
            <div>
                {{ poke.name }}        
            </div>    
            <div>
                <router-link class="btn btn-sm btn-primary me-2" :to="`pokemon/${poke.name}`">
                    Mayor información
                </router-link>   
                <button class="btn btn-sm btn-danger" @click="remove(poke.id)">Eliminar</button>
            </div>
        
        </li>
    </ul>
</template>