<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
ціль а = 2;
`.trim();

const example2 = `
змінна б = 3;
`.trim();

const example3 = `
дія додати(а: ц32, б: ц32): ц64 {
  вернути а + б;
}
`.trim();

const example4 = `
структура Вектор2 {
  а: ц64;
  б: ц64;
}
`.trim();

useHead({
  title: "Субʼєкти | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/вказівки" next="/документація/цілі">
    <h1 class="UiDocsLayoutTitle">Субʼєкти</h1>
    <p>
      <strong>Ціль</strong> має такі ключові слова для визначення субʼєктів:
      <strong>ціль</strong>, <strong>змінна</strong>, <strong>дія</strong>,
      <strong>структура</strong>.
    </p>
    <p>Ціль:</p>
    <UiCodeBlock :code="example1" borderless />
    <p>Змінна:</p>
    <UiCodeBlock :code="example2" borderless />
    <p>Дія:</p>
    <UiCodeBlock :code="example3" borderless />
    <p>Структура:</p>
    <UiCodeBlock :code="example4" borderless />
  </UiDocsWrapper>
</template>
