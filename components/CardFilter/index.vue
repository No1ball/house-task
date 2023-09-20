<script setup lang="ts">
import {useCharacter} from "~/store/character";

const store = useCharacter()

</script>

<template>
<div class="wrapper">
  <div class="filters">
    <input class="filters__input" placeholder="Имя героя" v-model="store.searchValue"/>
    <select v-model="store.selectValue" class="filters__select">
      <option value="Alive">Alive</option>
      <option value="Dead">Dead</option>
      <option value="unknown">unknown</option>
    </select>
  </div>
  <div class="wrapper__border"></div>
</div>
</template>

<style lang="scss" scoped>
.wrapper{
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  &__border{
    @apply w-full border-b border-zinc-300 ;
    height: 15px;
    &::after{
      content: " ";
    }
  }
  height: 60px;
  margin-top: 20px;
  padding-bottom: 10px;
  //width: 100%;
}
.filters{
  display: flex;
  width: 450px;
  justify-content: space-around;
  &__input{
    @apply border rounded-xl border-zinc-300;
    height: 35px;
    padding-left: 10px;
  }
  &__select{
    width: 110px;
    padding-left: 10px;
    @apply rounded-xl bg-white border border-zinc-300;
  }
}

</style>