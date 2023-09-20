<script setup lang="ts">

</script>

<template>
  <div class="title">
   <slot/>
  </div>
</template>

<style scoped>
.title{
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
}
</style>