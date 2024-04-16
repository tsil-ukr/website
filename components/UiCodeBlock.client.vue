<script setup>
import ccilLanguageGrammar from "@/assets/syntax/ccil.tmLanguage.json";
import * as shiki from "shiki";
import cppLanguageGrammar from "shiki/languages/cpp.tmLanguage.json";

const props = defineProps({
  code: String,
  lang: {
    type: String,
    default: "ціль",
  },
  borderless: Boolean,
});

const ccilLanguage = {
  id: "ціль",
  scopeName: "source.ціль",
  grammar: ccilLanguageGrammar,
};
const cppLanguage = {
  id: "cpp",
  scopeName: "source.cpp",
  grammar: cppLanguageGrammar,
};

const id = ref(`UiCodeBlock_${Math.random()}`);

onMounted(() => {
  shiki
    .getHighlighter({
      theme: "github-dark",
      langs: [ccilLanguage, cppLanguage],
      paths: {
        themes: "/shiki/themes",
        grammars: "/shiki/languages",
        wasm: "/shiki/wasm",
      },
    })
    .then((highlighter) => {
      document.getElementById(id.value).innerHTML = highlighter.codeToHtml(
        props.code,
        { lang: props.lang },
      );
    });
});
</script>

<template>
  <div :id="id" class="UiCodeBlock" :class="{ borderless }"></div>
</template>

<style lang="scss">
code {
  font-family: "Fira Code", monospace;
  font-weight: 500;
}

.UiCodeBlock {
  position: relative;
  z-index: 0;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    inset: -0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background: conic-gradient(
      #9b503a,
      #0000 30deg 120deg,
      #ffe173 150deg 180deg,
      #0000 210deg 300deg,
      #9b503a 330deg
    );
    background-color: #1d1315;
    border: 2px solid #1d1315;
  }

  .shiki {
    padding: 1.5rem;
    border-radius: inherit;
    font-weight: 500;
    background-color: #1d1315 !important;
    font-size: 1rem;
    font-family: "Fira Code", monospace;
    font-weight: 500;
    overflow-x: auto;
  }

  &.borderless {
    margin-top: 1rem;
    margin-bottom: 1rem;

    &:before {
      display: none;
    }

    .shiki {
      padding: 1rem 1.25rem;
    }
  }
}
</style>
