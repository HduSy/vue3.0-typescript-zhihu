<template>
  <div class="container">
    <global-header :user="currentUser"/>
    <form>
      <div class="form-group">
        <label for="exampleInputEmail1">Email address</label>
        <input v-model="emailData.val" @blur="validateEmail" type="email" class="form-control" id="exampleInputEmail1"
               aria-describedby="emailHelp">
        <small id="emailHelp" class="form-text text-muted">{{ emailData.message }}</small>
      </div>
      <div class="form-group">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1">
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="exampleCheck1">
        <label class="form-check-label" for="exampleCheck1">Check me out</label>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    <column-list :list="list"/>
  </div>
</template>
<script lang="ts">
import {defineComponent, reactive} from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import ColumnList, {ColumnProps} from "@/components/ColumnList.vue";
import GlobalHeader, {UserProps} from "@/components/GlobalHeader.vue";

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是test1的专栏，有一段非常有意思的简洁，可以更新一下',
    avatar: 'https://www.easyicon.net/api/resizeApi.php?id=1240719&size=72'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是test2的专栏，有一段非常有意思的简洁，可以更新一下',
    avatar: 'https://www.easyicon.net/api/resizeApi.php?id=1240394&size=72'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是test3的专栏，有一段非常有意思的简洁，可以更新一下'
    // avatar: 'https://www.easyicon.net/api/resizeApi.php?id=1240397&size=72'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是test4的专栏，有一段非常有意思的简洁，可以更新一下',
    avatar: 'https://www.easyicon.net/api/resizeApi.php?id=1172135&size=72'
  }
]
const currentUser: UserProps = {
  id: '182590529',
  isLogin: true,
  name: '宋垚'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    // eslint-disable-next-line vue/no-unused-components
    GlobalHeader
  },
  setup() {
    const emailReg = /^([a-z0-9_\.-]+)@([\da-z\.]+)\.([a-z\.]{2,6})$/g
    const emailData = reactive({
      val: '',
      error: false,
      message: ''
    })
    const validateEmail = () => {
      if (emailData.val.trim() === '') {
        emailData.error = true
        emailData.message = 'email required'
      } else if (!emailReg.test(emailData.val)) {
        emailData.error = true
        emailData.message = 'email is not right'
      } else {
        emailData.error = false
        emailData.message = ''
      }
    }
    return {
      list: testData,
      currentUser,
      emailData,
      validateEmail
    }
  }
})
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
