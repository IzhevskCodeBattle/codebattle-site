<template>
  <v-content>
    <a name="content"></a>
    <v-layout style="margin-top: 25px; margin-bottom: 25px;">
      <v-flex xs12 sm4 md3 lg2>
        <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
        <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
        <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
        <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
        <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
      </v-flex>
      <v-flex xs12 sm4 md6 lg8 >
        <p class="game_name">{{name}}</p>
      </v-flex>
      <v-flex xs12 sm4 md3 lg2 style="text-align: right;">
        <v-btn icon>
          <v-icon>favorite</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>bookmark</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>share</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout py-3 px-5 justify-center>
      <h1>Сервер для тренировки: <a :href='link'>http://codenjoy.juja.com.ua/codenjoy-contest/</a></h1>
    </v-layout>
    <v-layout py-3 px-5 justify-center>
      <p class="description">{{description}}</p>
    </v-layout>
    <game-gallery/>
    <v-divider/>
    <h2>Top 10 участников</h2>
    <game-players/>
    <v-divider/>
    <game-events/>
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
    name: 'Название игры',
    link: 'http://codenjoy.juja.com.ua/codenjoy-contest/',
    description: 'Воля по природе своей до такой степени свободна, что ее никогда нельзя принудить. Из двух видов мыслей, которые я различал в душе, одни являются действиями воли, другие же - страстями в широком смысле слова, включая все виды восприятий. Первые полностью зависят от воли и только косвенно могут быть изменены под влиянием тела; последние, наоборот, зависят исключительно от действий, их порождающих, и только косвенно могут быть изменены душой, за исключением тех случаев, когда она сама является их причиной. Всякое действие души заключается в том, что она, желая чего-нибудь, тем самым заставляет маленькую железу, с которой она тесно связана, двигаться так, как это необходимо для того, чтобы вызвать действие, соответствующее этому желанию.'
  })
}
</script>




<style scoped>
  .v-toolbar__content .v-btn--icon, .v-toolbar__extension .v-btn--icon {
    margin: 0.1vw;
    font-size: 1.4vw;
  }

  .game_name{
    text-align: center; 
    width: 100%;
    font-size: 3em;
  }

  .description{
    text-align: justify; 
    padding-right: 40px;
    font-size: 1.5em;
  }

  h2{
    text-align: center;
    font-size: 3em;
    margin-bottom: 25px;
    background-color: rgba(235, 235, 235);
    margin-top: 50px; 
    margin-bottom: 25px;
  }

</style>
