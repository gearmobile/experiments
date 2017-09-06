<template lang="pug">
  v-container
    v-layout( row )
      v-flex( xs12 )
        p
          | Vue.js is awesome - {{ name }} ({{ age }})
        p
          | Multiplied age: {{ triple }}
        p
          | Random value: {{ getRandom }}
        p
          img( :src="path", :alt="image.title" )
        p
          input( type="text" :value="name" )
</template>

<script>
  function random (minVal, maxVal) {
    const min = Math.ceil(minVal)
    const max = Math.floor(maxVal)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }
  export default {
    name: 'home',
    data () {
      return {
        name: 'Valery Semenencko',
        age: 32,
        image: {
          path: 'assets/vuejs-logo.jpg',
          title: 'Image'
        }
      }
    },
    computed: {
      triple () {
        return this.age * 3
      },
      getRandom () {
        return random(0, 10)
      },
      path () {
        return require(this.image.path)
      }
    }
  }
</script>

<style scoped>
  /**/
</style>
