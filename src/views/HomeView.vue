<script setup>
import {useCounterStore} from '@/store/counter.js'
import {storeToRefs} from 'pinia'

const useCounter = useCounterStore()

const {increment} = useCounter

const { doubleCount, count} = storeToRefs(useCounter)
</script>

<template>
  <h1>Counter from pinia: {{ count }}</h1>
  <h2>Double: {{ doubleCount }}</h2>
  <button class="btn btn-outline-primary" @click="increment">Increment</button>

</template>
