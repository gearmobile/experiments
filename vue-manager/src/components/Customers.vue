<template>
  <div class="customers container">
    <h1 class="page-header">manage customers</h1>
    <app-alert></app-alert>
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
        <tr v-for="(item,index) in customers">
          <td>{{ item.firstName }}</td>
          <td>{{ item.lastName }}</td>
          <td>{{ email }}</td>
          <td></td>
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
      };
    },
    components: {
      appAlert,
    },
    methods: {
      fetchCustomers() {
        // this.$http.get('https://customermanagerapp.firebaseio.com/data.json')
        //   .then(
        //     response => {
        //       this.customers = JSON.parse(response.body);
        //     },
        //     error => { console.log(error)
        //   });
      },
    },
    created() {
      this.fetchCustomers();
    },
  };
</script>

<style scoped>
  /**/
</style>
