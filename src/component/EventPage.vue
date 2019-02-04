<template>
   <v-layout row>
    <v-flex xs12 sm6 md6 lg6 xl6>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>Запланированные сессии</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in events">
            <v-list-tile :key="item.title" avatar ripple @click="toggleEvents(index)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.action }}</v-list-tile-action-text>
                <v-icon v-if="selectedEvents.indexOf(index) < 0" color="grey lighten-1">
                  star_border
                </v-icon>
                <v-icon v-else color="yellow darken-2">
                  star
                </v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < events.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>

    </v-flex>
    <v-flex xs12 sm6 md6 lg6 xl6>
      <v-card>
        <v-toolbar color="pink" dark>
          <v-toolbar-title>Участники</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-list two-line>
          <template v-for="(item, index) in members">
            <v-list-tile :key="item.title" avatar ripple @click="toggleMembers(index)">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                <v-list-tile-sub-title class="text--primary">{{ item.headline }}</v-list-tile-sub-title>
                <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
              </v-list-tile-content>
              <v-list-tile-action>
                <v-list-tile-action-text>{{ item.expirience }}</v-list-tile-action-text>
                <v-icon v-if="selectedMembers.indexOf(index) < 0" color="grey lighten-1">
                  star_border
                </v-icon>
                <v-icon v-else color="yellow darken-2">
                  star
                </v-icon>
              </v-list-tile-action>
            </v-list-tile>
            <v-divider
              v-if="index + 1 < members.length"
              :key="index"
            ></v-divider>
          </template>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'EventPage',
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    toggleEvents (index) {
      const i = this.selectedEvents.indexOf(index)

      if (i > -1) {
        this.selectedEvents.splice(i, 1)
      } else {
        this.selectedEvents.push(index)
      }
    },
    toggleMembers (index) {
      const i = this.selectedMembers.indexOf(index)

      if (i > -1) {
        this.selectedMembers.splice(i, 1)
      } else {
        this.selectedMembers.push(index)
      }
    }
  },
  data: () => ({
    selectedEvents: [2],
    selectedMembers: [2],
    events: [
      {
        action: '4 hr',
        headline: '10:00-14:00',
        title: 'Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        action: '4 hr',
        headline: 'Summer BBQ',
        title: 'me, Scrott, Jennifer',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        action: '4 hr',
        headline: 'Oui oui',
        title: 'Sandra Adams',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        action: '4 hr',
        headline: 'Birthday gift',
        title: 'Trevor Hansen',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        action: '4 hr',
        headline: 'Recipe to try',
        title: 'Britta Holt',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ],
    members: [
      {
        expirience: 1,
        headline: 'Team: Ali Connors',
        title: 'Team: Ali Connors',
        subtitle: "I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
      },
      {
        expirience: 34,
        headline: 'Team: Summer BBQ',
        title: 'Team: Summer BBQ',
        subtitle: "Wish I could come, but I'm out of town this weekend."
      },
      {
        expirience: 100,
        headline: 'Team: Oui oui',
        title: 'Team: Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?'
      },
      {
        expirience: 10,
        headline: 'Team: Birthday gift',
        title: 'Team: Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?'
      },
      {
        expirience: 500,
        headline: 'Team: Recipe to try',
        title: 'Team: Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.'
      }
    ]
  })
}
</script>

