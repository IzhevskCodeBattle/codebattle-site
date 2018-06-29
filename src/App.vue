<template>

  <!-- <div id="app"> -->
    <!-- <app-header app></app-header>
      <v-content fluid>
      <router-view></router-view>
    </v-content>

    <div class="about_text">

      <CB-text>Code Battle</CB-text>
      - это мини-хакатон для тех, кто любит программирование, 
      искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
      любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
      Все сражения демонстрируются на большом экране в режиме реального времени.


    </div>
      <app-slider app></app-slider>
       <app-footer app></app-footer>
  </div> -->

  <v-app>
    <app-header app></app-header> 
    <v-content  
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
               <router-view id="about"></router-view>
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
            <app-slider app id="partners"></app-slider>
          <v-flex>
            <v-card flat>
             
            </v-card>
          </v-flex>

        </v-layout>
      </v-flex>
    </v-layout>
     </v-content>
    <app-footer app></app-footer>    
  </v-app>

</template>



<script>
import auth from '@/service/auth'
import AppFooter from '@/component/Footer'
import AppHeader from '@/component/Header'
import AppSlider from '@/component/Slider'

export default {
  name: 'app',
  data: () => ({
    // toggle: false,
    // offsetTop: 0,
    title: 'Code Battle'
  }),
  components: {
    'app-footer': AppFooter,
    'app-header': AppHeader,
    'app-slider': AppSlider
  },
  methods: {
    logout () {
      auth.getAuthHeader().then((val) => {
        auth.logout(this, { headers: val })
      })
    }
    // ,
    // goPartners () {
    //   this.$vuetify.goTo('#partners')
    // },
    // onScroll (e) {
    //   this.offsetTop = e.target.scrollTop
    // }
  }
}
</script>

<style>
  .info_text{
    padding-left: 100px;
    padding-right: 100px;
    margin: 0;
    font: 23px sans-serif;
    text-align: justify;
  }
  CB-text{
    font: 30px sans-serif;
    text-shadow: 1px 1px 2px black;
  } 
</style>

