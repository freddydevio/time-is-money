<template>
  <div id="app">
    <span class="title">Time is gold</span>
    <span class="sub-title">How much a meeting can cost you</span>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: 'Roboto', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
* {
  padding: 0;
  margin: 0;
}
div {
  box-sizing: border-box;
}
  .title {
    font-size: 2rem;
    display: block;
    text-align: center;
  }
  .sub-title {
    font-size: 1.2rem;
    display: block;
    text-align: center;
  }
</style>
