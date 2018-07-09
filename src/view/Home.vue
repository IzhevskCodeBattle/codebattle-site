<template>
  <v-content>
    <CommingSoon/>
    <About/>
    <Games/>
    <Partners/>
    <Footer/>
  </v-content>
</template>

<script>
import About from '@/component/About'
import Games from '@/component/Games'
import Partners from '@/component/Partners'
import Footer from '@/component/Footer'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Games,
    Partners,
    Footer
  }
}
</script>