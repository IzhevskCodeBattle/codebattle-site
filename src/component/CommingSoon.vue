<template>
  <div ref="video" class="video-cover">
    <video class="video" muted loop autoplay preload="auto">
        <source src="/static/media/codebattle.webm" type="video/webm">
    </video>
  </div>
</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'CommingSoon',
  components: { Countdown },
  mounted () {
    this.headerElement = document.getElementById('header')
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  beforeDestroy () {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.onResize, { passive: true })
    }
  },
  methods: {
    onResize () {
      var _height = window.innerHeight ? window.innerHeight : window.height()
      var _headerHeight = document.getElementById('header').clientHeight
      this.$refs.video.style.width = window.innerWidth + 'px'
      this.$refs.video.style.height = _height - _headerHeight + 'px'
    }
  }
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

