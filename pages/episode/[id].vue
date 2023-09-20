<script setup lang="ts">
import {useCharacter} from "~/store/character";

const router = useRoute()
const store = useCharacter()
await store.getEpisodeById(+router.params.id)

</script>

<template>
  <div class="episode-card">
    <EpisodeCard :episode="store.episode"/>
  </div>
</template>

<style scoped>
.episode-card{
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>