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
  position: relative;
  display: flex;
  min-height: 100%;
  min-width: 100%;
  height: auto;
  width: auto;
  background-image: url(/static/img/Banner.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: 50% 50%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  content: "";
  align-items: center;
  justify-content: center;
  font-weight: bold;   
}
</style>

