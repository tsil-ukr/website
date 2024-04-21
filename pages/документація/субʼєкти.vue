<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
ціль а = 2;
`.trim();

const example2 = `
змінна б = 3;
`.trim();

const example3 = `
дія додати(а: ціле, б: ціле) -> ціле {
  вернути а + б;
}
`.trim();

const example4 = `
структура Координати {
  в: дійсне,
  ш: дійсне,
}
`.trim();

const example5 = `
композиція Людина {
  властивість імʼя: текст;
  
  дія привітатись() {
    друк(я.імʼя + " каже привіт!");
  }
}
`.trim();

const example6 = `
секція двигуни {
  структура РеактивнийДвигун {
    потужність: ціле;
  }
  
  структура ІоннийДвигун {
    потужність: ціле;
  }
}
`.trim();

useHead({
  title: "Субʼєкти | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/вказівки" next="/документація/типи">
    <h1 class="UiDocsLayoutTitle">Субʼєкти</h1>
    <p>Ціль:</p>
    <UiCodeBlock :code="example1" borderless />
    <p>Змінна:</p>
    <UiCodeBlock :code="example2" borderless />
    <p>Дія:</p>
    <UiCodeBlock :code="example3" borderless />
    <p>Структура:</p>
    <UiCodeBlock :code="example4" borderless />
    <p>Композиція:</p>
    <UiCodeBlock :code="example5" borderless />
    <p>Секція:</p>
    <UiCodeBlock :code="example6" borderless />
  </UiDocsWrapper>
</template>
