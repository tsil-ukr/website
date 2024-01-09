<script setup>
useHead({
  title: "Ціль"
});
</script>

<template>
  <div class="UiMain">
    <div class="UiMainLogo">
      <img src="@/assets/logo.png" alt="">
      Ціль
    </div>
    <div class="UiMainTitle">
      Швидка, проста, низькорівнева українська мова програмування.
    </div>
    <div class="UiMainCode">
      <UiCodeBlock :code="`ціль україна = Атлантида{};`" />
    </div>
    <div class="UiMainButtons">
      <button class="UiMainButton">Завантажити</button>
      <NuxtLink :to="encodeURI('/документація')" class="UiMainButton outline">Документація</NuxtLink>
    </div>
  </div>
</template>

<style lang="scss">
.UiMain {
  height: 100%;
  padding-top: 5rem;
  display: flex;
  flex-direction: column;

  .UiMainLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    img {
      margin-bottom: 1rem;
      width: 5rem;
      height: 5rem;
      object-fit: contain;
    }
  }

  .UiMainTitle {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 30ch;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  .UiMainCode {
    margin: 0 auto;
    margin-top: 2rem;
    max-width: 500px;
    width: 100%;
  }

  .UiMainButtons {
    margin: 0 auto;
    margin-top: 2rem;
    max-width: calc(500px + 1rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    .UiMainButton {
      height: 3rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #9B503A;
      color: white;
      border: 4px solid #9B503A;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        background: #1D1315;
        color: white;
        border: 4px solid #1D1315;
        cursor: pointer;
      }

      &:active {
        background: black;
        color: white;
        border: 4px solid black;
      }

      &.outline {
        background: transparent;
        border: 4px solid #9B503A;
        color: #9B503A;

        &:hover {
          background: #1D1315;
          color: white;
          border: 4px solid #1D1315;
          cursor: pointer;
        }

        &:active {
          background: black;
          color: white;
          border: 4px solid black;
        }
      }
    }
  }
}

.UiLeopard {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
