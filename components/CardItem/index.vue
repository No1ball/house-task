<script setup lang="ts">
import {CardItemType} from "~/composables/types";

type ItemType = {
  item: CardItemType
}
  const props = defineProps<ItemType>()

</script>

<template>
  <div class="card-item">
    <u-i-card-item-header>
      <NuxtLink :to="'/character/'+props.item.id">{{props.item.name}}</NuxtLink>
      <img :src='props.item.imageLink' />
    </u-i-card-item-header>

    <u-i-card-item-main-text :first-text="props.item.species"
                             first-title="Разновидность"
                             second-title="Эпизоды"
    >
      <NuxtLink v-for="episode in props.item.episodes" :to="'/episode/'+episode.split('/').slice(-1)">{{episode}}</NuxtLink>
    </u-i-card-item-main-text>
  </div>
</template>

<style scoped>
.card-item{
  @apply shadow-2xl shadow-zinc-400 bg-white font-black;
  width: 420px;
  height: 650px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
img{
  margin-top: 5px;
}
</style>