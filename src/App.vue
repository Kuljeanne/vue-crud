<template>
  <div class="app">
    <CreateForm @create="addUser" />
    <UserTable :users="users" @edit="editUser" @remove="deleteUser" />
  </div>
</template>

<script lang="ts">
import CreateForm from './components/CreateForm.vue'
import UserTable from './components/UserTable.vue'
import type { User } from './types'
import axios from 'axios'

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
    async getUsers() {
      try {
        const res = await axios.get('http://localhost:3000/api/user/all')
        this.users = res.data
      } catch (e) {
        console.log(e)
      }
    },
    async addUser(user: User) {
      try {
        const res = await axios.post('http://localhost:3000/api/user', {
          name: user.name,
          surname: user.surname
        })
        this.users.push(res.data)
      } catch (e) {
        console.log(e)
      }
    },
    editUser() { },
    async deleteUser(user: User) {
      try {
        await axios.delete(`http://localhost:3000/api/user/${user.id}`, { data: { id: user.id } })
        this.users = this.users.filter(({ id }) => id !== user.id)
      } catch (e) {
        console.log(e)
      }
    },

  },
  mounted() {
    this.getUsers()
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