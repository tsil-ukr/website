// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content: "Компільована українська мова програмування.",
        },
        {
          name: "keywords",
          content:
            "ціль, мова програмування, програмування, українська мова програмування, українська мова, ціль мова програмування, ціль мова",
        },
      ],
      title: "Ціль",
      link: [
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap",
        },
      ],
    },
  },

  nitro: {
    prerender: {
      routes: [
        "/",
        "/документація",
        "/документація/вказівки",
        "/документація/встановлення",
        "/документація/дії",
        "/документація/змінні",
        "/документація/композиції",
        "/документація/памʼять",
        "/документація/перша-програма",
        "/документація/приклади",
        "/документація/секції",
        "/документація/синоніми",
        "/документація/структури",
        "/документація/субʼєкти",
        "/документація/типи",
        "/документація/хід",
        "/документація/цілі",
      ],
      failOnError: false,
    },
  },
});
