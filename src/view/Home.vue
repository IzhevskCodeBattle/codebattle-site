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
import CommingSoon from '@/component/CommingSoon'
import About from '@/component/About'
import Events from '@/component/Events'
import Games from '@/component/Games'
import Partners from '@/component/Partners'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Events,
    Games,
    Partners
  }
}
</script>