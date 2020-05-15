<template>
  <div class="container">
    <h1>TELA DE USUÁRIO</h1>
    <div>Nome: {{this.user.name}}</div>
    <div>Email: {{this.user.email}}</div>
    <p>Bio: {{this.user.bio}}</p>
  </div>
</template>

<script>
export default {
  name: "User",
  data() {
    return {
      user: null
    };
  },
  computed: {
    userId() {
      return this.$route.params.userId;
    },
    users() {
      return this.$route.params.usersList;
    }
  },
  mounted() {
    let id = this.userId;
    this.users.forEach(us => {
      if (us.id === id) {
        this.user = us;
      }
    });
  }
};
</script>

<style scoped>
</style>
