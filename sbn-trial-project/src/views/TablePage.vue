<!-- src/views/TablePage.vue -->
<template>
  <div>
    <h1>People Table</h1>
    <table>
      <tr>
        <th>Serial Number</th>
        <th>Name</th>
        <th>Date of Birth</th>
      </tr>
      <tr v-for="person in people" :key="person.serialNumber">
        <td>{{ person.serialNumber }}</td>
        <td>{{ person.name }}</td>
        <td>{{ person.dateOfBirth }}</td>
      </tr>
    </table>
    <button @click="goToCreate">Create</button>
    <button @click="goToRead">Read</button>
    <button @click="goToUpdate">Update</button>
    <button @click="goToDelete">Delete</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const people = ref([]);

const fetchPeople = async () => {
  const response = await fetch('/api/people');
  people.value = await response.json();
};

onMounted(fetchPeople);

const goToCreate = () => router.push('/create');
const goToRead = () => router.push('/read');
const goToUpdate = () => router.push('/update');
const goToDelete = () => router.push('/delete');
</script>

<style scoped>
/* Add your styles here */
</style>
