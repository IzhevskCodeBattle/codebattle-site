<!-- содержимое секции компонента. Все содержимое необходимо размещать внутри тега section -->
<template>
  <section>
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

