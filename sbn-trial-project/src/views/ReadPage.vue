<!-- src/views/ReadPage.vue -->
<template>
  <div>
    <h1>Read People</h1>
    <input v-model="condition" placeholder="Enter condition" />
    <button @click="readPeople">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const condition = ref('');
const router = useRouter();

const readPeople = async () => {
  // Implement logic to fetch and filter people based on condition
  router.push('/table'); // Adjust this to filter and display people
};
</script>

<style scoped>
/* Add your styles here */
</style>
