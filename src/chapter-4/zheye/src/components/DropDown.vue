<template>
  <div class="dropdown">
    <a class="btn btn-outline-light dropdown-toggle" href="#" @click.prevent="toggle">{{ title }}</a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'

export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const isOpen = ref(false)

    function toggle() {
      isOpen.value = !isOpen.value
    }

    return {
      isOpen,
      toggle
    }
  }
})
</script>

<style scoped>

</style>
