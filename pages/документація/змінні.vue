<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
дія старт() {
  змінна а = 2;

  а = 3; // ок
}
`.trim();

const example3 = `
дія старт() {
  ціль іван = Людина {
    імʼя = "Іван",
  };
  
  іван.імʼя = "Іванко"; // ок
}
`.trim();

useHead({
  title: "Змінні | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/цілі" next="/документація/дії">
    <h1 class="UiDocsLayoutTitle">Змінні</h1>
    <p>
      Змінна це субʼєкт, що володіє певним значенням під час виконання програми.
    </p>
    <p>Змінна може змінюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
