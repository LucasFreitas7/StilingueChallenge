<template>
  <div class="container">
    <todo-bar/>
    <todo-form/>
    <todo-list/>
    <div class="footer">
      <span><a>Stillingue:</a> Lucas Andrade Freitas</span>
    </div>
  </div>
</template>

<script>
import TodoBar from "./TodoBar.vue";
import TodoForm from './TodoForm.vue';
import TodoList from "./TodoList.vue";
export default {
  name: 'TodoApp',
  components: {TodoBar, TodoForm, TodoList}
}
</script>

<style >
.container{
  max-height: 700px;
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translateX(-50%);
  
}

.footer{
  padding: 20px;
  text-align:center;
  color: var(--very-dark-grayish-blue-lt);
}

.footer a {
  color: var(--bright-blue);
  text-decoration: none;
}

@media (min-width: 300px){
  .container{
    width: 300px;
    padding: 0px;
  }
}

@media (min-width: 1440px) {
  .container{
    width: 600px;
    padding: 0px 20px;
  }
}
</style>
