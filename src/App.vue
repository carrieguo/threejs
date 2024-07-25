<template>
  <div id="app">
  
    <main>
      <!-- 主要内容区域 -->
      <Home />
    </main>
   
  </div>
</template>

<script>
import Home from './views/Home.vue';

export default {
  name: 'App',
  components: {
    Home
  }
}
</script>

<style>
/* 全局样式，通常会在这里定义应用的整体样式，如字体、颜色等 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

header {
  background-color: #3a3f44;
  padding: 20px;
  color: white;
}

main {
  padding: 20px;
}

footer {
  background-color: #3a3f44;
  padding: 10px;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
}
</style>