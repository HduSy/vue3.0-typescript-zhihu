<template>
  <div class="dropdown" ref="dropDownRef">
    <a class="btn btn-outline-light dropdown-toggle" href="#" @click.prevent="toggle">{{ title }}</a>
    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" :style="{display:'block'}" v-if="isOpen">
      <slot></slot>
    </div>
  </div>

</template>

<script lang="ts">
import {defineComponent, ref, watch} from 'vue'
import useClickOutside from "@/hooks/useClickOutside";

export default defineComponent({
  name: "DropDown",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  setup() {
    const isOpen = ref(false)
    const dropDownRef = ref<null | HTMLElement>(null)  // 获取DOM节点,必须与DOM节点ref属性一致并且该属性须返回

    function toggle() {
      isOpen.value = !isOpen.value
    }

    const isClickOutside = useClickOutside(dropDownRef)
    watch(isClickOutside, () => {
      if (isOpen.value && isClickOutside.value) {
        isOpen.value = false
      }
    })
    return {
      isOpen,
      toggle,
      dropDownRef // 须返回
    }
  }
})
</script>

<style scoped>

</style>
