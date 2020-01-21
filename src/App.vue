<template>
  <div id="app">
    <div id="nav">
      <navbar />
    </div>
    <Home />
    <router-view />
  </div>
</template>

<script>
import navbar from "@/components/layout/navbar.vue";
import Home from "@/components/Home.vue";
export default {
  components: {
    navbar,
    Home
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
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #6b5d6a;
}
</style>
