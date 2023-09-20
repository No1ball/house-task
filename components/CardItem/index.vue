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
      <NuxtLink to='/character/2'>{{props.item.name}}</NuxtLink>
      <img :src='props.item.imageLink' />
    </u-i-card-item-header>

    <u-i-card-item-main-text :first-text="props.item.type"
                             first-title="Разновидность"
                             second-title="Эпизоды"
    >
      <NuxtLink v-for="episode in props.item.episodes" to="/episode/1">{{episode}}</NuxtLink>
    </u-i-card-item-main-text>
  </div>
</template>

<style scoped>
.card-item{
  @apply shadow-2xl shadow-zinc-500 bg-white font-black;
  width: 350px;
  height: 550px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
}
</style>