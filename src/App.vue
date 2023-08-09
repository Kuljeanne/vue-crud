<template>
  <div class="app">
    <CreateForm/>
    <UserTable :users="users"/>
  </div>
</template>

<script lang="ts">
import CreateForm from './components/CreateForm.vue'
import UserTable from './components/UserTable.vue'

export default {
  components: {
    CreateForm, UserTable
  },
  data() {
    return {
      users: [
        { id: 1, name: 'Bill', surname: 'Doe' },
        { id: 2, name: 'Kate', surname: 'Doe' },
        { id: 3, name: 'John', surname: 'Doe' },
      ],
      userName: '',
      userSurname: ''
    }
  },
  methods: {
    getUsers() { },
    addUser() {
      const newUser = {
        id: Date.now(),
        name: this.userName,
        surname: this.userSurname,
      }
      this.users.push(newUser)
      this.userName = ''
      this.userSurname = ''
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