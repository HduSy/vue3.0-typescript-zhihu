/**
 * vue3.0最重要的新特性重用方式
 */
import {onMounted, onUnmounted, ref, toRefs, reactive} from "vue";
//非data形式ref
function useMousePosition() {
    const x = ref(0)
    const y = ref(0)
    const updateMouse = (e: MouseEvent) => {
        x.value = e.pageX
        y.value = e.pageY
    }
    onMounted(() => {
        console.log('mounted')
        document.addEventListener('click', updateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener('click', updateMouse)
    })
    return {x, y}
}
//data形式reactive
function useMousePositionData() {
    const data = reactive({
        x: 0,
        y: 0,
        updateMouse: (e: MouseEvent) => {
            data.x = e.pageX
            data.y = e.pageY
        }
    })
    onMounted(() => {
        console.log('mounted')
        document.addEventListener('click', data.updateMouse)
    })
    onUnmounted(() => {
        document.removeEventListener('click', data.updateMouse)
    })
    const refData = toRefs(data)
    return {
        ...refData
    }

}

export default useMousePositionData