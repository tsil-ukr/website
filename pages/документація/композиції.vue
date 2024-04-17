<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const example1 = `
зовнішня композиція Автомобіль {
  зовнішня властивість виробник: текст;
  зовнішня властивість модель: текст;
  зовнішня властивість рік: ц32;
  
  зовнішня спец дія створити() {
    я.виробник = "Tesla";
    я.модель = "Model S";
    я.рік = 2021;
  }
}

ціль авто = Автомобіль::створити();
`.trim();

useHead({
  title: "Композиції | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація/структури" next="/документація/модулі">
    <h1 class="UiDocsLayoutTitle">Композиції</h1>
    <UiCodeBlock :code="example1" borderless />
  </UiDocsWrapper>
</template>
