<template>
  <div>count:{{ count }}</div>
  <div>double count:{{ doubleCount }}</div>
  <div>
    <ul>
      <li v-for="num in nums" :key="num">{{ num }}</li>
    </ul>
  </div>
  <div>
    {{ person.name }}
  </div>
  <div>
    <h1>x:{{ x }}</h1>
    <h1>y:{{ y }}</h1>
  </div>
  <div>
    <h1 v-if="loading">
      Loading!...
    </h1>
    <!--<img :src="result.message" v-if="loaded">-->
    <img :src="result[0].url" v-if="loaded">
  </div>
  <button @click="increase">increase 1</button>
  <button @click="updateTitle">updateTitle</button>
</template>

<script lang="ts">
import {ref, toRefs} from 'vue'
import {computed, reactive, watch} from 'vue'
import {onMounted, onUpdated, onRenderTracked, onUnmounted} from 'vue'
import useMousePosition from '@/hooks/useMousePosition'
import useUrlLoader from "@/hooks/useUrlLoader"

interface DataProps {
  count: number;
  doubleCount: number;
  increase: () => void;
  updateTitle: () => void;
  nums: number[];
  person: { name?: string };
}

interface DogResult {
  message: string;
  status: string;
}

interface CatResult {
  id: string;
  url: string;
  width: number;
  height: number;
}

export default {
  name: "MyCount",
  setup() {
    //ref使javascript primitive type其成为响应式对象
    // const count = ref(0)
    // const doubleCount = computed(() => count.value * 2)
    // const increase = () => {
    //   count.value++
    // }
    const greeting = ref('')

    function updateTitle() {
      greeting.value += '$'
    }

    // const {result, loading, loaded, error} = useUrlLoader<DogResult>('https://dog.ceo/api/breeds/image/random')
    const {result, loading, loaded, error} = useUrlLoader<CatResult[]>('https://api.thecatapi.com/v1/images/search?limit=1')
    const {x, y} = useMousePosition()
    const data: DataProps = reactive({
      count: 0,
      increase: () => data.count++,
      doubleCount: computed(() => data.count * 2),
      nums: [0, 1, 2, 3],
      person: {},
      updateTitle: updateTitle
    })
    watch([greeting, () => data.count, result], (newValue, oldValue) => {
      console.log(oldValue)
      console.log(newValue)
      document.title = data.count + greeting.value
      if (result.value) {
        // console.log(`value:${result.value.status}`)
        // console.log(`url:${result.value.message}`)
        console.log(`id:${result.value[0].id}`)
        console.log(`url:${result.value[0].url}`)
        console.log(`width:${result.value[0].width}`)
        console.log(`height:${result.value[0].height}`)
      }
    })
    onUpdated(() => {
      console.log('updated')
    })
    onRenderTracked((e) => {
      // console.log(e)
    })
    //vue3.0使用ES6proxy技术解决了vue2.0响应式Object.defineProperty实现方式的不足
    data.nums[0] = -1
    data.person.name = 'HduSy'
    //data对象本身是响应式的，其值非响应式
    const refData = toRefs(data)
    return {
      ...refData,
      x, y,
      result,
      loading,
      loaded,
      error,
    }
  }
}
</script>

<style scoped>

</style>