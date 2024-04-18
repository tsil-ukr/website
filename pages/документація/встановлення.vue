<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

useHead({
  title: "Встановлення | Документація | Ціль",
});

definePageMeta({
  layout: "docs",
});
</script>

<template>
  <UiDocsWrapper prev="/документація" next="/документація/перша-програма">
    <h1 class="UiDocsLayoutTitle">Встановлення</h1>
    <p>
      Щоб використовувати <strong>Ціль</strong>, на вашій операційній системи
      має бути попередньо встановлено CLang.
    </p>
    <p><strong>Ціль</strong> можна завантажити з таблиці нижче:</p>
    <table>
      <thead>
        <tr>
          <th>ОС</th>
          <th>Архітектура</th>
          <th>Файл</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Linux</td>
          <td>x64</td>
          <td>
            <a href="https://ціль.укр/" download="ціль-0.1.0-x64-linux.zip">
              ціль-0.1.0-x64-linux.zip
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </UiDocsWrapper>
</template>
