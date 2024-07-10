// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import PasswordPage from '../views/PasswordPage.vue';
import TablePage from '../views/TablePage.vue';
import CreatePage from '../views/CreatePage.vue';
import ReadPage from '../views/ReadPage.vue';
import UpdatePage from '../views/UpdatePage.vue';
import DeletePage from '../views/DeletePage.vue';

const routes = [
  { path: '/', component: PasswordPage },
  { path: '/table', component: TablePage },
  { path: '/create', component: CreatePage },
  { path: '/read', component: ReadPage },
  { path: '/update', component: UpdatePage },
  { path: '/delete', component: DeletePage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
