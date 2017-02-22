<template>
  <div class="details container">
    <h1 class="page-header">{{ customer.firstName }}</h1>
  </div>
</template>

<script>
  export default {
    name: 'details',
    data() {
      return {
        customer: '',
      };
    },
    methods: {
      fetchCustomer() {
        this.$http.get('https://customermanagerapp.firebaseio.com/data.json').then((response) => {
          this.customer = response.body;
        }, (response) => {
          // eslint-disable-next-line
          console.log(response);
        });
      },
    },
    created() {
      this.fetchCustomer(this.$route.params.id);
    },
  };

</script>

<style scoped>
  /**/
</style>
