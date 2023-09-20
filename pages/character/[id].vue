<script setup lang="ts">
import {useCharacter} from "~/store/character";

const router = useRoute()
const store = useCharacter();
await store.getCharacterById(+router.params.id)
const character = store.actualChar

</script>

<template>
  <div class="character-card">
    <CharacterCard :item="character"/>
  </div>
</template>

<style scoped>
.character-card{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>