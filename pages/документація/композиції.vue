<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Композиції | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/структури" next="/документація/секції">
    <h1 class="UiDocsLayoutTitle">Композиції</h1>
    <p>
      Композиція це субʼєкт, що володіє певним значенням під час компіляції
      програми.
    </p>
    <p>Композиція не може змінюватись після визначення.</p>
    <blockquote><b>Композиції ще в розробці.</b></blockquote>
  </UiDocsWrapper>
</template>
