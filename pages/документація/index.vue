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
    <p>
      <strong>Ціль</strong> створена спеціально з можливістю легко інтегруватись
      з C та C++. <strong>Ціль</strong> також можна компілювати в WASM.
    </p>
    <hr />
    <!--    <p>-->
    <!--      Група <strong>Цілі</strong> в Масці:-->
    <!--      <a class="UiLink" target="_blank" href="https://maska.me/tsil"-->
    <!--        >maska.me/tsil</a-->
    <!--      >-->
    <!--    </p>-->
    <p>
      GitHub <strong>Цілі</strong>:
      <a class="UiLink" target="_blank" href="https://github.com/tsil-ukr/tsil"
        >github.com/tsil-ukr/tsil</a
      >
    </p>
  </UiDocsWrapper>
</template>
