<template>
  <v-content>
    <router-view></router-view>
    <CommingSoon/>
    <About/>
    <Games/>
    <Events/>
    <Partners/>
  </v-content>
</template>

<script>
import About from '@/component/About'
import Games from '@/component/Games'
import Partners from '@/component/Partners'
import Events from '@/component/Events'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Games,
    Partners,
    Events
  }
}
</script>