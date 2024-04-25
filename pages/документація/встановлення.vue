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
      має бути попередньо встановлено
      <a target="_blank" class="UiLink" href="https://clang.llvm.org/">CLang</a
      >. Він не включається в архів випусків (як в інших мовах), щоб не
      завантажувати ще 150МБ одних і тих ж бібліотек.
    </p>
    <p><strong>Ціль</strong> можна завантажити з таблиці нижче:</p>
    <select name="version" id="selectVersion">
      <option value="0.1.0">0.1.0</option>
    </select>
    <table>
      <thead>
        <tr>
          <th>ОС</th>
          <th>Архітектура</th>
          <th>Архіви</th>
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
