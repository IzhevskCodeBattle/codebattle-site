<template>
		<div class="video-wrap">
        <video playsinline poster='images/videos/explore.jpg' preload muted autoplay loop>
          <source src='/static/media/codebattle.mpg' type='video/mp4' />
          <source src='/static/media/codebattle.webm' type='video/webm' />
        </video>                  
        <v-card class="video-overlay" tile full-width>
          <v-card-title>
            <h1>Мы готовим для вас новый сайт</h1>
          </v-card-title>
          <v-card-text>
            <span>Приходите к нам через указанное время и получайте дозу драйва и фана!!!</span>
            <Countdown deadline="May 17, 2018"></Countdown>
          </v-card-text>
          <v-card-media>
          </v-card-media>          
        </v-card>          
		</div>
</template>

<script>
import Countdown from 'vuejs-countdown'
export default {
  name: 'CommingSoon',
  components: { Countdown }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.video-overlay {
  background-color: rgba(255,255,255,0.9);
}
</style>
