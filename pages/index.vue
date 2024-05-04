<script setup>
const latestVersion = ref("а.б.в");

onMounted(() => {
  if (window.__tsil_latest_release__) {
    latestVersion.value = window.__tsil_latest_release__.tag_name;
  } else {
    fetch("https://api.github.com/repos/tsil-ukr/tsil/releases/latest")
      .then((res) => res.json())
      .then((latestRelease) => {
        window.__tsil_latest_release__ = latestRelease;
        latestVersion.value = latestRelease.tag_name;
      });
  }
});

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
    <div class="UiMainTitle">Звичайна мова для надзвичайних завдань.</div>
    <div class="UiMainCode">
      <UiCodeBlock :code="`ціль україна = створити(Рай);`" />
    </div>
    <div class="UiMainButtons">
      <NuxtLink
        :to="encodeURI('/документація/встановлення')"
        class="UiMainButton"
      >
        Завантажити ({{ latestVersion }})
      </NuxtLink>
      <NuxtLink :to="encodeURI('/документація')" class="UiMainButton outline">
        Документація
      </NuxtLink>
    </div>
    <div class="UiMainGoldList">
      <template v-for="i in new Array(8).fill(0)">
        <svg
          class="UiMainGold"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 511.882 511.882"
          xml:space="preserve"
        >
          <polygon
            style="fill: #f6bb42"
            points="350.216,176.572 278.374,158.615 37.038,264.123 0,338.207 125.753,374.324 386.13,258.531 
	"
          />
          <polygon
            style="fill: #ffce54"
            points="350.216,176.572 107.756,284.345 125.753,374.324 386.13,258.531 "
          />
          <polygon
            style="fill: #e8aa3d"
            points="107.756,284.345 37.038,264.123 0.015,338.207 125.753,374.324 "
          />
          <polygon
            style="fill: #f6bb42"
            points="475.969,212.682 404.127,194.717 162.791,300.232 125.753,374.324 251.504,410.41 
	511.882,294.625 "
          />
          <polygon
            style="fill: #ffce54"
            points="475.969,212.682 233.508,320.431 251.504,410.41 511.882,294.625 "
          />
          <polygon
            style="fill: #e8aa3d"
            points="233.508,320.431 162.791,300.232 125.753,374.324 251.504,410.41 "
          />
          <polygon
            style="fill: #f6bb42"
            points="396.316,119.429 324.488,101.473 103.867,198.435 66.843,272.519 192.596,308.621 
	432.245,201.379 "
          />
          <polygon
            style="fill: #ffce54"
            points="396.316,119.429 174.6,218.641 192.596,308.621 432.245,201.379 "
          />
          <polygon
            style="fill: #e8aa3d"
            points="174.6,218.641 103.867,198.435 66.843,272.519 192.596,308.621 "
          />
        </svg>
      </template>
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
    padding-left: 2rem;
    padding-right: 2rem;
  }

  .UiMainGoldList {
    z-index: 0;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    overflow: hidden;
  }

  .UiMainGold:nth-child(1) {
    position: absolute;
    z-index: 0;
    top: 20%;
    left: 70%;
    width: 3rem;
  }

  .UiMainGold:nth-child(2) {
    position: absolute;
    z-index: 0;
    top: 80%;
    left: 70%;
    width: 7rem;
  }

  .UiMainGold:nth-child(3) {
    position: absolute;
    z-index: 0;
    top: 50%;
    left: 90%;
    width: 9rem;
  }

  .UiMainGold:nth-child(4) {
    position: absolute;
    z-index: 0;
    top: 30%;
    left: 20%;
    width: 9rem;
    opacity: 0.05;
  }

  .UiMainGold:nth-child(5) {
    position: absolute;
    z-index: 0;
    top: 70%;
    left: 20%;
    width: 3rem;
  }

  .UiMainGold:nth-child(6) {
    position: absolute;
    z-index: 0;
    top: 10%;
    left: 10%;
    width: 6rem;
  }

  .UiMainGold:nth-child(7) {
    position: absolute;
    z-index: 0;
    top: 10%;
    left: 80%;
    width: 5rem;
  }

  .UiMainGold:nth-child(8) {
    position: absolute;
    z-index: 0;
    top: 60%;
    left: 40%;
    width: 4rem;
  }

  .UiMainGold {
    user-select: none;
    opacity: 0.1;

    &:hover {
      opacity: 0.5;
    }

    &:active {
      opacity: 1;
    }
  }

  .UiMainLogo {
    z-index: 10;
    margin: 0 auto;
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
    z-index: 10;
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
    z-index: 10;
    margin: 0 auto;
    margin-top: 1rem;
    max-width: 500px;
    width: 100%;
  }

  .UiMainButtons {
    z-index: 10;
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
