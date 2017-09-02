<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        v-card
          v-card-text
            h3
              | Users List Page
            v-layout.mb-2( row )
              v-flex( xs12 )
                v-card
                  v-card-text
                    router-view
            v-layout( row )
              v-flex( xs12 )
                v-btn.secondary( @click="goHome()" )
                  | back home

</template>

<script>
  export default {
    name: 'user',
    methods: {
      goHome () {
        this.$router.push({ name: 'Home' })
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

