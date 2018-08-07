<template>
  <v-content>
    <h1>Title</h1>
    <h2>Description</h2>
    <game-gallery/>
    <v-divider/>
    <h2>Players</h2>
    <game-players/>
    <v-divider/>
    <h2>Events</h2>
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
