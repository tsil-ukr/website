<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const ifExample = `
якщо 2 > 3 {
  друк_сі(сі"2 більше за 3");
}

якщо 3 < 2 {
  друк_сі(сі"3 менше за 2");
} інакше {
  друк_сі(сі"2 більше за 3");
}
`.trim();

const whileExample = `
поки 2 > 3 {
  друк_сі(сі"2 все ще більше за 3...");
}
`.trim();

const eachExample = `
перебрати 0..10 як значення {
  друк_ціле(значення);
}
`.trim();

useHead({
  title: "Вказівки | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/приклади" next="/документація/субʼєкти">
    <h1 class="UiDocsLayoutTitle">Вказівки</h1>
    <p>Якщо:</p>
    <UiCodeBlock :code="ifExample" borderless />
    <p>Поки:</p>
    <UiCodeBlock :code="whileExample" borderless />
    <p>Перебрати:</p>
    <UiCodeBlock :code="eachExample" borderless />
    <p>Додати:</p>
    <UiCodeBlock :code="`а + б`" borderless />
    <p>Відняти:</p>
    <UiCodeBlock :code="`а - б`" borderless />
    <p>Помножити:</p>
    <UiCodeBlock :code="`а * б`" borderless />
    <p>Поділити:</p>
    <UiCodeBlock :code="`а / б`" borderless />
    <p>Остача:</p>
    <UiCodeBlock :code="`а % б`" borderless />
    <p>Чи рівно:</p>
    <UiCodeBlock :code="`а == б`" borderless />
    <p>Чи не рівно:</p>
    <UiCodeBlock :code="`а != б`" borderless />
    <p>Чи більше:</p>
    <UiCodeBlock :code="`а > б`" borderless />
    <p>Чи менше:</p>
    <UiCodeBlock :code="`а < б`" borderless />
    <p>Чи більше або рівно:</p>
    <UiCodeBlock :code="`а >= б`" borderless />
    <p>Чи менше або рівно:</p>
    <UiCodeBlock :code="`а <= б`" borderless />
    <p>Перетворення типу:</p>
    <UiCodeBlock :code="`а як дійсне`" borderless />
  </UiDocsWrapper>
</template>
