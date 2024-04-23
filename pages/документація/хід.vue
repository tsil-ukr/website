<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Хід | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/памʼять">
    <h1 class="UiDocsLayoutTitle">Хід</h1>
    <p>Цілі для роботи з ходом:</p>
    <ul>
      <li>
        <UiCodeBlock code="ціль вхід: хід;" borderless />
      </li>
      <li>
        <UiCodeBlock code="ціль вихід: хід;" borderless />
      </li>
      <li>
        <UiCodeBlock code="ціль похід: хід;" borderless />
      </li>
    </ul>
    <p>Дії для роботи з ходом:</p>
    <ul>
      <li>
        Відкриття ходу до файлу:
        <UiCodeBlock
          code="дія відкрити(шлях: комірка<п8>, режим: комірка<п8>) -> комірка<хід>;"
          borderless
        />
      </li>
      <li>
        Закриття ходу до файлу:
        <UiCodeBlock code="дія закрити(х: комірка<хід>);" borderless />
      </li>
      <li>
        Прочитати частину файлу:
        <UiCodeBlock
          code="дія прочитати(х: комірка<хід>, кількість: позитивне, призначення: комірка<п8>);"
          borderless
        />
      </li>
      <li>
        Записати частину файлу:
        <UiCodeBlock
          code="дія записати(х: комірка<хід>, кількість: позитивне, значення: комірка<п8>);"
          borderless
        />
      </li>
    </ul>
    <blockquote><b>Хід ще в розробці.</b></blockquote>
  </UiDocsWrapper>
</template>
