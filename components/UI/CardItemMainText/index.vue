<script setup lang="ts">
const props = defineProps({
  firstTitle: { type: String, required: true },
  firstText: {type: String, required: true},
  secondTitle: String,
  secondText: String,
  thirdTitle: String,
  thirdText: String
}
)
</script>

<template>
  <div class="content-block">
    <div>
      <span class="content-block__title_zinc-500">{{props.firstTitle}}</span>:
      <span class="content-block__text_zinc-900">{{props.firstText}}</span>
    </div>
    <div v-if="props.secondTitle && props.secondText">
      <span class="content-block__title_zinc-500">{{props.secondTitle}}</span>:
      <span class="content-block__text_zinc-900">{{props.secondText}}</span>
    </div>
    <div v-else-if="props.secondTitle && !props.secondText">
      <span class="content-block__title_zinc-500" >{{props.secondTitle}}: </span>
      <div class="content-block__text_zinc-900">
        <slot/>
      </div>
    </div>
    <div v-if="props.thirdTitle && props.thirdText">
      <span class="content-block__title_zinc-500">{{props.thirdTitle}}</span>:
      <span class="content-block__text_zinc-900">{{props.thirdText}}</span>
    </div>
  </div>
</template>

<style lang="scss"  scoped>
  .content-block{
      @apply font-sans mx-2;

    &__title{
      &_zinc-500 {
        @apply font-medium text-xl text-zinc-500;
      }
    }
    &__text{
      &_zinc-900{
        @apply text-zinc-900;
      }
    }
  }

</style>