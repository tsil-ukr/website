<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
секція двигуни {
  структура ІоннийДвигун {
    потужність: ціле;
  }
  
  дія запустити(двигун: ІоннийДвигун) {
    друк_сі(сі"Запускаємо іонний двигун...");
  }
}

ціль двигун = двигуни::ІоннийДвигун {
  потужність = 100,
};

двигуни::запустити(двигун);
`.trim();

useHead({
  title: "Секції | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/композиції" next="/документація/памʼять">
    <h1 class="UiDocsLayoutTitle">Секції</h1>
    <p>
      Секція це субʼєкт, що володіє певним значенням під час компіляції
      програми.
    </p>
    <p>Секція може доповнюватись після визначення.</p>
    <UiCodeBlock :code="example1" borderless />
    <blockquote><b>Секції ще в розробці.</b></blockquote>
  </UiDocsWrapper>
</template>
