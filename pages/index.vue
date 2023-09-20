<script setup lang="ts">
  import {useCharacter} from "~/store/character";

  const store = useCharacter();
  await store.fetchCharacters()
  const array = computed(() => {
      (async () => {
        await store.getFilterArray(store.searchValue, store.selectValue)
      })()
      return store.characters
    })
</script>

<template>
  <div class="center-block">
    <div>
      <CardFilter/>
      <CardList :characters="array"/>
    </div>
  </div>
</template>

<style scoped>
.center-block{
  @apply w-full;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>