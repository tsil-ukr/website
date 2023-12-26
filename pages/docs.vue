<template>
  <div class="UiDocsLayout">
    <div class="UiDocsLayoutNavigation">
      <div class="UiDocsLayoutNavigationHeader">
        <NuxtLink to="/"><img src="@/assets/logo.png" alt=""></NuxtLink>
      </div>
    </div>
    <main class="UiDocsLayoutMain">
      //
    </main>
  </div>
</template>

<style lang="scss">
.UiDocsLayout {
  background: white;

  display: grid;
  grid-template-columns: 325px 1fr;
  height: 100%;

  .UiDocsLayoutNavigation {
    border-right: 1px solid #FFE173;

    .UiDocsLayoutNavigationHeader {
      height: 6.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 3.5rem;
        height: 3.5rem;
        object-fit: cover;
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>