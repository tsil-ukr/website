<script setup>
import { addRouteMiddleware, useState } from "nuxt/app";

defineProps({
  prev: String,
  next: String,
  title: String,
  loading: Boolean,
});

const route = useRoute();
const sidebarShown = useState("sidebarShown", () => true);
const practiceLinks = useState("practiceLinks", () => [
  {
    name: "Вступ",
    encodedLink: encodeURI("/документація"),
  },
  {
    name: "Встановлення",
    encodedLink: encodeURI("/документація/встановлення"),
  },
  {
    name: "Перша програма",
    encodedLink: encodeURI("/документація/перша-програма"),
  },
  {
    name: "Приклади",
    encodedLink: encodeURI("/документація/приклади"),
  },
  {
    name: "Вказівки",
    encodedLink: encodeURI("/документація/вказівки"),
  },
  {
    name: "Субʼєкти",
    encodedLink: encodeURI("/документація/субʼєкти"),
  },
  {
    name: "Типи",
    encodedLink: encodeURI("/документація/типи"),
  },
  {
    name: "Цілі",
    encodedLink: encodeURI("/документація/цілі"),
  },
  {
    name: "Змінні",
    encodedLink: encodeURI("/документація/змінні"),
  },
  {
    name: "Дії",
    encodedLink: encodeURI("/документація/дії"),
  },
  {
    name: "Структури",
    encodedLink: encodeURI("/документація/структури"),
  },
  {
    name: "Композиції",
    encodedLink: encodeURI("/документація/композиції"),
  },
  {
    name: "Секції",
    encodedLink: encodeURI("/документація/секції"),
  },
  {
    name: "Памʼять",
    encodedLink: encodeURI("/документація/памʼять"),
  },
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
    immediate: true,
  },
);

function isMobile() {
  return window.innerWidth <= 768;
}

onMounted(() => {
  sidebarShown.value = !isMobile();
});

addRouteMiddleware(() => {
  sidebarShown.value = !isMobile();

  window.scrollTo({
    top: 0,
  });
});
</script>

<template>
  <div class="UiDocsLayout">
    <div class="UiDocsLayoutNavigation" v-if="sidebarShown">
      <div class="UiDocsLayoutNavigationHeader">
        <NuxtLink to="/"><img src="@/assets/logo.png" alt="" /></NuxtLink>
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
      <div class="UiDocsLayoutNavigationFooter">
        <img src="@/assets/organization.svg" alt="" />
        Організація Мавки
      </div>
    </div>
    <main class="UiDocsLayoutMain">
      <slot />
    </main>
    <button
      @click="sidebarShown = !sidebarShown"
      class="UiDocsLayoutNavigationToggle"
    >
      {{ sidebarShown ? "×" : "☰" }}
    </button>
  </div>
</template>

<style lang="scss">
.UiDocsLayout {
  position: relative;
  min-height: 100%;
  padding-left: 350px;
  background: lighten(#fff6e0, 2);

  @media (max-width: 768px) {
    padding-left: 0;
  }

  .UiDocsLayoutNavigation {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    overflow-y: auto;
    width: 350px;
    z-index: 100;

    padding: 1rem;
    padding-top: 0;
    padding-bottom: 6rem;
    background: #fff6e0;
    border-right: 1px solid #eae1ca;

    &::-webkit-scrollbar {
      display: none;
    }

    @media (max-width: 768px) {
      right: 0;
      width: 100%;
      border-right: none;
    }

    .UiDocsLayoutNavigationHeader {
      height: 6.5rem;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        width: 3rem;
        height: 3rem;
        object-fit: contain;
      }
    }

    .UiDocsLayoutNavigationFooter {
      position: fixed;
      height: 2.5rem;
      bottom: 0;
      left: 0;
      width: 350px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-top: 1px solid #eae1ca;
      border-right: 1px solid #eae1ca;
      font-size: 1rem;
      color: rgba(#1d1315, 0.5);
      background: #fff6e0;

      @media (max-width: 768px) {
        right: 0;
        width: 100%;
        border-right: none;
      }

      img {
        margin-top: -0.5rem;
        height: 1.125rem;
        margin-right: 0.5rem;
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
        color: #1d1315;
        text-decoration: none;
        font-size: 1rem;
        border-radius: 1rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        &:hover {
          background: #eae1ca;
        }

        &.active {
          background: #9b503a;
          color: white;
          font-weight: 500;
        }
      }
    }
  }

  .UiDocsLayoutMain {
    margin: 0 auto;
    padding: 2rem 0;
    padding-bottom: 5rem;
    max-width: 640px;
    width: 100%;

    @media (max-width: 768px) {
      padding-top: 4rem;
      padding-left: 2rem;
      padding-right: 2rem;
    }
  }

  .UiDocsLayoutTitle {
    font-size: 2rem;
    font-weight: bold;
    margin-bottom: 2rem;
    text-align: center;
  }

  .UiDocsLayoutNavigationToggle {
    position: fixed;
    top: 1rem;
    left: 1rem;
    z-index: 1000;
    background: #9b503a;
    color: white;
    border: none;
    border-radius: 0.5rem;
    height: 3rem;
    width: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    cursor: pointer;

    @media (min-width: 768px) {
      display: none;
    }
  }
}

.UiLink {
  color: #9b503a;
}
</style>
