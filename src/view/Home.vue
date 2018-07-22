<template>
  <div>
    <CommingSoon/>
    <About/>
    <Games/>
    <Partners/>
  </div>
</template>

<script>
import About from '@/component/About'
import Games from '@/component/Games'
import Partners from '@/component/Partners'
import CommingSoon from '@/component/CommingSoon'

export default {
  name: 'Home',
  components: {
    CommingSoon,
    About,
    Games,
    Partners
  }
}
</script>