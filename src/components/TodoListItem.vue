<template>
  <div class="list-item">
    <div class="todo-check" v-bind:class="{checked: todo.done}" @click="handleClick(todo)" ></div>
    <span v-bind:class="{checked: todo.done}">{{todo.name}}</span>
    <div class="todo-delete" @click="handleClickOnDelete(todo)"></div>
  </div>
</template>

<script>
import { DELETE_TODO, TOGGLE_CHECK } from "../store/mutation-types";
export default {
  name: 'TodoListItem',
  props: ['todo'],
  methods:{
    handleClick(t){
      this.$store.commit(TOGGLE_CHECK, {id: t.id, done: !t.done});
    },
    handleClickOnDelete(t){
      this.$store.commit(DELETE_TODO, t);
    }
  }
}
</script>

<style scoped>
.list-item {
  padding: 20px;
  color: var(--very-dark-grayish-blue-lt);
  border-bottom: 1px solid var(--light-grayish-blue-lt);
  position: relative;
}

body.dark-theme .list-item{
  color: var(--light-grayish-blue-dt);
  border-bottom: 1px solid var(--dark-grayish-blue-dt);
}

.list-item span {
  margin-left: 40px;
}

.list-item span.checked {
  text-decoration: line-through;
  color: var(--light-grayish-blue-lt);
}

body.dark-theme .list-item span.checked{
  color: var(--dark-grayish-blue-dt);
}

.todo-check {
  width: 22px;
  height: 22px;
  border: 1px solid var(--dark-grayish-blue-dt);
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.todo-check::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/icon-check.svg");
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
}

.todo-check.checked {
  border: 0px;
  background: var(--check-bg);
}

.todo-check.checked::before {
  opacity: 1;
}

.todo-delete{
  width: 22px;
  height: 22px;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-delete::before {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url("../assets/icon-cross.svg");
  background-position: center center;
  background-repeat: no-repeat;
  opacity: 0;
  transition: opacity .2s linear;
}

.list-item:hover .todo-delete::before{
  opacity: 1;
}
</style>