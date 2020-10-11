<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <a class="navbar-brand" href="#">者也专栏</a>
    <ul class="list-inline mb-0" v-if="!user.isLogin">
      <li class="list-inline-item">
        <a class="btn btn-outline-light" href="#">登录</a>
      </li>
      <li class="list-inline-item">
        <a class="btn btn-outline-light" href="#">注册</a>
      </li>
    </ul>
    <ul class="list-inline mb-0" v-else>
      <li class="list-inline-item">
        <drop-down :title="`你好,${user.name}`">
          <dropdown-item><a href="#" class="dropdown-item">新建文章</a></dropdown-item>
          <dropdown-item disabled><a href="#" class="dropdown-item">编辑资料</a></dropdown-item>
          <dropdown-item><a href="#" class="dropdown-item">退出登录</a></dropdown-item>
        </drop-down>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts">
import {defineComponent, PropType} from 'vue'
import DropDown from "@/components/DropDown.vue";
import DropdownItem from "@/components/DropDownItem.vue";

export interface UserProps {
  id: string;
  name: string;
  isLogin: boolean;
}

export default defineComponent({
  name: "GlobalHeader",
  components: {
    DropDown,
    DropdownItem
  },
  props: {
    user: {
      type: Object as PropType<UserProps>,
      required: true
    }
  }
})
</script>

<style scoped>

</style>
