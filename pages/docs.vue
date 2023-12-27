<template>
  <div class="UiDocsLayout">
    <div class="UiDocsLayoutNavigation">
      <div class="UiDocsLayoutNavigationHeader">
        <NuxtLink to="/"><img src="@/assets/logo.png" alt=""></NuxtLink>
      </div>
      <div class="UiDocsLayoutNavigationLinks">
        <a href="/" class="UiDocsLayoutNavigationLink">Вступ</a>
        <a href="/" class="UiDocsLayoutNavigationLink active">Встановлення</a>
        <a href="/" class="UiDocsLayoutNavigationLink">Перша програма</a>
      </div>
    </div>
    <main class="UiDocsLayoutMain">
    </main>
  </div>
</template>

<style lang="scss">
.UiDocsLayout {
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

    .UiDocsLayoutNavigationLinks {
      display: flex;
      flex-direction: column;

      .UiDocsLayoutNavigationLink {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.75rem 1.5rem;
        color: #1D1315;
        text-decoration: none;
        font-size: 1rem;
        border-bottom: 1px solid #FFE173;

        &:first-child {
          border-top: 1px solid #FFE173;
        }

        &.active {
          background: #FFE173;
          color: #1D1315;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
<script setup lang="ts">
</script>