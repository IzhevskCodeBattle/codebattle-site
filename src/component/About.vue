<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section>

    <v-layout row >
      <v-flex xs12 sm6 md3 order-md1>
        <v-card flat>
          <v-icon color="black" class="xsize" >extension</v-icon>
          <v-card-text class="card_text">Интересно</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md2>
        <v-card flat>
          <v-icon color="black" class="xsize" >supervisor_account</v-icon>
          <v-card-text class="card_text">Для всех</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md3>
        <v-card flat>
          <v-icon color="black" class="xsize" >code</v-icon>
          <v-card-text class="card_text">Практика, а не теория</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 order-md4>
        <v-card flat>
          <v-icon color="black" class="xsize" >thumb_up</v-icon>
          <v-card-text class="card_text">Стань лучшим</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>

    <v-flex>
      <v-card flat>
        <v-card-text class="info_text">
          <span class="cb-text">Code Battle</span>
          - это мини-хакатон для тех, кто любит программирование, 
          искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
          любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
          Все сражения демонстрируются на большом экране в режиме реального времени.
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
  .cb-text{
    font: 30px sans-serif;
    padding-top: 55px;
    padding-bottom: 15px;
    text-shadow: 1px 1px 2px black;
    text-transform: uppercase;
  } 

  .icon{
    margin-top: 50px;
    cursor: default;  
  }
  .card{
    text-align: center;
  }
  .card_text{
    text-align: center;
    font-size: 25px;
  }
  .xsize{
    padding: 20px;
    font-size: 80px;
    /* background-color: gray; */
    border-radius: 80px;
    border: 3px solid black;
  }

  .card>:first-child:not(.btn){
    border-top-left-radius: 80px;
    border-top-right-radius: 80px;
  }
</style>
