<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
структура Вектор2 {
  а: ц64;
  б: ц64;
}

ціль точка = Вектор2 {
  а: 2,
  б: 2,
};

ціль точка_в_коморі: комірка<Вектор2> = покласти Вектор2 {
  а: 2,
  б: 2,
};
`.trim();

useHead({
  title: "Структури | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper>
    <h1 class="UiDocsLayoutTitle">Структури</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
