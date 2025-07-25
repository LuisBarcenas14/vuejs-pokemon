<script setup>
//defineProps(['name']);
defineProps({
    name: String
});


</script>
<template>
    <li class="list-group-item">
        <router-link :to="`pokemon/${name}`">{{ name }}</router-link> 
    </li>
    
    <!-- <h5>{{ name }}</h5> -->
</template>