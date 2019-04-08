<template>
  <div>
    <div>
      <input v-model="inputValue">
      <button @click="handleSubmit">提交</button>
    </div>
    <ul>
      <todo-item
        v-for="(item, index) of list"
        :key="index"
        :content="item"
        :index="index"
        @delete="handleDelete"
      ></todo-item>
    </ul>
    <button @click="go">提交</button>
    <router-link to="/login">111</router-link>
    <router-link to="/style">style</router-link>
  </div>
</template>

<script>
import TodoItem from "../../components/TodoItem";
export default {
  components: {
    "todo-item": TodoItem
  },
  data() {
    return {
      inputValue: "",
      list: []
    };
  },
  methods: {
    handleSubmit() {
      this.list.push(this.inputValue);
      this.inputValue = "";
    },
    handleDelete(index) {
      this.list.splice(index, 1);
    },
    go() {
      this.$router.push({ path: "/login" });
    }
  }
};
</script>
