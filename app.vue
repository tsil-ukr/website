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
      <UiCodeBlock :code="`ціль україна = Атлантида{};`"/>
    </div>
    <div class="UiMainButtons">
      <button class="UiMainButton">Завантажити</button>
      <button class="UiMainButton outline">Документація</button>
    </div>
  </div>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fira+Code:wght@300;400;500;600;700&display=swap');

html, body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background: #fff6e0;
  font-family: 'Overpass', sans-serif;
  color: #1D1315;
  overflow: hidden;
}

button {
  font-family: 'Overpass', sans-serif;
}

#__nuxt {
  height: 100%;
}

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

      &:hover {
        background: #1D1315;
        color: white;
        border: 4px solid #1D1315;
        cursor: pointer;
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