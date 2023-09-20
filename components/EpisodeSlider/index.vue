<script setup lang="ts">
import {useCharacter} from "~/store/character";
import rightArrow from '~/assets/image/right.png'
import leftArrow from '~/assets/image/keyboard_arrow_left.png'
import {onUnmounted} from "#imports";
type CharacterItem = {
  id: number,
}
let activeIndex = ref(0)

const store = useCharacter()
await store.fetchCharacters()
const activeEpisode = store.episode

function clickHandler (type: "prev" | "next"){

  switch (type){
    case "prev":
      return activeIndex.value !== 0 ? activeIndex.value -= 1 : activeIndex.value = activeEpisode.characters.length-1;
    case "next":
      return activeIndex.value === activeEpisode.characters.length - 1 ? activeIndex.value = 0 : activeIndex.value += 1;
  }
}
</script>

<template>
  <div class="slider">
    <button @click="clickHandler('prev')">
      <img :src="leftArrow"  class="button__left"/>
    </button>

    <div class="slider__center-block">
      {{activeIndex}}
      <NuxtLink :to="'/character/'+ +activeEpisode.characters[activeIndex].split('/').slice(-1)" >
        <img :src='store.getCharacterById(+(activeEpisode.characters[activeIndex]).split("/").slice(-1)).imageLink'/>
      </NuxtLink>
    </div>
    <button @click="clickHandler('next')">
      <img :src="rightArrow" class="button__right"/>
    </button>
  </div>
</template>

<style lang="scss" scoped>
.slider{
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  &__center-block{
    @apply text-zinc-400;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
.button{
  &__right{
    width: 16px;
    padding-left: 5px;
    margin-left: 5px;
  }
  &__left{
    width: 24px;
  }
}
</style>