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

export default {
  name: 'Home',
  components: {
    About,
    Events,
    Games,
    Partners
  }
}
</script>

<style scoped>
 .v-content{
   padding: 0 !important;
 }
</style>
