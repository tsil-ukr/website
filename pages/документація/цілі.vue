<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
ціль а = 2;

а = 3; // помилка компіляції
`.trim();

const example3 = `
ціль іван = Людина {
  імʼя = "Іван",
};

іван.імʼя = "Іванко"; // ок
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
    <p>
      Ціль це субʼєкт, що володіє певним значенням під час виконання програми.
    </p>
    <p>Ціль не може змінюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
    <UiCodeBlock :code="example3" borderless />
  </UiDocsWrapper>
</template>
