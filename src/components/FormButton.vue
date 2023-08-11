<template>
  <button class="btn">
    {{ text }}
  </button>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.btn {
  cursor: pointer;
  border: none;
  box-sizing: border-box;
  padding: 1rem 1.5rem;
  border-radius: 2rem;
  background-color: #a299ea;
  font-size: 2rem;
  transition: all .3s ease-in-out;
}

.btn:hover {
  background-color: #877ae4;
  transition: all .3s ease-in-out;
}
</style>