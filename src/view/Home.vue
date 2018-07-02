<template>
  <v-content>    
    <CommingSoon/>
    <About/>
    <Partners/>
    <Footer/>
  </v-content>
</template>

<script>
import About from '@/component/About'
import Partners from '@/component/Partners'
import Footer from '@/component/Footer'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Partners,
    Footer
  }
}
</script>
<style scoped>
 
</style>

