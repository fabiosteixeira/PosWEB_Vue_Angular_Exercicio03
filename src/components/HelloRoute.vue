<template>
  <div>
    <h1>Hello Router!!</h1>
    <p>Recuperação direta no template: {{ $route.params.id }}</p>
    <p>Recuperação via computed properties no script: {{ userId }}</p>
  </div>
</template>

<script>
export default {
  name: "HelloRoute",
  computed: {
    userId() {
      return this.$route.params.id;
    }
  }
};
</script>
