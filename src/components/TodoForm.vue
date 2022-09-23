<template>
  <div class="form-container">
    <div class="todo-check" v-bind:class="{checked: tododone}" @click="tododone = !tododone" ></div>
    <input type="text" v-model="todoname" @keyup.enter="add" class="shadow" />
  </div>
</template>

<script>
import { ADD_ALL } from '../store/mutation-types';
export default {
  name: "TodoForm",
  data() {
    return {
      todoname: "",
      tododone: false
    };
  },
  methods: {
    add() {
      if (this.todoname === "") return false;
      this.$store.commit(ADD_ALL, {
        id: Date.now(),
        name: this.todoname,
        done: this.tododone
      });
      this.todoname = '';
      this.tododone = false;
    },
  },
};
</script>

<style scoped>
.form-container{
  position: relative;
}

input {
  width: calc(100% - 60px);
  height: 45px;
  border-radius: 5px;
  outline: none;
  border: 0px;
  padding-right: 10px;
  padding-left: 60px;
  font-size: 18px;
  font-family: 'Josefin Sans', sans-serif !important;
  background-color: var(--very-light-gray);
  color: var(--very-dark-blue);
  caret-color:hsl(220, 98%, 61%);
}

body.dark-theme input{
  background-color: var(--very-dark-desaturated-blue);
  color: hsl(234, 39%, 85%);
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

@media (min-width: 300px){
  .form-container{
    padding: 0px;
  }
};

@media (min-width: 1440px){
  .form-container{
    padding: 0px;
  }
};

</style>