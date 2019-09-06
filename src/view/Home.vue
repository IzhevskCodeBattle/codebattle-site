<template>
  <v-content>
    <About/>
    <Events/>
    <Games/>
    <Partners/>
  </v-content>
</template>

<script>
import About from '@/component/About/About.vue'
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

<style scoped>
 .v-content{
   padding: 0 !important;
 }
</style>
