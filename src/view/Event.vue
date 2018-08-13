<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title style="text-align: center; width: 100%">Название мероприятия</v-toolbar-title>
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
    <p style="text-align: center; padding-top: 40px;">
        <img src="/static/img/games/games1.jpg" alt="Картинка мероприятия" width="60%" height="auto">
    </p>
    <v-layout row wrap>
        <v-flex xs12 sm12 md6 lg6></v-flex>
        <v-flex xs12 sm6 md3 lg3>
            <v-card-text class="t_d">Начало мероприятия: 15:00 мск</v-card-text>
        </v-flex>
        <v-flex xs12 sm6 md3 lg3>
            <v-card-text class="t_d">Дата: 15.02.2018</v-card-text>
        </v-flex>
    </v-layout>
    <v-layout px-5 row wrap>
        <v-flex xs12 sm12 md6 lg6>
      <h2 style="text-align: justify; padding-right: 40px;">Условия, в которых требуется реализовать интеграцию в рамках единой системы разнородных интегрирующих средств, достаточно распространены в современном информационном мире.Как правило, в качестве интеграционных объектов выступают корпоративные информационные ландшафты, в которых применяются различные покупные и коробочные системы. Для подобных ситуаций залогом успеха является использование единой и унифицированной понятийной модели, представляющей собой базу метаданных, хранящую описания бизнес-объектов каждого из компонентов и отношения между этими объектами.</h2>
        </v-flex>
        <v-flex xs12 sm12 md6 lg6>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A73a75598b91562c938133301f346c3409cc05c02e4db46d579a70b3c2713e3e7&amp;source=constructor" width="500" height="400" frameborder="0"></iframe>
    </v-flex>
    </v-layout>
    <!-- <EventPage/> -->
  </v-content>
</template>
<script>
import EventPage from '@/component/EventPage'
export default {
  name: 'Event',
  components: {
    EventPage
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
</style>

