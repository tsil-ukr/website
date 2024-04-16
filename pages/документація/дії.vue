<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
дія додати(а: ц32, б: ц32): ц64 {
  вернути а + б;
}

змінна сума = додати(2, 3);
`.trim();

useHead({
  title: "Дії | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper>
    <h1 class="UiDocsLayoutTitle">Дії</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
