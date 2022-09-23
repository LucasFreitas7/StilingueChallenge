<template>
  <div class="list-container shadow">
    <todo-list-item v-for="todo in allFiltered" :key="todo.id" :todo="todo"></todo-list-item>
    <div class="btn-container">
      <span class="left-items">{{undoneAll.length}} items left</span>
      <div class="btn-filters">
        <a v-bind:class="{active: activeClass === 'all'}" @click="handleClickOnFilter('all')">All</a>
        <a v-bind:class="{active: activeClass === 'active'}" @click="handleClickOnFilter('active')">Active</a>
        <a v-bind:class="{active: activeClass === 'completed'}" @click="handleClickOnFilter('completed')">Completed</a>
      </div>
      <div class="btn-clear">
        <a @click="clearDone">Clear completed</a> 
      </div>
    </div>
    <div class="btn-container-mobile">
      <div class="btn-clear-mobile">
        <a @click="clearDone">Clear completed</a> 
      </div>
    </div>    
  </div>
</template>

<script>
import { mapGetters, mapState } from "vuex";
import { CLEAR_DONE } from '../store/mutation-types';
import TodoListItem from './TodoListItem.vue';
export default {
  name: "TodoList",
  components: { TodoListItem },
  computed:{
    ...mapState(['all']),
    ...mapGetters(['doneAll', 'undoneAll'])
  },
  watch:{
    all(newValue){
      this.allFiltered = newValue
    },

    doneAll(newValue, oldValue){
      if(newValue.length === 0) this.activeClass = 'all'
      if(newValue.length < oldValue.length && this.activeClass === 'completed'){
        this.allFiltered = newValue
      }
    },

    undoneAll(newValue, oldValue){
      if(newValue.length === 0) this.activeClass = 'all'
      if(newValue.length < oldValue.length && this.activeClass === 'active'){
        this.allFiltered = newValue
      }
    }
  },
  data() {
    return {
      activeClass: 'all', 
      allFiltered: []
    }
  },
  created(){
    this.allFiltered = this.all;
  },
  methods:{
    handleClickOnFilter(filter){
      this.activeClass = filter;
      switch (filter) {
        case 'all':
          this.allFiltered = this.all;
          break;
        case 'completed':
          this.allFiltered = this.doneAll;
          break;
        case 'active':
          this.allFiltered = this.undoneAll;
          break;
        default:
          break;
      }
    },
    clearDone(){
      this.$store.commit(CLEAR_DONE);
    }
  }
};
</script>

<style scoped>
.list-container {
  overflow: hidden;
  border-radius: 5px;
  background-color: var(--very-light-gray);
  margin-top: 30px;
}

body.dark-theme .list-container{
  background-color: var(--very-dark-desaturated-blue); 
}


.btn-container{
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0px;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 14px;
  color: var(--dark-grayish-blue-dt);
}



.btn-filters{
  text-align: center;
}

.btn-filters a{
  text-decoration: none;
  margin-right: 5px;
  margin-left: 5px;
  transition: color .2s linear;
  font-weight: bold;
}

.btn-filters a.active{
  color: var(--bright-blue);
}

.btn-container a:hover{
  cursor: pointer;
  color: var(--very-dark-grayish-blue-lt);
}

body.dark-theme .btn-container a:hover{
  color: var(--light-grayish-blue-dt);
}

.btn-clear{
  text-align: right;
}

.btn-clear a{
  transition: color .2s linear;
}


.btn-container-mobile{
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--dark-grayish-blue-dt);
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
}

@media (min-width: 300px){

  .btn-container{
    grid-template-columns: repeat(2, 1fr);
  }

  .btn-clear{
    display: none;
  }

  .btn-container-mobile{
    display: flex;
  }
} 

@media (min-width: 1440px){

  .btn-container{
    grid-template-columns: repeat(3, 1fr);
  }

  .btn-clear{
    display: inherit;
  }

  .btn-container-mobile{
    display: none;
  }
} 

</style>