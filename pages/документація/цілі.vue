<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
ціль а = 2;
ціль б: ц32 = 2332;
ціль в: д64 = 3.14;
`.trim();

useHead({
  title: "Цілі | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/субʼєкти" next="/документація/змінні">
    <h1 class="UiDocsLayoutTitle">Цілі</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
