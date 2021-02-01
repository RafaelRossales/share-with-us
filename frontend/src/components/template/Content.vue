<template>
  <div class="content">
    <!-- Renderiza o componente sempre que o mesmo for selecionado -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    // Propriedades e dados dos componentes
    name:'Content'
}
</script>

<style>
.content{
    grid-area: content;
    background-color: #efefef;
    padding: 20px;
}
</style>