<template>
    <section>
        <button type="button" @click="changeParentName">change parent name</button>
    </section>
</template>

<script>
    export default {
      data() {
        return {
          childName: 'come from child component',
        };
      },
      methods: {
        changeParentName() {
          this.$emit('chgParent', this.childName);
        },
      },
    };
</script>
