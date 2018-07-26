<template>
  <div>
    <CommingSoon/>
    <About/>
    <Events/>
    <Games/>
    <Events/>
    <Partners/>
  </div>
</template>

<script>
import About from '@/component/About'
import Events from '@/component/Events'
import Games from '@/component/Games'
import Partners from '@/component/Partners'
import Events from '@/component/Events'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Events,
    Games,
    Partners,
    Events
  }
}
</script>