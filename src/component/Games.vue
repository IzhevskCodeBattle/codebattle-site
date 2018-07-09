<!-- содержимое секции компонента. -->
<template>
  <section class="games">
    <v-layout column>
      <v-flex xs12 sm6>
        <v-flex>
          <h2>Games</h2>
        </v-flex>

        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex
                v-for="card in cards"
                v-bind="{ [`xs12 sm6 md4 lg4 `]: true }"
                :key="card.title"
              >
                <v-card>
                  <v-card-media
                    :src="card.src"
                    height="250px"
                  ></v-card-media>
                    <v-container fill-height>
                      <v-layout>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline cards" v-text="card.title"></span>
                          <v-card-title primary-title>
                            <div v-text="card.title_all" class="title_all"></div>
                          </v-card-title>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <!-- <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>share</v-icon>
                    </v-btn> -->
                  </v-card-actions>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
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
  .toolbar{
    background:#76cdd8;
    margin: 0;
  }
  h2{
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  }
  .card{
    text-align: center;
    font: bold;
  }
  .title_all{
    text-align: justify;
    font-size: 1.3em;
  }
</style>