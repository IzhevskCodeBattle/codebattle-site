<template>
  <v-layout>
    Account for user {{user}}
  </v-layout>
</template>
<script>
export default {
  name: 'Account',
  data: () => {
    return {
      user: 'User info'
    }
  }
}
</script>

