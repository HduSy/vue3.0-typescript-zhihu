<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1>{{ error }}</h1>
    <!--Suspense轻松做到异步组件-->
    <Suspense>
      <template #default>
        <div>
          <async-show/>
          <dog-show/>
        </div>
      </template>
      <template #fallback>
        <h1>loading...!</h1>
      </template>
    </Suspense>
  </div>
</template>
<script lang="ts">
import {defineComponent, onErrorCaptured, ref} from 'vue'
import AsyncShow from '../components/AsyncShow.vue'
import DogShow from "@/components/DogShow.vue";

export default defineComponent({
  name: 'About',
  components: {
    AsyncShow,
    DogShow
  },
  setup() {
    const error = ref(null)
    onErrorCaptured((e: any) => {
      error.value = e
    })
    return {
      error
    }
  }
})
</script>