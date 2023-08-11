<template>
  <div class="modal" v-if="isShown" @click="closeModal">
    <div @click.stop class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">

export default {
  props: {
    isShown: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    closeModal(){
      this.$emit('update:isShown', false)
    }
  }
}

</script>

<style scoped>
  .modal {
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .content {
    padding: 2.2rem;
    background-color: #aba2eb;
    border-radius: 10px;
    max-width: 400px;
    display: flex;
    flex-wrap: wrap;
    gap: 2.6rem;
    justify-content: center;
  }
</style>