<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Встановлення | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/перша-програма">
    <h1 class="UiDocsLayoutTitle">Встановлення</h1>
    <p>
      Ціль можна завантажити звідси:
      <a class="UiLink" href="/завантажити">ціль.укр/завантажити</a>
    </p>
  </UiDocsWrapper>
</template>
