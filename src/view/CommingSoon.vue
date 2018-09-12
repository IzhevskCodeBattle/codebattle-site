<template>
  <v-layout ref="screen">
    <div id="about" class="anchor"></div>
    <div id="events" class="anchor"></div>
    <div id="games" class="anchor"></div>
    <div id="partners" class="anchor"></div>
    <div id="help" class="anchor"></div>
    <div id="contacts" class="anchor"></div>
    <video class="video" ref="video" muted loop autoplay preload="auto">
      <source src="/static/media/codebattle.webm" type="video/webm">
    </video>
    <v-card flat class="countdown" style="background-color: transparent">
      <v-card-media style="right:18%">
        <countdown end="September 29, 2018"/>
      </v-card-media>
      <v-card-text>
      </v-card-text>
      <v-card-actions>
        <v-btn large href="https://epa.ms/CBstudents2">Принять участие</v-btn>
      </v-card-actions>
    </v-card>
  </v-layout>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'Home',
  components: {
    Countdown
  },
  mounted: function () {
    // this.refs.screen.width = window.width
    this.$refs.screen.style.height = window.innerHeight + 'px'
    this.$refs.screen.style.height = window.innerHeight + 'px'
    document.getElementById('header').style = 'display: none'
  }
}
</script>

<style>
.video {
  width: 100%;
  position: absolute;
  top: 0; 
  right: 0;
}
.countdown {
  left: 50%;
  top: 50%;
  margin-top: -10%;
  margin-left: -100px;
  position:absolute;
  background-color: transparent;
}
.video__wrapper {
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
.vuejs-countdown .digit {
  font-size: 60px !important;
}
.vuejs-countdown :after {
  font-size: 60px !important;
}
</style>
