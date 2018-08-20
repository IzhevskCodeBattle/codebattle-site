<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title style="text-align: center; width: 100%">{{name}}</v-toolbar-title>
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
      <img src="/static/img/games/games1.jpg" alt="Лого мероприятия" width="60%" height="auto">
    </p>
    <v-layout row wrap px-5 >
      <v-flex xs12 sm12 md6 lg6 >
        <v-card-text class="t_d">Зарегистрировано участников: {{participants}} <v-icon>supervisor_account</v-icon></v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <v-card-text class="t_d">Начало мероприятия: {{time}} мск</v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <v-card-text class="t_d">Дата: {{date}}</v-card-text>
      </v-flex>
    </v-layout>
    <v-layout px-5 row wrap>
      <v-flex xs12 sm12 md6 lg6>
        <h2 style="text-align: justify; padding-right: 40px;">{{title}}</h2>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <iframe :src="src_map"  width="583,5" height="400" frameborder="0"></iframe>
        <v-card-text>Место проведения: {{place}}</v-card-text>
        <v-card-text>Как добраться: {{path}}</v-card-text>
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
  },
  data: () => ({
    name: 'Название выбранного мероприятия',
    participants: 150,
    time: '18:00',
    date: '28.09.2018',
    src_map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A73a75598b91562c938133301f346c3409cc05c02e4db46d579a70b3c2713e3e7&amp;source=constructor',
    place: 'г.Ижевск, ТЦ Европа',
    path: 'Два поворота направо и три поворота налево, бла бла бла бла бла бла бла',
    title: 'Условия, в которых требуется реализовать интеграцию в рамках единой системы разнородных интегрирующих средств, достаточно распространены в современном информационном мире.Как правило, в качестве интеграционных объектов выступают корпоративные информационные ландшафты, в которых применяются различные покупные и коробочные системы. Для подобных ситуаций залогом успеха является использование единой и унифицированной понятийной модели, представляющей собой базу метаданных, хранящую описания бизнес-объектов каждого из компонентов и отношения между этими объектами.'
  })
}
</script>

<style scoped>
    .t_d{
        margin: 0;
        padding-bottom: 30px;
        text-align: left;
        font-size: 1.2em;
        font-weight: bolder;
    }
</style>

