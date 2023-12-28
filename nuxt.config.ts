// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  nitro: {
    prerender: {
      routes: [
        "/",
        "/документація",
        "/документація/вказівки",
        "/документація/встановлення",
        "/документація/дії",
        "/документація/модулі",
        "/документація/перша-програма",
        "/документація/приклади",
        "/документація/структури",
        "/документація/цілі",
      ],
      failOnError: false
    }
  }
});
