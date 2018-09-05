<template>
  <!-- <div class="video__wrapper">
    <video class="video" muted loop autoplay preload="auto">
      <source src="/static/media/codebattle.webm" type="video/webm">
    </video>
  </div> -->
</template>

<script>
// import Countdown from 'vuejs-countdown'

export default {
  // name: 'CommingSoon',
  // components: { Countdown },
  // mounted () {
  //   this.headerElement = document.getElementById('header')
  //   this.onResize()
  //   window.addEventListener('resize', this.onResize, { passive: true })
  // },
  // beforeDestroy () {
  //   if (typeof window !== 'undefined') {
  //     window.removeEventListener('resize', this.onResize, { passive: true })
  //   }
  // },
  // methods: {
  //   onResize () {
  //     var _height = window.innerHeight ? window.innerHeight : window.height()
  //     var _headerHeight = document.getElementById('header').clientHeight
  //     this.$refs.video.style.width = window.innerWidth + 'px'
  //     this.$refs.video.style.height = _height - _headerHeight + 'px'
  //   }
  // }
}
</script>

<style scoped>
.video {
  width: 80%;
  padding-top: 30px;
}
.video__wrapper{
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
}
@media (max-width: 600px) {
  .video__wrapper{
    display: none;
  }
}
</style>


