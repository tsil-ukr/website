<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean
});

const route = useRoute();
const sidebarShown = useState("sidebarShown", () => false);
const practiceLinks = useState("practiceLinks", () => [
  {
    name: "Вступ",
    encodedLink: encodeURI("/документація")
  },
  {
    name: "Встановлення",
    encodedLink: encodeURI("/документація/встановлення")
  },
  {
    name: "Перша програма",
    encodedLink: encodeURI("/документація/перша-програма")
  },
  {
    name: "Приклади",
    encodedLink: encodeURI("/документація/приклади")
  },
  {
    name: "Вказівки",
    encodedLink: encodeURI("/документація/вказівки")
  },
  {
    name: "Цілі",
    encodedLink: encodeURI("/документація/цілі")
  },
  {
    name: "Дії",
    encodedLink: encodeURI("/документація/дії")
  },
  {
    name: "Структури",
    encodedLink: encodeURI("/документація/структури")
  },
  {
    name: "Модулі",
    encodedLink: encodeURI("/документація/модулі")
  }
]);

const isPracticeExpanded = useState("isPracticeExpanded", () => true);
const isPracticePage = useState("isPracticePage", () => true);

watch(
  () => route.name,
  () => {
    if (practiceLinks.value.find((l) => route.path === l.encodedLink)) {
      isPracticeExpanded.value = true;
      isPracticePage.value = true;
    } else {
      isPracticePage.value = false;
    }
  },
  {
    immediate: true
  }
);

addRouteMiddleware(() => {
  sidebarShown.value = false;
  window.scrollTo({
    top: 0
  });
});
</script>

<template>
  <div class="UiDocsLayout">
    <div class="UiDocsLayoutNavigation">
      <div class="UiDocsLayoutNavigationHeader">
        <NuxtLink to="/"><img src="@/assets/logo.png" alt=""></NuxtLink>
      </div>
      <div class="UiDocsLayoutNavigationLinks">
        <template v-if="isPracticeExpanded">
          <template
            v-for="(practiceLink, i) in practiceLinks"
            :key="practiceLink.encodedLink"
          >
            <NuxtLink
              :href="practiceLink.encodedLink"
              class="UiDocsLayoutNavigationLink"
              active-class="active"
              :class="{
              withTopShadow: i === 0,
              withBottomShadow: i === practiceLinks.length - 1,
            }"
            >
              {{ practiceLink.name }}
            </NuxtLink>
          </template>
        </template>
      </div>
    </div>
    <main class="UiDocsLayoutMain">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.UiDocsLayout {
  display: grid;
  grid-template-columns: 325px 1fr;
  height: 100%;

  .UiDocsLayoutNavigation {
    //border-right: 1px solid #9B503A;

    padding: 1rem;
    padding-top: 0;

    .UiDocsLayoutNavigationHeader {
      height: 6.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 3rem;
        height: 3rem;
        object-fit: cover;
      }
    }

    .UiDocsLayoutNavigationLinks {
      display: flex;
      flex-direction: column;

      .UiDocsLayoutNavigationLink + .UiDocsLayoutNavigationLink {
        margin-top: 0.125rem;
      }

      .UiDocsLayoutNavigationLink {
        display: flex;
        align-items: center;
        text-align: left;
        padding: 0.75rem 1.5rem;
        color: #1D1315;
        text-decoration: none;
        font-size: 1rem;
        border-radius: 1rem;

        &:hover {
          background: #eae1ca;
        }

        &.active {
          background: #9B503A;
          color: white;
          font-weight: 500;
        }
      }
    }
  }

  .UiDocsLayoutMain {
    margin: 2rem auto;
    width: 640px;
  }

  .UiDocsLayoutTitle {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }
}

.UiLink {
  color: #9B503A;
}
</style>
