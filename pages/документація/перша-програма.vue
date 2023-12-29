<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const code = `
взяти вв;

дія старт() {
  вв::друк("Хай живе Ціль!");
}
`.trim();

useHead({
  title: "Перша програма | Документація | Ціль"
});

definePageMeta({
  layout: "docs"
});
</script>

<template>
  <UiDocsWrapper>
    <h1 class="UiDocsLayoutTitle">Перша програма</h1>
    <p>Створіть файл <code>привіт.ц</code> та заповніть його кодом:</p>
    <UiCodeBlock :code="code" borderless />
    <p>
      Після цього скомпілюйте програму цією командою:
    </p>
    <UiCodeBlock :code="`ціль сплавити привіт.ц`" borderless />
  </UiDocsWrapper>
</template>