<script setup>
useHead({
  title: "Ціль",
});
</script>

<template>
  <div class="UiMain">
    <div class="UiMainLogo">
      <img src="@/assets/logo.png" alt="" />
      Ціль
    </div>
    <div class="UiMainTitle">
      Швидка, проста, компільована українська мова програмування.
    </div>
    <div class="UiMainCode">
      <UiCodeBlock :code="`ціль україна = створити(Рай);`" />
    </div>
    <div class="UiMainButtons">
      <NuxtLink
        :to="encodeURI('/документація/встановлення')"
        class="UiMainButton"
      >
        Завантажити
      </NuxtLink>
      <NuxtLink :to="encodeURI('/документація')" class="UiMainButton outline">
        Документація
      </NuxtLink>
    </div>
    <div class="UiMainFooter">Когут Давид Богданович, 2024</div>
  </div>
</template>

<style lang="scss">
.UiMain {
  min-height: 100%;
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  .UiMainLogo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;

    img {
      margin-bottom: 2rem;
      width: 4rem;
      height: 4rem;
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
    margin-top: 1rem;
    max-width: 500px;
    width: 100%;
  }

  .UiMainButtons {
    margin: 0 auto;
    margin-top: 1rem;
    max-width: calc(500px + 1rem);
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    @media (max-width: 768px) {
      margin-top: 0.5rem;
      flex-direction: column;
      gap: 0.5rem;
    }

    .UiMainButton {
      height: 3rem;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #9b503a;
      color: white;
      border: 4px solid #9b503a;
      font-size: 1rem;
      font-weight: 500;
      text-decoration: none;

      &:hover {
        background: #1d1315;
        color: white;
        border: 4px solid #1d1315;
        cursor: pointer;
      }

      &:active {
        background: black;
        color: white;
        border: 4px solid black;
      }

      &.outline {
        background: transparent;
        border: 4px solid #9b503a;
        color: #9b503a;

        &:hover {
          background: #1d1315;
          color: white;
          border: 4px solid #1d1315;
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

  .UiMainFooter {
    margin: 0 auto;
    margin-top: 4rem;
    color: #9b503a;
  }
}

.UiLeopard {
  width: 100%;

  img {
    width: 100%;
  }
}
</style>
