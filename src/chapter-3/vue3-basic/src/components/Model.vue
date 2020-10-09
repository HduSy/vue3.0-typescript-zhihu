<template>
  <!--挂载到另外一个dom节点上-->
  <teleport to="#model">
    <div id="center" v-if="isOpen">
      <h1>
        <slot>this is a model</slot>
      </h1>
      <button @click="buttonClick">关闭Model</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "Model",
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-model': null
  },
  setup(props, context) {
    const buttonClick = () => {
      context.emit('close-model')
    }
    return {
      buttonClick
    }
  }
})
</script>

<style scoped>
#center {
  width: 400px;
  height: 200px;
  border: 2px solid black;
  background: white;
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -200px;
  margin-top: -100px;
}
</style>