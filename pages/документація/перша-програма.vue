<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const code = `
екстерн дія друк(памʼять<ц8> значення);

дія старт() {
  друк("Вперед до Цілі!");
}
`.trim();

const codeCpp = `
#include <iostream>

extern "C" void друк(char* value) {
  std::cout << value << std::endl;
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
    <p>Створіть файл <code class="code">привіт.ц</code> та заповніть його кодом:</p>
    <UiCodeBlock :code="code" borderless />
    <p>Створіть файл <code class="code">ext.cpp</code> та заповніть його кодом:</p>
    <UiCodeBlock :code="codeCpp" lang="cpp" borderless />
    <p>
      Після цього скомпілюйте програму цими командами:
    </p>
    <UiCodeBlock :code="`ціль сплавити привіт.ц -е ext.cpp`" borderless />
    <UiCodeBlock :code="`ціль збудувати`" borderless />
    <p>
      Та зрештою запустіть програму:
    </p>
    <UiCodeBlock :code="`./сплав/привіт`" borderless />
  </UiDocsWrapper>
</template>