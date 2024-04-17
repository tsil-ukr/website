<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
дія додати(а: ціле, б: ціле): ціле {
  вернути а + б;
}

змінна сума = додати(2, 3);
`.trim();

useHead({
  title: "Дії | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/змінні" next="/документація/структури">
    <h1 class="UiDocsLayoutTitle">Дії</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
