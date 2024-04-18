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

<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  border: 1px solid #eae1ca;

  th,
  td {
    border: 1px solid #eae1ca;
    padding: 0.5rem;
  }

  th {
    background: #fff6e0;
  }

  td {
    background: #fff6e0;
  }

  a {
    color: #9b503a;
  }

  a:hover {
    color: #1d1315;
  }

  a:active {
    color: black;
  }

  a:visited {
    color: #9b503a;
  }

  a:visited:hover {
    color: #1d1315;
  }

  a:visited:active {
    color: black;
  }

  th {
    text-align: left;
  }

  td {
    text-align: center;
  }
}
</style>
