<template>
  <div class="container">
    <h1>LISTA DE USUÁRIOS</h1>
    <ul>
      <li v-for="user in users" v-bind:key="user.id">
        <router-link
          :to="{ name: 'user', params: { userId: user.id, usersList: users }}"
        >{{ user.name }} / {{ user.email }}</router-link>
      </li>
    </ul>
    <!-- <router-link to="/user">Lista de usuários</router-link> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Users",
  data() {
    return {
      users: []
    };
  },
  mounted() {
    axios
      .get("https://www.mocky.io/v2/5ebdbed93100008e00c5cd2d")
      .then(response => {
        this.users = response.data.results;
        // console.log(this.users);
      });
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
