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

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

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
      setTimeout(() => {
        document.getElementById(id.value).style.animation =
          "spin 2s cubic-bezier(0.4, 0.2, 0.2, 1)";
      }, 100);
    });
});
</script>

<template>
  <div :id="id" class="UiCodeBlock" :class="{ borderless }">
    <div class="shiki"></div>
  </div>
</template>

<style lang="scss">
code {
  font-family: "Fira Code", monospace;
  font-weight: 500;
}

@property --a {
  syntax: "<angle>";
  inherits: true;
  initial-value: 30deg;
}

@property --b {
  syntax: "<angle>";
  inherits: true;
  initial-value: 120deg;
}

@property --c {
  syntax: "<angle>";
  inherits: true;
  initial-value: 150deg;
}

@property --d {
  syntax: "<angle>";
  inherits: true;
  initial-value: 180deg;
}

@property --e {
  syntax: "<angle>";
  inherits: true;
  initial-value: 210deg;
}

@property --f {
  syntax: "<angle>";
  inherits: true;
  initial-value: 300deg;
}

@property --g {
  syntax: "<angle>";
  inherits: true;
  initial-value: 330deg;
}

@property --x {
  syntax: "<angle>";
  inherits: true;
  initial-value: 0deg;
}

.UiCodeBlock {
  position: relative;
  z-index: 0;
  border-radius: 1rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
  min-height: 69px;

  &:before {
    z-index: -1;
    content: " ";
    position: absolute;
    inset: -0.5rem;
    padding: 0.5rem;
    border-radius: 1rem;
    background: conic-gradient(
      from var(--x),
      #9b503a,
      #0000 var(--a) var(--b),
      #ffe173 var(--c) var(--d),
      #0000 var(--e) var(--f),
      #9b503a var(--g)
    );
    background-color: #1d1315;
    border: 2px solid #1d1315;
  }

  @keyframes spin {
    0% {
      --x: 0deg;
    }
    50% {
      --x: -180deg;
    }
    100% {
      --x: -360deg;
    }
  }

  .shiki {
    min-height: 69px;
    z-index: -1;
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
