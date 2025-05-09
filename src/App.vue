<template>
  <div id="app">
    <h1>Gestión de Stock</h1>
    <Login />
    <StockList />
  </div>
</template>

<script>
import Login from "./components/Login.vue";  // Importar Login.vue
import StockList from "./components/StockList.vue";  // Importar StockList.vue

export default {
  components: {
    Login,
    StockList
  }
};
</script>