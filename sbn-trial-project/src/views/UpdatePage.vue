<!-- src/views/UpdatePage.vue -->
<template>
  <div>
    <h1>Update Person</h1>
    <input v-model="serialNumber" placeholder="Serial Number" />
    <input v-model="name" placeholder="New Name" />
    <input v-model="dateOfBirth" type="date" placeholder="New Date of Birth" />
    <button @click="updatePerson">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const serialNumber = ref('');
const name = ref('');
const dateOfBirth = ref('');
const router = useRouter();

const updatePerson = async () => {
  await fetch(`/api/people/${serialNumber.value}`, {
    method: 'PUT',
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
