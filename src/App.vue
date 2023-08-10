<template>
  <div class="app">
    <CreateForm @create="addUser"/>
    <UserTable :users="users" />
  </div>
</template>

<script lang="ts">
import CreateForm from './components/CreateForm.vue'
import UserTable from './components/UserTable.vue'
import type { User } from './types'

export default {
  components: {
    CreateForm, UserTable
  },
  data() {
    return {
      users: [] as User[],
    }
  },
  methods: {
    getUsers() { },
    addUser(user: User) {
      this.users.push(user)
    },
    editUser() { },
    deleteUser() { }
  }
}
</script>

<style scoped>
.app {
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
}
</style>