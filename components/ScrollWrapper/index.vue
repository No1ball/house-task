<script setup lang="ts">
import {useCharacter} from "~/store/character";


const wrapper = ref(null)
const end = ref(null)
const store = useCharacter()
onMounted(() => {
  const observer = new IntersectionObserver(async (entries) => {
    if(entries[0].isIntersecting){
        await store.fetchCharacters()
        await store.addCharacters()
      }
    })

  observer.observe(end.value)
})
</script>

<template>
  <div ref="wrapper" class="wrapper">

    <div ref="end" class="scroll_end">
      <span>Load More</span>
    </div>
  </div>
</template>

<style scoped>

</style>