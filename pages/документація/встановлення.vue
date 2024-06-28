<script setup lang="ts">
import UiDocsWrapper from "~/components/UiDocsWrapper.vue";

const selectedVersion = ref();
const releases = ref([]);
const isLoadingReleases = ref(true);

const selectedVersionObject = computed(() => {
  return releases.value.find(
    (release) => release.tag_name === selectedVersion.value,
  );
});

onMounted(() => {
  isLoadingReleases.value = true;
  const resolveLatest = (latestRelease) => {
    if (window.__tsil_releases__) {
      resolveAll(latestRelease, window.__tsil_releases__);
    } else {
      fetch("https://api.github.com/repos/tsil-ukr/tsil/releases")
        .then((res) => res.json())
        .then((data) => {
          window.__tsil_releases__ = data;
          resolveAll(latestRelease, data);
        });
    }
  };
  const resolveAll = (latestRelease, data) => {
    releases.value = data;
    if (data[0] && data[0].id === latestRelease.id) {
      releases.value = data.slice(1);
    }
    releases.value = [latestRelease, ...releases.value];
    isLoadingReleases.value = false;
    selectedVersion.value = latestRelease.tag_name;
  };
  if (window.__tsil_latest_release__) {
    resolveLatest(window.__tsil_latest_release__);
  } else {
    fetch("https://api.github.com/repos/tsil-ukr/tsil/releases/latest")
      .then((res) => res.json())
      .then((latestRelease) => {
        window.__tsil_latest_release__ = latestRelease;
        resolveLatest(latestRelease);
      });
  }
});

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
      Наразі, щоб компілювати <strong>Ціль</strong> в машинний код, у вашій
      операційній системі також має бути попередньо встановлено
      <a target="_blank" class="UiLink" href="https://clang.llvm.org/"
        >LLVM/Clang</a
      >.
    </p>
    <p><strong>Ціль</strong> можна завантажити з таблиці нижче:</p>
    <template v-if="selectedVersion">
      <select v-model="selectedVersion" name="version" id="selectVersion">
        <template v-for="release in releases">
          <option
            :value="release.tag_name"
            :selected="release.tag_name === selectedVersion"
          >
            {{ release.tag_name }}
          </option>
        </template>
      </select>
      <table>
        <thead>
          <tr>
            <th>Файли</th>
          </tr>
        </thead>
        <tbody>
          <template v-for="(asset, i) in selectedVersionObject.assets">
            <tr>
              <td>
                <a :href="asset.browser_download_url" class="UiLink">
                  {{ asset.name }}
                </a>
              </td>
            </tr>
          </template>
        </tbody>
      </table>
      <template v-if="selectedVersionObject.body">
        <p>Зміни:</p>
        <blockquote class="normal">
          <template v-for="line in selectedVersionObject.body.split('\n')">
            <template v-if="line.trim()">
              <div>{{ line }}</div>
            </template>
          </template>
        </blockquote>
      </template>
    </template>
    <template v-else>
      <template v-if="isLoadingReleases">
        <blockquote class="loading">Завантаження...</blockquote>
      </template>
      <template v-else>
        <blockquote class="error">Немає випусків</blockquote>
      </template>
    </template>
  </UiDocsWrapper>
</template>
