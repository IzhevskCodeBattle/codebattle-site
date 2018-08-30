<template>
  <v-content>
    <a name="content"></a>
    <img class="event-image" src=../../static/img/events/event1.jpg alt='Картинка мероприятия'>
    <div class="event-registration">
      <img class="event-registration__logo" src=../../static/img/EPAM_LOGO.png alt="epam_logo">
      <div class="event-registration__name">Название</div>
    </div>
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
    currentEvent: {},
    registrationLink: ''
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

  .event-image {
      position: relative;
      width: 100%;
      height: 40%;
      display: flex;
      margin: 0 auto;
      opacity: .5;
    }


</style>
