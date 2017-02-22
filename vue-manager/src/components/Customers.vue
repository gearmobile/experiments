<template>
  <div class="customers container">
    <h1 class="page-header">manage customers</h1>
    <app-alert :alert="alertMessage"></app-alert>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>first name</th>
          <th>last name</th>
          <th>email</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers">
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td><router-link class="btn btn-default" :to="'/customer/' + customer.id">view</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  import appAlert from './Alert';

  export default {
    name: 'customers',
    data() {
      return {
        customers: [],
        alertMessage: '',
      };
    },
    components: {
      appAlert,
    },
    methods: {
      fetchCustomers() {
        this.$http.get('').then((response) => {
          this.customers = response.body;
        }, (response) => {
          // eslint-disable-next-line
          console.log(response);
        });
      },
    },
    created() {
      this.alertMessage = this.$route.query.message;
      this.fetchCustomers();
    },
    updated() {
      this.fetchCustomers();
    },
  };
</script>

<style scoped>
  /**/
</style>
