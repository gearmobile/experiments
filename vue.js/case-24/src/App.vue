<template>
  <div id="app">
    <carousel>
      <carousel-slide>slide item 1</carousel-slide>
      <carousel-slide>slide item 2</carousel-slide>
    </carousel>
  </div>
</template>

<script>
import Carousel from './components/carousel/Carousel'
import CarouselSlide from './components/carousel/CarouselSlide'

export default {
  name: 'app',
  components: {
    Carousel,
    CarouselSlide
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
