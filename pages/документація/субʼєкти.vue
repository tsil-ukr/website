<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
ціль а = 2;
`.trim();

const example2 = `
змінна б = 3;
`.trim();

const example3 = `
дія додати(а: ціле, б: ціле): ціле {
  вернути а + б;
}
`.trim();

const example4 = `
структура Координати {
  в: дійсне;
  ш: дійсне;
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

const example7 = `
синонім РД = двигуни::РеактивнийДвигун;
`.trim();

const example8 = `
варіація ДаніЗначення {
  число: дійсне;
  обʼєкт: невідома_комірка;
}

структура Значення {
  тип: п8;
  дані: ДаніЗначення;
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
    <p>Синонім:</p>
    <UiCodeBlock :code="example7" borderless />
    <p>Варіація:</p>
    <UiCodeBlock :code="example8" borderless />
  </UiDocsWrapper>
</template>
