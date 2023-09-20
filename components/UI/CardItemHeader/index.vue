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
  @apply text-2xl my-2 border-b-2 border-zinc-200 pb-2;
}
</style>