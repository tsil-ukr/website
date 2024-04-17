<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
змінна а = 2;
`.trim();

useHead({
  title: "Змінні | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/цілі" next="/документація/дії">
    <h1 class="UiDocsLayoutTitle">Змінні</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
