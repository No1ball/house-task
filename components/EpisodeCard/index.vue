<script setup lang="ts">
import {Episode} from "~/composables/types";
import {useCharacter} from "~/store/character";

type ItemType = {
  episode: Episode
}
const props = defineProps<ItemType>()
const store = useCharacter()
await store.fetchCharacters()
store.setActiveEpisode(props.episode)
</script>

<template>
  <div class="card-item">
    <u-i-card-item-header>
      <div>Эпизод: {{props.episode.name}}</div>
      <EpisodeSlider/>
    </u-i-card-item-header>

    <u-i-card-item-main-text :first-text="props.episode.air_date"
                             first-title="Дата выхода"
    >
    </u-i-card-item-main-text>
  </div>
</template>

<style scoped>
.card-item{
  @apply shadow-2xl shadow-zinc-400 bg-white font-black;
  width: 370px;
  height: 490px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
img{
  margin-top: 5px;
}
</style>