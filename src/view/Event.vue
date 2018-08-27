<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title style='text-align: center; width: 100%'>{{ currentEvent.name }}</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </v-toolbar>
    <p style='text-align: center; padding-top: 40px;'>
        <img v-bind:src="currentEvent.poster_image.default_url" alt='Картинка мероприятия' width='60%' height='auto'>
    </p>
    <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6></v-flex>
        <v-flex xs12 sm6 md3 lg3>
            <v-card-text class='t_d'>Начало мероприятия: {{ currentEvent.starts_at }} мск</v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 lg3>
            <v-card-text class='t_d'>Дата: 15.02.2018</v-card-text>
            <button class='reg-button v-btn' id='twf' data-twf-target-state='{"event_id": 795011}'>Регистрация</button>
        </v-flex>
     </v-layout>
    <v-layout px-5 row wrap>
        <v-flex xs12 sm12 md6 lg6>
      <h2 style='text-align: justify; padding-right: 40px;'>{{ currentEvent.description_short }}</h2>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
    <iframe src='https://yandex.ru/map-widget/v1/?um=constructor%3A73a75598b91562c938133301f346c3409cc05c02e4db46d579a70b3c2713e3e7&amp;source=constructor' width='500' height='400' frameborder='0'></iframe>
    </v-flex>
    </v-layout>
    <!-- <EventPage/> -->
  </v-content>
</template>
<script>

import EventPage from '@/component/EventPage'
import timePadService from '@/service/timePadService'

export default {
  data: () => ({
    currentEvent: {}
  }),
  name: 'Event',
  components: {
    EventPage
  },
  created () {
    timePadService.getEventById(this.$route.params.id).then(res => { this.currentEvent = res }).then(() => console.log(this.currentEvent))
  }
}
</script>

<style scoped>
    .t_d{
        margin: 0;
        padding-bottom: 30px;
        text-align: left;
        font-size: 1.3em;
        font-weight: bolder;
    }
    .reg-button {
      text-align: center;
    }

</style>

