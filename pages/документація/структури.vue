<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
структура Координати {
  в: дійсне;
  ш: дійсне;
}

ціль точка = Координати {
  в = 2.0,
  ш = 2.0,
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
  <UiDocsWrapper prev="/документація/дії" next="/документація/композиції">
    <h1 class="UiDocsLayoutTitle">Структури</h1>
    <p>
      Структура це субʼєкт, що володіє певним значенням під час компіляції
      програми.
    </p>
    <p>Структура не може змінюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
