<template lang="pug">

  v-container

    v-layout.mb-4( row )
      v-flex.text-xs-center( xs12, sm6, offset-sm3 )
        v-btn.primary( @click="$store.commit('INIT_STATES')" )
          | reset all states below

    v-layout.mb-2( row )
      v-flex( xs12, v-for="(item, i) in items", :key="item.name" )
        v-switch( :label="item.name + ' ' + item.value", :value="item.value", v-model="additional[i]" )

    v-layout( row )
      v-flex.text-xs-center( xs12 )
        | {{ add }}

</template>

<script>
  export default {
    name: 'primo',
    computed: {
      items () {
        return this.$store.getters.getItems
      },
      additional: {
        get () { return this.$store.getters.getAdditional },
        set (value) { this.$store.commit('SET_ADDITIONAL', value) }
      },
      add () {
        return this.$store.getters.getAdditional
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>
