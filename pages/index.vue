<script setup lang="ts">
  import {useCharacter} from "~/store/character";

  const store = useCharacter();
  await store.fetchCharacters()

</script>

<template>
  <div class="center-block">
    <CardList :characters="store.characters"/>
  </div>
</template>

<style scoped>
.center-block{
  width: 100vw;
  display: flex;
  justify-content: center;
}
</style>