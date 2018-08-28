<template>
  <v-content>
    <!-- <v-toolbar dense > -->
      <v-toolbar-title style="font-size: 2em; margin-top: 40px; text-align: center; width: 100%;">{{name}}</v-toolbar-title>
      <!-- <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
    </v-toolbar> -->
    <p style="text-align: center; margin-top: 40px; margin-bottom: 0px;">
      <img :src="src" alt="Лого мероприятия" width="100%" height="500px">
    </p>
    <v-layout row wrap class="first_info">
      <!-- <v-flex xs12 sm12 md6 lg6 >
        <v-card-text class="t_d">Зарегистрировано участников: {{participants}} <v-icon>supervisor_account</v-icon></v-card-text>
      </v-flex> -->
      <v-flex xs12 sm6 md2 lg2>
        <v-card-text>Дата:<br> {{date}}</v-card-text>
      </v-flex>
      <v-flex xs12 sm6 md2 lg2>
        <v-card-text>Начало мероприятия: {{time}} мск</v-card-text>
      </v-flex>
      <v-flex xs12 sm12 md2 lg2>
        <v-card-text><a :href='link_game'><p class="link_game">Посмотреть игру</p></a></v-card-text>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <v-card-text>Место проведения:<br>{{place}}</v-card-text>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="second_info">
      <v-flex xs12 sm12 md6 lg6>
        <p class="description">{{title}}</p>
      </v-flex>
      <v-flex xs12 sm12 md6 lg6>
        <iframe :src="src_map"  width=100% height="400" frameborder="0"></iframe>
        <p class="link_reg">
          <v-btn color='green darken-2' dark :href="link_reg" style="width: 70%;"> Зарегистрироваться </v-btn>
        </p>
      </v-flex>
    </v-layout>
    <EventSponsors/>
  </v-content>
</template>
<script>
import EventSponsors from '@/component/EventSponsors'
export default {
  name: 'Event',
  components: {
    EventSponsors
  },
  data: () => ({
    src: '/static/img/games/games1.jpg',
    name: 'Название выбранного мероприятия',
    // participants: 150,
    time: '18:00',
    date: '28.09.2018',
    src_map: 'https://yandex.ru/map-widget/v1/?um=constructor%3A73a75598b91562c938133301f346c3409cc05c02e4db46d579a70b3c2713e3e7&amp;source=constructor',
    place: 'г.Ижевск, ТЦ Европа',
    title: 'Условия, в которых требуется реализовать интеграцию в рамках единой системы разнородных интегрирующих средств, достаточно распространены в современном информационном мире.Как правило, в качестве интеграционных объектов выступают корпоративные информационные ландшафты, в которых применяются различные покупные и коробочные системы. Для подобных ситуаций залогом успеха является использование единой и унифицированной понятийной модели, представляющей собой базу метаданных, хранящую описания бизнес-объектов каждого из компонентов и отношения между этими объектами.',
    link_game: 'http://localhost:8080/game/2',
    link_reg: 'https://welcome.timepad.ru'
  })
}
</script>

<style scoped>
    .first_info{
       font-size: 1.2em;
       margin: 0;
       margin-bottom: 30px;
       text-align: center;
       font-weight: bolder;
       background-color: rgba(235, 235, 235);
    }

    .link_game{
      padding-top: 13px;
    }

    .link_reg{
      margin-top: 50px;
      text-align: center;
    }

    .second_info{
      margin-left: 25px;
      margin-right: 25px;
      margin-bottom: 50px;
    }
    .description{
      text-align: justify; 
      padding-right: 40px;
      font-size: 1.5em;
    }

</style>

