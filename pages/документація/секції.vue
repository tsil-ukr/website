<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Секції | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/композиції">
    <h1 class="UiDocsLayoutTitle">Секції</h1>
    <p>
      Секція це субʼєкт, що володіє певним значенням під час компіляції
      програми.
    </p>
    <p>Секція не може змінюватись після визначення.</p>
    <blockquote><b>Секції ще в розробці.</b></blockquote>
  </UiDocsWrapper>
</template>
