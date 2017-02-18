<template>
  <section class="box">
    <div class="primary">
      <slot name="header"></slot>
    </div>
    <div class="secondary">
      <slot name="body"></slot>
    </div>
    <div class="tertiary">
      <slot></slot>
    </div>
    <div class="uno">
      <slot name="add">{{ addTitle }}</slot>
    </div>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        addTitle: 'default additional title',
      };
    },
  };
</script>

<style lang="scss">
  .box {
    margin: 30px auto;
    padding: 30px;
    -webkit-box-shadow: 1px 1px 2px rgba( 0,0,0, 0.8 );
    box-shadow: 1px 1px 2px rgba( 0,0,0, 0.8 );
  }
  h3 {
    text-transform: uppercase;
    color: firebrick;
    font-size: 30px;
  }
  .tertiary {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 700;
  }
</style>
