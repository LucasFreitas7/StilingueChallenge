<template>
  <div id="app">
    <div class="banner"></div>
    <todo-app></todo-app>
  </div>
</template>


<script>
import TodoApp from "./components/TodoApp.vue";
export default {
  components:{TodoApp},
  methods: {
    setTheme(){
      if(localStorage.getItem('darktheme') === 'true') document.body.classList.add('dark-theme')
    }
  },
  created(){
    this.setTheme();
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap');

body{
  margin: 0;
  padding: 0;
  font-family: 'Josefin Sans', sans-serif !important;
  background-color: hsl(0, 0%, 98%);
}

#app{
  width: 100%;
}

body.dark-theme{
  background-color: hsl(235, 21%, 11%);
}


.banner{
  height: 300px;
  display: block;
  margin: 0 auto;
  background-image: url("./assets/bg-desktop-light.jpg");
}

.dark-theme .banner{
  background-image: url("./assets/bg-desktop-dark.jpg");
}

.shadow{
  box-shadow: 1px 2px 5px -2px rgba(0,0,0,0.75);
  -webkit-box-shadow: 1px 2px 5px -2px rgba(0,0,0,0.75);
  -moz-box-shadow: 1px 2px 5px -2px rgba(0,0,0,0.75);
}


@media (min-width: 1440px) {
  .banner{
    width: 1440px; 
    border-radius: 0px 0px 8px 8px; 
  }
}

</style>
