<template>
  <v-content>
    <section>
      <CommingSoon/>
    </section>
    <section>
      <About/>
    </section>
    <section>
      <Partners/>
    </section>
  </v-content>
</template>

<script>
import About from '@/component/About'
import Partners from '@/component/Partners'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Partners
  }
}
</script>
<style scoped>
 
</style>

