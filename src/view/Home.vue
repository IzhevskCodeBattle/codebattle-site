<template>
  <v-content>
    <!-- <router-view></router-view> -->
    <About/>
    <Events/>
    <Games/>
    <Partners/>
  </v-content>
</template>

<script>
import About from '@/component/About'
import Events from '@/component/Events'
import Games from '@/component/Games'
import Partners from '@/component/Partners'
var scrollToElement = require('scroll-to-element')

export default {
  name: 'Home',
  components: {
    About,
    Events,
    Games,
    Partners
  },
  mounted () {
    scrollToElement(this.$route.hash, { offset: -70 })
  }
}
</script>