<template>
  <div class="add container">
    <h1 class="page-header">add customer</h1>
    <form action="#" @submit.prevent="addCustomer">
      
      <div class="well">
        <h4>customer info</h4>
        <div class="form-group">
          <label for="firstName">first name</label>
          <input class="form-control" type="text" placeholder="first name" v-model="customer.firstName">
        </div>
        <div class="form-group">
          <label for="lastName">last name</label>
          <input class="form-control" type="text" placeholder="last name" v-model="customer.lastName">
        </div>
      </div>

      <div class="well">
        <h4>customer contact</h4>
        <div class="form-group">
          <label for="email">email</label>
          <input class="form-control" type="email" placeholder="email" v-model="customer.email">
        </div>
        <div class="form-group">
          <label for="phone">phone</label>
          <input class="form-control" type="text" placeholder="phone" v-model="customer.phone">
        </div>
      </div>

      <div class="well">
        <h4>customer location</h4>
        <div class="form-group">
          <label for="address">address</label>
          <input class="form-control" type="text" placeholder="address" v-model="customer.address">
        </div>
        <div class="form-group">
          <label for="city">city</label>
          <input class="form-control" type="text" placeholder="city" v-model="customer.city">
        </div>
        <div class="form-group">
          <label for="state">state</label>
          <input class="form-control" type="text" placeholder="state" v-model="customer.state">
        </div>
      </div>

      <div class="well">
        <button type="button" class="btn btn-primary">submit</button>
      </div>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'add',
    data() {
      return {
        customer: {
          firstName: '',
          lastName: '',
          email: '',
          phone: '',
          address: '',
          city: '',
          state: '',
        },
        alert: '',
      };
    },
    methods: {
      addCustomer() {
        if (!this.firstName || !this.lastName || !this.email) {
          console.log('enter required data');
        } else {
          this.$http.post('https://customermanagerapp.firebaseio.com/data.json', this.customer)
            .then((response) => {
              console.log(response);
              this.$router.push({ path: '/' });
            }, (error) => {
              console.log(error);
            });
        }
      },
    },
  };
</script>

<style scoped>
  /**/
</style>
