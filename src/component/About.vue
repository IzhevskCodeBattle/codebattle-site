<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section id="about">
    <v-flex>
      <v-card flat>
        <v-card-text class="info_text">
          <span class="cb-text">Code Battle</span>
          <p>
            Это мини-хакатон для тех, кто любит программирование, 
            искусственный интеллект и сражения ботов. Порог вхождения в Code Battle минимален: 
            любой может прийти и уже через 45 минут запустить своего бота сражаться с соперниками. 
            Все сражения демонстрируются на большом экране в режиме реального времени.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>
    <v-layout row wrap>
      <v-flex xs12 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize">extension</v-icon>
          <v-card-text class="card_text">Программирование в виде игры</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >supervisor_account</v-icon>
          <v-card-text class="card_text">Новые знакомства</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >code</v-icon>
          <v-card-text class="card_text">Практика, а не теория</v-card-text>
        </v-card>
      </v-flex>
      <v-flex xs12 sm6 md3 lg3>
        <v-card flat>
          <v-icon class="xsize" >thumb_up</v-icon>
          <v-card-text class="card_text">Море эмоций</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
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
  h2{
    text-align: center;
    font-size: 3em;
  }

  .info_text{
    padding-top: 80px;
    padding-left: 80px;
    padding-right: 80px;
    padding-bottom: 40px;
    margin: 0;
    font-size: 30px;
    text-align: center;
    line-height: 1.5;
  }
  .cb-text{
    font-size: 120px;
    text-transform: uppercase;
    color: #222222;
  } 

  .icon{
    margin-top: 50px;
    cursor: default;  
  }
  .card{
    text-align: center;
    margin-bottom: 50px;
  }
  .card_text{
    text-align: center;
    font-size: 30px;
  }
  .xsize{
    margin-top: 50px;
    padding: 20px;
    font-size: 80px;
    color: #CEDB56;
    border-radius: 80px;
  }
  .layout{
    text-align: center;
  }
 
</style>
