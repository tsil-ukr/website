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
      програмування на основі кириличної абетки, української мови та моєї
      свідомості.
    </p>
    <p><strong>Ціль</strong> має статичну типизацію.</p>
    <p>Керування памʼятю в <strong>Цілі</strong> ручне.</p>
  </UiDocsWrapper>
</template>
