<script setup lang="ts">
defineProps<{
  prev?: string;
  next?: string;
}>();
</script>

<template>
  <div class="UiDocsWrapper">
    <slot />

    <div class="UiDocsWrapperButtons">
      <template v-if="prev">
        <NuxtLink :to="encodeURI(prev)" class="UiDocsWrapperButton">
          Відступ
        </NuxtLink>
      </template>
      <template v-else>
        <div
          class="UiDocsWrapperButton"
          style="opacity: 0; pointer-events: none"
        ></div>
      </template>
      <template v-if="next">
        <NuxtLink :to="encodeURI(next)" class="UiDocsWrapperButton">
          Наступ
        </NuxtLink>
      </template>
      <template v-else>
        <div
          class="UiDocsWrapperButton"
          style="opacity: 0; pointer-events: none"
        ></div>
      </template>
    </div>
  </div>
</template>

<style lang="scss">
.UiDocsWrapperButtons {
  display: flex;
  align-items: center;
  margin-top: 2rem;

  .UiDocsWrapperButton {
    padding: 0.5rem 1rem;
    background: #fff6e0;
    border: 1px solid #eae1ca;
    border-radius: 0.25rem;
    color: #000;
    text-decoration: none;
    font-size: 1rem;

    &:hover {
      background: #9b503a;
      color: white;
      border: 1px solid #9b503a;
    }

    &:active {
      background: #1d1315;
      color: white;
      border: 1px solid #1d1315;
    }
  }

  .UiDocsWrapperButton:last-child {
    margin-left: auto;
  }
}
</style>
