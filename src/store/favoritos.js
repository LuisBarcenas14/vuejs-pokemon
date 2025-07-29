import {defineStore} from 'pinia'
import {ref, computed} from 'vue'

export const useFavoritosStore = defineStore('favoritos ', () => {
    
    const favoritos = ref([]);

    if(localStorage.getItem('favoritos')){
        favoritos.value = JSON.parse(localStorage.getItem('favoritos'));
    }

    const add = (poke) => {
        favoritos.value.push(poke);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const remove = (id) => {
        favoritos.value = favoritos.value.filter(item => item.id !== id);
        localStorage.setItem('favoritos', JSON.stringify(favoritos.value));
    };

    const findPoke = (name) => {
        const idx = favoritos.value.map(e => e.name).indexOf(name);
        if(idx >= 0){
            return true;
        }else{
            return false;
        }
    };

    return{
        favoritos, 
        add,
        remove,
        findPoke,
    }
})

