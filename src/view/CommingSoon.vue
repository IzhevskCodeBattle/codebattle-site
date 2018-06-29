<template>

  <div class="background">
    
  </div>
    

</template>

<script>
import Countdown from 'vuejs-countdown'

export default {
  name: 'CommingSoon',
  components: { Countdown }
}
</script>

<style scoped>
.background {
  display: flex;
  height: 100%;
  background-image: url(/static/img/Banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  background-attachment: scroll;
  background-position: 50% 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  /* z-index: 0;  */
  align-items: center;
  justify-content: center;
  font-weight: bold;   
}
  
  

</style>

