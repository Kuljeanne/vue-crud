<template>
  <form @submit.prevent sub class="form">
    <h1 class="title">Добавить пользователя в базу данных</h1>
    <div class="inputs">
      <input v-bind:value="user.userName" @input="user.userName = ($event.target as HTMLInputElement).value" class="input"
        type="text" placeholder="Имя">
      <input v-bind:value="user.userSurname" @input="user.userSurname = ($event.target as HTMLInputElement).value" class="input"
        type="text" placeholder="Фамилия">
      <button class="btn">Добавить</button>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  data() {
    return {
      user: {
        userName: '',
        userSurname: ''
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
}

.input {
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  font-size: 2rem;
  padding: 0.5rem;
}

.input:focus {
  outline: none;
}

.btn {
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  background-color: #a299ea;
  ;
  font-size: 2rem;
  transition: all .3s ease-in-out;
}

.btn:hover {
  background-color: #877ae4;
  transition: all .3s ease-in-out;
}</style>