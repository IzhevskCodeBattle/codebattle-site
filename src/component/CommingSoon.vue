<template>
  <div class="video-cover">
    <video class="video" muted loop autoplay preload="auto">
        <source src="/static/media/codebattle.webm" type="video/webm">
    </video>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'CommingSoon',
  components: { Countdown }
}
</script>

<style scoped>
.video {
  min-width: 100%;
  min-height: 100%;
}

.video-cover {
  width: auto;
  height: auto;
}

@media (min-aspect-ratio: 16/9) {
  .video {
      width: 100%;
      height: auto;
  }
}

@media (max-aspect-ratio: 16/9) {
  .video {
      width: auto;
      height: 100%;
  }
}

</style>

