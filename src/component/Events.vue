<!-- содержимое секции компонента. -->
<template>
  <section class="events">
    <a name="events"/>
      <h2 class="toolbar">Events</h2>
      <v-layout row wrap>
        <v-flex class='xs12 sm6 md4 lg4' v-for="event in events" :key="event.id">
          <v-card :to="{ name: 'event', params: { id: event.id }}">
            <v-card-media height="250px" style="opacity:0.4" :src="event.src">
            </v-card-media>

            <v-container grid-list-md text-xs-center fill-height style="position:absolute; top:0; height:250px">
              <v-layout row wrap> 
                  <v-flex class='xs12 sm12 md12 lg12'>
                    <v-card-text class="event_name">{{event.name}}</v-card-text>
                  </v-flex>
                  <v-flex xs6 sm6 md6 lg6>
                      <v-card-text class="t_d">{{event.time}}</v-card-text>
                  </v-flex>
                  <v-flex xs6 sm6 md6 lg6>
                      <v-card-text class="t_d">{{event.date}}</v-card-text>
                  </v-flex>
                  <v-flex xs12 sm12 md12 lg12>
                    <v-card-text class="description">{{event.description}}</v-card-text>
                  </v-flex>
              </v-layout>
            </v-container>
            <v-layout row>
                <v-flex class='xs6 sm6 md6 lg6'>
                  <v-card-text class="ev_info_left">15 <v-icon>supervisor_account</v-icon> </v-card-text>
                </v-flex>
                <v-flex class='xs6 sm6 md6 lg6'>
                  <v-card-text class="ev_info_left">{{event.period}} <v-icon>timelapse</v-icon> </v-card-text>
                </v-flex>
                <v-flex class='xs12 sm12 md12 lg12'>
                  <v-card-text class="ev_info_right">{{event.status}} <v-icon>beenhere</v-icon> </v-card-text>
                </v-flex>
            </v-layout>
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
        name: 'Мероприятие №1',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 2,
        name: 'Мероприятие №2',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 3,
        name: 'Мероприятие №3',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 4,
        name: 'Мероприятие №4',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      }
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
    font-family: source sans pro;
  }
  h2{
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  } 
  .event_name{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2em;
    font-weight: bolder;
  }
  .t_d{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1.5em;
    font-weight: bolder;
  }
  .description{
    margin: 0;
    padding: 0;
    position: relative;
    text-align: justify;
    font-size: 1em;
  }
  .ev_info_left{
    text-align: left;
    font-size: 1.2em;
  }
  .ev_info_right{
    text-align: right;
    font-size: 1.2em;
  }
</style>