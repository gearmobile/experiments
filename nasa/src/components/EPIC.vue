<template lang="pug">

  v-container

    v-layout( row )
      v-flex( xs12 )
        h3.text-xs-center
          | EPIC
        p
          | The EPIC API provides information on the daily imagery collected by DSCOVR's Earth Polychromatic Imaging Camera (EPIC) instrument. Uniquely positioned at the Earth-Sun Lagrange point, EPIC provides full disc imagery of the Earth and captures unique perspectives of certain astronomical events such as lunar transits using a 2048x2048 pixel CCD (Charge Coupled Device) detector coupled to a 30-cm aperture Cassegrain telescope.

    v-layout( row )
      v-flex( xs12 )
        v-btn.secondary( block, @click.native="getEPIC()" )
          | show epic

</template>

<script>
  import axios from 'axios'
  const url = 'https://api.nasa.gov/EPIC/api/natural/images?api_key='
  const key = 'E63VawPtEeRx6v2Mkzh2HqyeggvHL9dFPtctVcaN'

  export default {
    methods: {
      getEPIC () {
        axios.get(url + key)
          .then(res => {
            console.log(res.data)
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<style lang="stylus" scoped>
  //
</style>

