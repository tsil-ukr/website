<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
варіація ДаніЗначення {
  число: дійсне;
  обʼєкт: невідома_комірка;
}

структура Значення {
  тип: п8;
  дані: ДаніЗначення;
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
  <UiDocsWrapper prev="/документація/дії" next="/документація/композиції">
    <h1 class="UiDocsLayoutTitle">Варіації</h1>
    <p>
      Варіація це субʼєкт, що володіє певним значенням під час компіляції
      програми.
    </p>
    <p>Варіація не може змінюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
