<script setup>
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";
import UiCodeBlock from "~/components/UiCodeBlock.client.vue";

useHead({
  title: "Вступ | Документація | Ціль"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper next="/документація/встановлення">
    <h1 class="UiDocsLayoutTitle">Вступ</h1>

    <p>
      Ціль є простою, швидкою та системною мовою програмування.
    </p>
    <p>
      Ціль компілюється відразу в машинний код.
    </p>
    <br>
    <UiCodeBlock :code="`ціль україна = Атлантида{};`" />
  </UiDocsWrapper>
</template>
