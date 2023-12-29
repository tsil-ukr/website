<script setup>
import ccilLanguageGrammar from "@/assets/syntax/ccil.tmLanguage.json";
import * as shiki from "shiki";
import { useState } from "#app";

const props = defineProps({
  code: String,
  noBorder: Boolean
});

const ccilLanguage = {
  id: "ціль",
  scopeName: "source.ціль",
  grammar: ccilLanguageGrammar
};

const el = useState("el", () => null);

onMounted(() => {
  shiki
    .getHighlighter({
      theme: "github-dark",
      langs: [ccilLanguage],
      paths: {
        themes: "/shiki/themes",
        grammars: "/shiki/languages",
        wasm: "/shiki/wasm"
      }
    })
    .then((highlighter) => {
      el.value.innerHTML = highlighter.codeToHtml(props.code, { lang: "ціль" });
    });
});
</script>

<template>
  <div ref="el" class="UiCodeBlock" :class="{ noBorder }"></div>
</template>

<style lang="scss">
.UiCodeBlock {
  position: relative;
  z-index: 0;
  border-radius: 1rem;

  &:before {
    z-index: -1;
    content: "";
    position: absolute;
    inset: -0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background: conic-gradient(
        #9B503A,
        #0000 30deg 120deg,
        #FFE173 150deg 180deg,
        #0000 210deg 300deg,
        #9B503A 330deg
    );
    background-color: #1D1315;
    border: 2px solid #1D1315;
  }

  .shiki {
    padding: 1.5rem;
    border-radius: inherit;
    font-weight: 500;
    background-color: #1D1315 !important;
    font-size: 1rem;
    font-family: "Fira Code", monospace;
  }
}
</style>