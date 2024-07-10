<!-- src/views/DeletePage.vue -->
<template>
  <div>
    <h1>Delete Person</h1>
    <input v-model="serialNumber" placeholder="Serial Number" />
    <button @click="deletePerson">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const serialNumber = ref('');
const router = useRouter();

const deletePerson = async () => {
  await fetch(`/api/people/${serialNumber.value}`, {
    method: 'DELETE',
  });
  router.push('/table');
};
</script>

<style scoped>
/* Add your styles here */
</style>
