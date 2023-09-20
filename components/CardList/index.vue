<script setup lang="ts">
  import {CardItemType} from "~/composables/types";

  type CardListProps = {
    characters: CardItemType[]
  }
  const props = defineProps<CardListProps>()
</script>

<template>
  <div class="card-list">
    <card-item v-for="item in props.characters" :="{item}" key="item.id"/>
    <div></div>
  </div>
</template>

<style scoped>
.card-list{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  width: 1350px;
  column-gap: 25px;
  row-gap: 40px;
  min-height: 100vh;
  margin-top: 20px;
}
</style>