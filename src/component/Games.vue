<!-- содержимое секции компонента. -->
<template>
  <section class="games">
    <v-layout column>
      <h2 class="toolbar">Games</h2>
      <v-layout row wrap>
        <v-flex class='xs12 sm6 md4 lg4' v-for="card in cards" :key="card.title">
          <v-card>
            <img :src="card.src"/>
            <v-card-title primary-title class="headline cards">{{card.title}}</v-card-title>
            <v-card-text class="title_all">
              {{card.title_all}}
            </v-card-text>
            <v-card-actions>
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
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-layout>
  </section>
</template>

<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  data: () => ({
    cards: [
      { title: 'Название игры №1',
        src: '/static/img/games/games1.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { title: 'Название игры №2',
        src: '/static/img/games/games2.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { title: 'Название игры №3',
        src: '/static/img/games/games1.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { title: 'Название игры №4',
        src: '/static/img/games/games2.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { title: 'Название игры №5',
        src: '/static/img/games/games1.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { title: 'Название игры №6',
        src: '/static/img/games/games2.jpg',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      }
    ]
  })
}
</script>



<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .games{
    padding-top: 25px;
    padding-bottom: 50px;
  }
  h2{
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  }
  .card{
    overflow: hidden;
    margin: 2px;
  }
  .title_all{
    text-align: justify;
    font-size: 1.3em;
  }
</style>