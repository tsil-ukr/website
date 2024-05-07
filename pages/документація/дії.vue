<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
дія додати(а: ціле, б: ціле): ціле {
  вернути а + б;
}

дія старт() {
  ціль сума = додати(2, 3);
}
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
    <p>
      Дія це субʼєкт, що володіє певним значенням під час виконання програми.
    </p>
    <p>Дія не може змінюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
