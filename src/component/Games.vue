<!-- содержимое секции компонента. -->
<template>
  <section class="games">
    <v-layout column>
      <v-flex xs12 sm6>
        <v-toolbar>
          <v-toolbar-title class="games_title">Games</v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-container
            fluid
            grid-list-md
          >
            <v-layout row wrap>
              <v-flex
                v-for="card in cards"
                v-bind="{ [`xs${card.flex}`]: true }"
                :key="card.title"
              >
                <v-card>
                  <v-card-media
                    :src="card.src"
                    height="300px"
                  >
                    <v-container
                      fill-height
                      fluid
                      pa-2
                    >
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline cards" v-text="card.title"></span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-card-media>

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
      { title: 'Игра №1', src: '/static/img/games/games1.jpg', flex: 4 },
      { title: 'Игра №2', src: '/static/img/games/games2.jpg', flex: 4 },
      { title: 'Игра №3', src: '/static/img/games/games1.jpg', flex: 4 },
      { title: 'Игра №4', src: '/static/img/games/games2.jpg', flex: 4 },
      { title: 'Игра №5', src: '/static/img/games/games1.jpg', flex: 4 },
      { title: 'Игра №6', src: '/static/img/games/games2.jpg', flex: 4 }
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
  .games_title{
    text-align: center;
  }
  .card{
    text-align: center;
    font: bold;
  }
  .cards{
    /* opacity: 0.8; */
    
  }
</style>