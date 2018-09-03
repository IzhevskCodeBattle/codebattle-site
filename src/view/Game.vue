<template>
  <v-content>
    <a name="content"></a>
    <img class="game-image" :src="img" alt='Картинка мероприятия' width='60%' height='auto'>
    <div class="game">
      <img class="game__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="game__name">{{ name }}</div>
    </div>
    <div class="game-main__description">
      <i>{{ description }}</i>
    </div>

    <!-- <game-gallery/>
    <v-divider/>
    <h2>Top 10 участников</h2>
    <game-players/>
    <v-divider/>
    <game-events/> -->
  </v-content>
</template>
<script>
import GamePlayers from '@/component/GamePlayers'
import GameEvents from '@/component/GameEvents'
import GameGallery from '@/component/GameGallery'
export default {
  name: 'Game',
  components: {
    GamePlayers,
    GameEvents,
    GameGallery
  },
  data: () => ({
    name: 'Танчики',
    img: '/static/img/games/fon.jpg',
    description: 'Воля по природе своей до такой степени свободна, что ее никогда нельзя принудить. Из двух видов мыслей, которые я различал в душе, одни являются действиями воли, другие же - страстями в широком смысле слова, включая все виды восприятий. Первые полностью зависят от воли и только косвенно могут быть изменены под влиянием тела; последние, наоборот, зависят исключительно от действий, их порождающих, и только косвенно могут быть изменены душой, за исключением тех случаев, когда она сама является их причиной. Всякое действие души заключается в том, что она, желая чего-нибудь, тем самым заставляет маленькую железу, с которой она тесно связана, двигаться так, как это необходимо для того, чтобы вызвать действие, соответствующее этому желанию.'
  }),
  created () {
    window.scrollTo(0, 0)
  }
}
</script>




<style scoped>
    @font-face {
      font-family: SourceSansPro;
      src: url(../../static/fonts/SourceSansPro-BoldIt.otf);
    }
    @font-face {
      font-family: SourceSansPro-lt;
      src: url(../../static/fonts/SourceSansPro-It.otf);
    }
    .game{
      position: absolute;
      top: 8%;
      left: 5%;
    }
    .game__name {
      display: flex;
      align-items: center;
      justify-content: space-around;
      font-size: 4em;
      font-weight: bold;
      text-align: center;
      color: #464547;
    }
    .game__logo {
      width: 50%;
      height: 10%;
    }
    .game-image {
      position: relative;
      width: 100%;
      height: 40%;
      display: flex;
      margin: 0 auto;
      opacity: .5;
    }
    .event-main {
      display: flex;
      align-items: top;
      justify-content: center;
      width: 70%;
      margin: 0 auto;
      margin-bottom: 10%;
    }
    .game-main__description {
      display: flex;
      align-items: top;
      justify-content: center;
      text-align: justify;
      margin: 0 auto;
      margin-top: 5%;
      margin-bottom: 5%;
      width: 70%;
      font-size: 1.6em;
      font-family: 'Play', sans-serif;
      font-weight: bold;
      color: #464547;
    }
    .event-main__description::before {
      content: '"';
    }
    .event-main__description::after {
      content: '"';
    }
    .event-main__map-wrapper {
      width: 40%;
      height: 300px;
    }
</style>
