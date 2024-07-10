<!-- src/views/CreatePage.vue -->
<template>
  <div>
    <h1>Create Person</h1>
    <input v-model="name" placeholder="Name" />
    <input v-model="dateOfBirth" type="date" placeholder="Date of Birth" />
    <button @click="createPerson">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const name = ref('');
const dateOfBirth = ref('');
const router = useRouter();

const createPerson = async () => {
  await fetch('/api/people', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ name: name.value, dateOfBirth: dateOfBirth.value }),
  });
  router.push('/table');
};
</script>

<style scoped>
/* Add your styles here */
</style>
