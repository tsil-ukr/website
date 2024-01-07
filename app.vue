<script setup>
const route = useRoute();
const visible = ref(route.hash === "#перегляд");
</script>

<template>
  <ClientOnly>
    <template v-if="visible">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </template>
  </ClientOnly>
</template>

<style lang="sass">
@import "./assets/main.scss"
</style>