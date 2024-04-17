<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Приклади | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/перша-програма"
    next="/документація/вказівки"
  >
    <h1 class="UiDocsLayoutTitle">Приклади</h1>
    <p>
      Ви можете знайти безліч прикладів на
      <a href="https://фрагмент.укр" target="_blank" class="UiLink">Фрагменті</a
      >.
    </p>
    <a href="https://фрагмент.укр" target="_blank">
      <img
        style="max-width: 200px"
        src="https://фрагмент.укр/assets/logo-3-2f9fd951.png"
        alt=""
      /> </a
  ></UiDocsWrapper>
</template>
