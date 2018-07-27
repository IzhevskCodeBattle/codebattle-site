<template>
  
</template>
<script>
export default {
  name: 'Locales',
  methods: {
    changeLocale () {
      this.$vuetify.lang.current = 'en'
    }
  }
}
</script>
