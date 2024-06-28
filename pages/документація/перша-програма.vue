<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const code = `
зовнішня дія друк_ю8(значення: памʼять<п8>);

дія старт() {
  друк_ю8(ю8"Вперед до Цілі!");
}
`.trim();

const codeCpp = `
#include <iostream>

extern "C" void друк_ю8(unsigned char* value) {
  std::cout << value << std::endl;
}
`.trim();

useHead({
  title: "Перша програма | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper
    prev="/документація/встановлення"
    next="/документація/приклади"
  >
    <h1 class="UiDocsLayoutTitle">Перша програма</h1>
    <p>
      Створіть файл <code class="code">привіт.ц</code> та заповніть його кодом:
    </p>
    <UiCodeBlock :code="code" borderless />
    <p>
      Створіть файл <code class="code">extension.cpp</code> та заповніть його
      кодом:
    </p>
    <UiCodeBlock :code="codeCpp" lang="cpp" borderless />
    <p>Після цього скомпілюйте програму цією командою:</p>
    <UiCodeBlock
      :code="`ціль привіт сплавити привіт.ц extension.cpp`"
      lang="text"
      borderless
    />
    <p>Та зрештою запустіть програму:</p>
    <UiCodeBlock :code="`./привіт`" borderless />
  </UiDocsWrapper>
</template>
