<template>
  <div class="top-bar">
    <h1>TODO</h1>
    <img @click="toggleTheme" :src="iconUrl" alt="button-light-theme">
  </div>
</template>

<script>
export default {
  name: 'TodoBar',
  data(){
    return {
      moon: require('../assets/icon-moon.svg'),
      sun:  require('../assets/icon-sun.svg'),
      iconUrl: localStorage.getItem('darktheme') === 'true' ?   require('../assets/icon-sun.svg') : require('../assets/icon-moon.svg')
    }
  },
  methods:{
    toggleTheme(){
      if(localStorage.getItem('darktheme') === 'true'){
        localStorage.setItem('darktheme', false);
        document.body.classList.remove('dark-theme');
        this.iconUrl = this.moon;
      }else{
        localStorage.setItem('darktheme', true);
        document.body.classList.add('dark-theme');
        this.iconUrl = this.sun;
      }
    }
  },
}
</script>

<style scoped>
.top-bar{
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: whitesmoke
}

.top-bar h1{
  letter-spacing: 10px;
}

.top-bar img{
  cursor: pointer;
}

@media (min-width: 300px){
  .top-bar{
    padding: 0px 10px;
  }
};

@media (min-width: 1440px){
  .top-bar{
    padding: 0px;
  }
};
</style>