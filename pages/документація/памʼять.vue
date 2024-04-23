<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Памʼять | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/секції">
    <h1 class="UiDocsLayoutTitle">Памʼять</h1>
    <p>
      Робота з памʼятю в <strong>Цілі</strong> відбувається в ручному режимі.
    </p>
    <p>Дії для роботи з памʼятю:</p>
    <ul>
      <li>
        Отримання комірки для значення на стеку:
        <UiCodeBlock
          code="дія комірка<Т>(значення: Т) -> комірка<Т>;"
          borderless
        />
      </li>
      <li>
        Копіювання значення з комірки на стек:
        <UiCodeBlock code="дія значення<Т>(ком: комірка<Т>) -> Т;" borderless />
      </li>
      <li>
        Виділення памʼяті для вказаної кількості елементів вказаного типу:
        <UiCodeBlock
          code="дія виділити<Т>(кількість: позитивне) -> комірка<Т>;"
          borderless
        />
      </li>
      <li>
        Виділення памʼяті для вказаної кількості байт:
        <UiCodeBlock
          code="дія виділити_байти(розмір: позитивне) -> невідома_комірка;"
          borderless
        />
      </li>
      <li>
        Перевиділення памʼяті для вказаної кількості елементів вказаного типу:
        <UiCodeBlock
          code="дія перевиділити<Т>(ком: комірка<Т>, кількість: позитивне) -> комірка<Т>;"
          borderless
        />
      </li>
      <li>
        Перевиділення памʼяті для вказаної кількості байт:
        <UiCodeBlock
          code="дія перевиділити_байти(ком: невідома_комірка, розмір: позитивне) -> невідома_комірка;"
          borderless
        />
      </li>
      <li>
        Звільнення памʼяті:
        <UiCodeBlock code="дія звільнити(ком: невідома_комірка);" borderless />
      </li>
    </ul>
  </UiDocsWrapper>
</template>
