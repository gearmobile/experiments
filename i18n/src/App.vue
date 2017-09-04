<template lang="pug">
  #app
    p
      | {{ $t('message.hello') }}
    // Output the below (instead of the message pre formatted)
    p( v-html="$t('message.html')" )
    p
      | {{ $t('message.named', { shablon: 'how are you, ' }) }}
    // date and time format
    p
      | {{ $d(new Date(), 'short', 'en-US') }}
    p
      | {{ $d(new Date(), 'long', 'ja-JP') }}
    // number formats
    p
      | {{ $n(100, 'currency', 'en-US') }}
    p
      | {{ $n(100, 'currency', 'ja-JP') }}
    app-home
</template>

<script>
  import Home from './components/Home'

  export default {
    name: 'app',
    components: {
      appHome: Home
    }
  }
</script>

<style lang="stylus">

  #app
    font-family 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color #2c3e50
    margin-top 60px

</style>
