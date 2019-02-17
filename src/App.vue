<template>
  <div id="app">
    <span class="headline">Time is gold</span>
    <span class="sub-headline">How much a meeting can cost you</span>
    <router-view/>
  </div>
</template>

<style lang="less">
  #app {
    font-family: 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 1rem;
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .headline {
    font-family: 'Shadows Into Light', cursive;
    font-size: 3rem;
  }

  .sub-headline {
    font-size: 1.1rem;
    margin: 0 0 4rem 0;
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
    margin-bottom: .5rem;
  }

  .sub-title {
    font-size: 1.2rem;
    display: block;
    text-align: center;
    margin-bottom: 4rem;
  }

  .back-button {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    position: fixed;
    top: 1rem;
    left: 1rem;
  }

  input[type=submit] {
    outline: none;
    border: none;
    padding: .5rem 1rem;
    background: none;
    color: black;
    text-decoration: none;
    font-size: 1rem;
    margin: 3rem auto;
    width: 100%;
  }

  .form {
    .input-group {
      display: flex;
      flex-direction: column;
    }
    .title {
      font-size: 2rem;
      font-weight: bold;
    }

    .sub-title {
      font-size: 1.25rem;
      margin-bottom: 2rem;
    }

    .input-text {
      padding: .5rem 1rem;
      outline: none;
      border: none;
      border-bottom: 2px solid black;
      margin-bottom: .5rem;
      height: 2rem;
    }

    .help-text {
      font-size: .7rem;
      display: block;
    }
  }
</style>
