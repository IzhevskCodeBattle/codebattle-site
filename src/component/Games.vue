<!-- содержимое секции компонента. -->
<template>
  <section id="games">
    <h2 class="toolbar">Games</h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap >
        <v-flex class='xs12 sm4 md3 lg2' v-for="card in cards" :key="card.title">
          <v-card :to="{ name: 'game', params: { id: card.id }}" hover tile>
            <v-card-media :src="card.src" :height="imageHeight" contain/>
            <v-card-title primary-title>
              {{card.title}}
              <v-layout d-inline style="text-align: right">by {{card.author}}</v-layout>
            </v-card-title>
            <v-card-text class="title_all">
              {{card.title_all}}
            </v-card-text>
            <v-card-actions>
              <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
              <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
              <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
              <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
              <v-btn icon small class="small"><v-icon>star_border</v-icon></v-btn>
              <v-spacer></v-spacer>
              <v-btn icon small><v-icon>favorite</v-icon></v-btn>
              <v-btn icon small class="margin-left"><v-icon>bookmark</v-icon></v-btn>
              <v-btn icon small class="margin-left"><v-icon>share</v-icon></v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </section>
</template>

<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  data: () => ({
    cards: [
      { id: 1,
        title: 'Название игры №1',
        src: '/static/img/games/2048.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 2,
        title: 'Название игры №2',
        src: '/static/img/games/battle-city.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 3,
        title: 'Название игры №3',
        src: '/static/img/games/bomberman.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 4,
        title: 'Название игры №4',
        src: '/static/img/games/collapse.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 5,
        title: 'Название игры №5',
        src: '/static/img/games/fifthteen.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 6,
        title: 'Название игры №6',
        src: '/static/img/games/hex.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 7,
        title: 'Название игры №6',
        src: '/static/img/games/kubik.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 8,
        title: 'Название игры №6',
        src: '/static/img/games/loderunner.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 9,
        title: 'Название игры №6',
        src: '/static/img/games/minesweeper.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 10,
        title: 'Название игры №6',
        src: '/static/img/games/moebius.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 11,
        title: 'Название игры №6',
        src: '/static/img/games/puzzlebox.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 12,
        title: 'Название игры №6',
        src: '/static/img/games/quake2d.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 13,
        title: 'Название игры №6',
        src: '/static/img/games/reversi.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 14,
        title: 'Название игры №6',
        src: '/static/img/games/snake.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 15,
        title: 'Название игры №6',
        src: '/static/img/games/snakebattle.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 17,
        title: 'Название игры №6',
        src: '/static/img/games/spacerace.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      },
      { id: 18,
        title: 'Название игры №6',
        src: '/static/img/games/sudoku.png',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...',
        author: 'Cool Man'
      }
    ]
  }),
  computed: {
    imageHeight () {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs': return '300px'
        case 'sm': return '300px'
        case 'md': return '300px'
        case 'lg': return '300px'
        case 'xl': return '300px'
      }
    }
  }
}
</script>



<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  #games{
    padding-top: 45px;
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
    font-size: 1em;
  }
  .v-card__actions .v-btn  + .v-btn {
    margin-left: 0px;
  }
  .margin-left {
    margin-left: 8px!important;
  }

  .v-btn__content .v-icon {
    font-size: 1.4em;
  }

</style>