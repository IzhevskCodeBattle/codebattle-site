<template>
  <v-content>
    <v-toolbar dense>
      <v-toolbar-title style="text-align: center; width: 100%">Название игры</v-toolbar-title>
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
    <v-layout py-5 px-5 justify-center>
      <h2>Условия, в которых требуется реализовать интеграцию в рамках единой системы разнородных интегрирующих средств, достаточно распространены в современном информационном мире.Как правило, в качестве интеграционных объектов выступают корпоративные информационные ландшафты, в которых применяются различные покупные и коробочные системы. Для подобных ситуаций залогом успеха является использование единой и унифицированной понятийной модели, представляющей собой базу метаданных, хранящую описания бизнес-объектов каждого из компонентов и отношения между этими объектами.</h2>
    </v-layout>
    <game-gallery/>
    <v-divider/>
    <v-layout py-3 elevation-24 text-xs-center justify-center>
      <h1>Top 10 участников</h1>
    </v-layout>
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
  }
}
</script>
