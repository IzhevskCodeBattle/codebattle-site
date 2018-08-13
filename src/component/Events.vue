<!-- содержимое секции компонента. -->
<template>
  <section id="Events">
    <h2 class="toolbar">Events</h2>
    <v-container fluid grid-list-md>
      <v-layout row wrap >
        <v-flex class='xs12 sm4 md3 lg2' v-for="event in events" :key="event.id">
          <v-card :to="{ name: 'event', params: { id: event.id }}" hover tile>
            <v-card-media :src="event.src" :height="imageHeight" style="opacity:0.4"/>
            <div text-xs-center fill-height style="position:absolute; top:0;">
              <v-card-text class="event_name">{{event.name}}</v-card-text>
              <v-card-text style="text-align: right">{{event.date}} {{event.time}}</v-card-text>
              <v-card-text class="description">{{event.description}}</v-card-text>
            </div>
            <v-card-actions>
              {{event.members}}<v-btn icon small><v-icon>supervisor_account</v-icon></v-btn>
              <v-spacer/>
              {{event.period}} <v-btn icon small><v-icon>timelapse</v-icon></v-btn>
              <v-spacer/>
              {{event.status}} <v-btn icon small><v-icon>beenhere</v-icon></v-btn>
            </v-card-actions>
            <v-card-actions>
              <v-spacer/>
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
    events: [
      { id: 1,
        name: 'Мероприятие №1',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 2,
        name: 'Мероприятие №2',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 3,
        name: 'Мероприятие №3',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 4,
        name: 'Мероприятие №4',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 11,
        name: 'Мероприятие №1',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 12,
        name: 'Мероприятие №2',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 13,
        name: 'Мероприятие №3',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 14,
        name: 'Мероприятие №4',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 21,
        name: 'Мероприятие №1',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 22,
        name: 'Мероприятие №2',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 23,
        name: 'Мероприятие №3',
        status: 'Online',
        src: '/static/img/events/event1.jpg',
        time: '16:00',
        date: '15.02.18',
        period: '2 дня',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
      },
      { id: 24,
        name: 'Мероприятие №4',
        status: 'Offline',
        src: '/static/img/events/event2.jpg',
        time: '18:00',
        date: '15.02.18',
        period: '3 часа',
        members: 15,
        description: 'Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...Located two hours south of Sydney in the Southern Highlands of New South Wales, ...'
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
  .v-btn__content .v-icon {
    font-size: 1.5em;
  }
  .events {
    padding-top: 25px;
    padding-bottom: 50px;
    font-family: source sans pro;
  }
  h2 {
    text-align: center;
    font-size: 3em;
    padding-bottom: 15px;
  } 
  .event_name{
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1.4em;
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
    font-size: 1.4em;
  }
</style>