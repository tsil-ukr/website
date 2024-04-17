<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

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
    <p>Додати</p>
    <UiCodeBlock :code="`а + б`" borderless />
    <p>Відняти</p>
    <UiCodeBlock :code="`а - б`" borderless />
    <p>Помножити</p>
    <UiCodeBlock :code="`а * б`" borderless />
    <p>Поділити</p>
    <UiCodeBlock :code="`а / б`" borderless />
    <p>Остача</p>
    <UiCodeBlock :code="`а % б`" borderless />
    <p>Степінь</p>
    <UiCodeBlock :code="`а ** б`" borderless />
    <p>Чи рівно</p>
    <UiCodeBlock :code="`а == б`" borderless />
    <p>Чи не рівно</p>
    <UiCodeBlock :code="`а != б`" borderless />
    <p>Чи більше</p>
    <UiCodeBlock :code="`а > б`" borderless />
    <p>Чи менше</p>
    <UiCodeBlock :code="`а < б`" borderless />
    <p>Чи більше або рівно</p>
    <UiCodeBlock :code="`а >= б`" borderless />
    <p>Чи менше або рівно</p>
    <UiCodeBlock :code="`а <= б`" borderless />
  </UiDocsWrapper>
</template>
