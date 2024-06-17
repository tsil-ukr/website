<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
синонім ПІ = 3.14;

синонім ІД = двигуни::ІоннийДвигун;

синонім друк_ціле = друк<ціле>;

синонім вітання = ю8"Від Мавки до Цілі, від Цілі до Мавки!";
`.trim();

useHead({
  title: "Синоніми | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/секції" next="/документація/памʼять">
    <h1 class="UiDocsLayoutTitle">Синоніми</h1>
    <p>Синонім можна створити на інший субʼєкт, число або ю8-текст.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
