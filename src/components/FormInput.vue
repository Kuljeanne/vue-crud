<template>
  <input :value="modelValue" @input="updateInput" class="input" type="text">
</template>

<script lang="ts">
  export default {
    props: {
      modelValue: String
    },
    methods: {
      updateInput(event: Event) {
        this.$emit('update:modelValue', (event.target as HTMLInputElement).value)
      }
    }
  }
</script>

<style scoped>
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
</style>