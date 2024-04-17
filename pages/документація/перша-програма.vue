<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const code = `
екстерн дія printf(значення: комірка<п8>);

дія друк(значення: текст) {
  printf(значення.дані);
  printf("\\n");
}

дія старт() {
  друк("Вперед до Цілі!");
}
`.trim();

useHead({
  title: "Перша програма | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/встановлення"
    next="/документація/приклади"
  >
    <h1 class="UiDocsLayoutTitle">Перша програма</h1>
    <p>
      Створіть файл <code class="code">привіт.ц</code> та заповніть його кодом:
    </p>
    <UiCodeBlock :code="code" borderless />
    <p>Після цього скомпілюйте програму цими командами:</p>
    <UiCodeBlock :code="`ціль сплавити привіт.ц`" lang="text" borderless />
    <p>Та зрештою запустіть програму:</p>
    <UiCodeBlock :code="`./привіт`" borderless />
  </UiDocsWrapper>
</template>
