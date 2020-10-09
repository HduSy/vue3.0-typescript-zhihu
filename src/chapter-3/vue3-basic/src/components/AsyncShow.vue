<template>
  <div>{{ result }}</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AsyncShow",
  setup(props, context) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          result: Math.floor(Math.random() * 10 + 1)
        })
      }, 3000)
    })
  }
})
</script>

<style scoped>

</style>