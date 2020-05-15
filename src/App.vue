<template>
  <div id="app">
    <HelloWorld msg="Exercício 3 de Vue"/>
    <img width="25%" src="./assets/fabio.png">
    <!-- <br>
    <router-link to="/my-route">Go to my route</router-link>
    <br>-->
    <br>
    <router-link to="/users">Lista de usuários</router-link>
    <router-view/>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
