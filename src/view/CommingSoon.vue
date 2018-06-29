<template>

    <v-container
    id="grid"
    fluid
    grid-list-sm
    tag="section"
  >
    <v-layout row wrap>
      <v-flex d-flex xs12 order-xs5>
        <v-layout column>
          <v-flex>
            <v-card flat>
              <img src="static\img\Banner.jpg" alt="Parallax" class="img-responsive">
            </v-card>
          </v-flex>
          <v-flex>
            <v-card flat>
              <v-card-text class="info_text">
                <CB-text>Code Battle</CB-text>
                - это мини-хакатон для тех, кто любит программирование, 
                искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
                любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
                Все сражения демонстрируются на большом экране в режиме реального времени.
              </v-card-text>
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>




<script>
import Countdown from 'vuejs-countdown'
export default {
  name: 'CommingSoon',
  components: { Countdown }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>

  .img-responsive{
    min-width: 100%;
    height: auto;
  }
  .info_text{
    padding-top: 50px;
    padding-left: 100px;
    padding-right: 100px;
    text-indent: 1.5em;
    font: 23px sans-serif;
    text-align: justify;
  }
  CB-text{
    font: 30px sans-serif;
    text-shadow: 1px 1px 2px black;
  }
</style>
