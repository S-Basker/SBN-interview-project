<!-- src/views/PasswordPage.vue -->
<template>
  <div>
    <h1>Enter Password</h1>
    <input v-model="password" type="password" placeholder="Password" />
    <button @click="checkPassword">Submit</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const password = ref('');
const router = useRouter();

const checkPassword = () => {
  if (password.value === 'correct-password') {
    router.push('/table');
  } else {
    alert('Incorrect password');
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
