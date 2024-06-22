<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
структура Значення {
  тип: п8;
  дані: дійсне | позитивне | невідома_комірка;
}

дія старт() {
  ціль значення = Значення {
    тип = 1,
    дані = 2.0 як дійсне,
  };
  друк_дійсне(значення.дані як дійсне);
}
`.trim();

useHead({
  title: "Варіації | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/синоніми" next="/документація/памʼять">
    <h1 class="UiDocsLayoutTitle">Варіації</h1>
    <p>Варіація це тип, що може бути представлений декількома типами даних.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
