<template>
  <div class="app">
    <EditModal v-model:is-shown="modalShown">
      <h2>Редактировать данные пользователя</h2>
      <FormInput v-model="editingUser.name" />
      <FormInput v-model="editingUser.surname" />
      <FormButton text="Сохранить изменения" @click="editUser" />
    </EditModal>
    <CreateForm @create="addUser" title="Добавить пользователя в базу данных " />
    <UserTable :users="users" @edit="openEdit" @remove="deleteUser" />
  </div>
</template>

<script lang="ts">
import CreateForm from './components/CreateForm.vue'
import UserTable from './components/UserTable.vue'
import EditModal from './components/EditModal.vue'
import FormButton from './components/FormButton.vue'
import FormInput from './components/FormInput.vue'
import type { User } from './types'
import axios from 'axios'

export default {
  components: {
    CreateForm, UserTable, EditModal, FormButton, FormInput
  },
  data() {
    return {
      users: [] as User[],
      modalShown: false,
      editingUser: {} as User
    }
  },
  methods: {
    async getUsers() {
      try {
        const res = await axios.get('http://localhost:3000/api/user/all')
        this.users = res.data.sort((a: User, b: User) => a.id - b.id)
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
    openEdit(user: User) {
      this.modalShown = true
      this.editingUser = { ...user }
    },
    async editUser() {
      try {
        const { id, name, surname } = this.editingUser
        await axios.put(`http://localhost:3000/api/user`, {
          id: id,
          name: name,
          surname: surname
        })
        const edited = this.users.find((edited) => edited.id === id)
        if (edited) {
          edited.name = name;
          edited.surname = surname
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.modalShown = false
      }
    },
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

h2 {
  font-size: 2.4rem;
  text-align: center;
}
</style>