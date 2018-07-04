<!-- содержимое секции компонента. -->
<template>
  <section class="games">
    <v-layout column :class="{fixedNav: isFixed}" row>
      <v-flex xs12 sm6>
        <v-toolbar class="games_title">
          <v-toolbar-title>  Games  </v-toolbar-title>
        </v-toolbar>

        <v-card>
          <v-container
            fluid
            grid-list-md
            class="scroll-y" id="scroll-target"
          >
            <v-layout row wrap class="content" v-scroll:#scroll-target="onScroll">
              <v-flex
                v-for="card in cards"
                v-bind="{ [`xs${card.flex}`]: true }"
                :key="card.title"
              >
                <v-card>
                  <v-card-media
                    :src="card.src"
                    height="250px"
                  ></v-card-media>
                    <v-container
                      fill-height
                      fluid
                      pa-2
                      
                    >
                      <v-layout>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline cards" v-text="card.title"></span>
                          <!-- <v-card-title primary-title>
                            <div v-text="card.title_all" class="title_all"></div>
                          </v-card-title> -->
                          <v-slide-y-transition>
                            <v-card-text v-show="show" v-text="card.title_all" class="title_all">
                            </v-card-text>
                          </v-slide-y-transition>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn icon>
                      <v-icon>favorite</v-icon>
                    </v-btn>
                    <v-btn icon>
                      <v-icon>bookmark</v-icon>
                    </v-btn>
                    <v-btn icon @click="show = !show">
                      <v-icon>{{ show ? 'keyboard_arrow_up' : 'keyboard_arrow_down' }}</v-icon>
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
    show: false,
    cards: [
      { title: 'Название игры №1', src: '/static/img/games/games1.jpg', flex: 4, title_all: 'Описание 1... ' },
      { title: 'Игра №2', src: '/static/img/games/games2.jpg', flex: 4, title_all: 'Описание 2... ' },
      { title: 'Игра №3', src: '/static/img/games/games1.jpg', flex: 4, title_all: 'Описание 3... ' },
      { title: 'Игра №4', src: '/static/img/games/games2.jpg', flex: 4, title_all: 'Описание 4... ' },
      { title: 'Игра №5', src: '/static/img/games/games1.jpg', flex: 4, title_all: 'Описание 5... ' },
      { title: 'Игра №6', src: '/static/img/games/games2.jpg', flex: 4, title_all: 'Описание 6... ' },
      { title: 'Игра №7', src: '/static/img/games/games1.jpg', flex: 4, title_all: 'Описание 7... ' },
      { title: 'Игра №8', src: '/static/img/games/games2.jpg', flex: 4, title_all: 'Описание 8... ' },
      { title: 'Игра №9', src: '/static/img/games/games1.jpg', flex: 4, title_all: 'Описание 9... ' }
    ],
    methods: {
      onScroll (e) {
        this.isFixed = e.target.scrollTop
      }
    }
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
    color: white;
  }
  .content {
	height: auto;
}
  .card{
    text-align: center;
    font: bold;
  }
  .title_all{
    text-align: justify;
    font-size: 1.3em;
  }

.scroll-y {
	max-height: 720px;
}

#scroll-target .toolbar {
	box-shadow: none;
	background-color: transparent;
}

#scroll-target .fixedNav {
	position: fixed;
	width: 80%;
	left: 50%;
	transform: translate(-50%, 0);
	background-color: rgba(0,0,0, .2);
}

#scroll-target .fixedNav .toolbar {
	box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
}

#scroll-target .fixedNav .toolbar .toolbar__content {
	height: auto !important;
}
</style>