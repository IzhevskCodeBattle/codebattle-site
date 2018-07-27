<!-- содержимое секции компонента. -->
<template>
  <section class="events">
    <a name="events"/>
      <h2 class="toolbar">Events</h2>
      <v-layout row wrap>
        <v-flex class='xs12 sm6 md4 lg4' v-for="event in events" :key="event.name">
          <v-card :to="{ name: 'event', params: { id: event.id }}">
            <v-card-media height="250px" :src="event.src">
              <v-container fill-height>
                <v-layout>
                  <v-flex class='xs12 sm12 md12 lg12'>
                    <span class="headline cards">{{event.name}}</span><br>
                    <span class="autor">{{event.autor}}</span>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-card-media>
            <v-card-text class="title_all">
              {{event.title_all}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>favorite</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>share</v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
  </section>
</template>

<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  data: () => ({
    events: [
      { id: 1,
        name: 'Название игры №1',
        src: '/static/img/events/event1.jpg',
        autor: 'Автор: Имя фамилия',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 2,
        name: 'Название игры №2',
        src: '/static/img/events/event2.jpg',
        autor: 'Автор: Имя фамилия',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 3,
        name: 'Название игры №3',
        src: '/static/img/events/event1.jpg',
        autor: 'Автор: Имя фамилия',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 4,
        name: 'Название игры №4',
        src: '/static/img/events/event2.jpg',
        autor: 'Автор: Имя фамилия',
        title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      }
      // { id: 5,
      //   name: 'Название игры №5',
      //   src: '/static/img/events/event1.jpg',
      //   autor: 'Автор: Имя фамилия',
      //   title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      // },
      // { id: 6,
      //   name: 'Название игры №6',
      //   src: '/static/img/events/event2.jpg',
      //   autor: 'Автор: Имя фамилия',
      //   title_all: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      // }
    ]
  })
}
</script>



<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  img{
    width: 100%;
    height: 100%;
  } 
  .events{
    padding-top: 25px;
    padding-bottom: 50px;
  }
  h2{
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  }
  .card{
    /* position: relative; */
    /* overflow: hidden; */
    margin: 2px;
  }  
  .cards{
    /* position: relative; */
    text-align: center;
  }
  .autor{
    text-align: right;
  }
  .title_all{
    position: relative;
    text-align: justify;
    font-size: 1.3em;
  }
</style>