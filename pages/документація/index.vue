<script setup>
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Вступ | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper next="/документація/встановлення">
    <h1 class="UiDocsLayoutTitle">Вступ</h1>

    <p>
      <strong>Ціль</strong> є простою, швидкою та компільованою мовою
      програмування на основі української мови та моєї свідомості.
    </p>
    <p><strong>Ціль</strong> має статичну типизацію.</p>
    <p>Керування памʼятю в <strong>Цілі</strong> ручне.</p>
    <p>
      <strong>Ціль</strong> може легко інтегруватись з проектами, що
      використовують C та C++.
    </p>
  </UiDocsWrapper>
</template>
