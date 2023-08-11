<template>
  <form @submit.prevent sub class="form">
    <h1 class="title">{{ title }}</h1>
    <div class="inputs">
      <FormInput v-model="user.name" type="text" placeholder="Имя"/>
      <FormInput v-model="user.surname" type="text" placeholder="Фамилия"/>
      <FormButton text="Добавить в БД" @click=" addUser " />
    </div>
  </form>
</template>

<script lang="ts">
import type { User } from '@/types'
import FormButton from './FormButton.vue'
import FormInput from './FormInput.vue'
export default {
  components: {
    FormButton, FormInput
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isEditing: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      user: {
        id: 0,
        name: '',
        surname: ''
      } as User
    }
  },
  methods: {
    addUser() {
      this.$emit('create', this.user)
      this.user = {
        id: 0,
        name: '',
        surname: ''
      }
    }
  }

}
</script>

<style scoped>
.title {
  font-size: 3rem;
  text-align: center;
  margin-bottom: 2rem;
}

.inputs {
  display: flex;
  gap: 1.5rem;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;

}
</style>