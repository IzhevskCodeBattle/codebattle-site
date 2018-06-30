<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section>

    <v-layout row class="icons">
      <v-flex xs12 sm6 md3 order-md1>
        <v-card light tile flat>
          <v-card-text><v-icon x-large disabled>extension</v-icon></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md2>
        <v-card light tile flat>
          <v-card-text><v-icon x-large disabled>supervisor_account</v-icon></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md3>
        <v-card light tile flat>
          <v-card-text><v-icon x-large disabled>code</v-icon></v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md4>
        <v-card light tile flat>
          <v-card-text><v-icon x-large disabled>thumb_up</v-icon></v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="icons_text">
      <v-flex xs12 sm6 md3 order-md5>
        <v-card light tile flat>
          <v-card-text>Интересно</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md6>
        <v-card light tile flat>
          <v-card-text>Для всех</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md7>
        <v-card light tile flat>
          <v-card-text>Практика, а не теория</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md8>
        <v-card light tile flat>
          <v-card-text>Стань лучшим</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-flex>
      <v-card flat>
        <v-card-text class="info_text">
          <div class="CB-text">Code Battle</div><br>
          Это мини-хакатон для тех, кто любит программирование, 
          искусственный интеллект и сражения ботов. <br>Порог вхождения в Code Battle минимален: 
          любой может прийти<br> и уже через 45 минут запустить своего бота сражаться с соперниками. 
         <br> Все сражения демонстрируются на большом экране в режиме реального времени.
        </v-card-text>
      </v-card>
    </v-flex>
  </section>

</template>
<!-- код, который относится непосредственно к компоненту -->
<script>
export default {
  name: 'About'
}
</script>
<!-- стили, которые относятся непосредственно к компоненту -->
<style scoped>
  .info_text{
    padding-top: 10px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 50px;
    margin: 0;
    font-size: 23px;
    text-align: center;
    line-height: 1.5;
  }
  .CB-text{
    padding-top: 55px;
    padding-bottom: 15px;
    font-size: 30px;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
  } 

  .icon{
    padding-top: 50px;
  }
  .icons{
    text-align: center;
  }
   .icons_text{
    text-align: center;
    font-size: 3ex;
  }
</style>

