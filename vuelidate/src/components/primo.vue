<template lang="pug">
  #primo
    .well
      h2.page-header.text-capitalize basic example
      form
        .form-group( :class="{ 'form-group--error': $v.name.$error }" )
          label.text-capitalize(for="name")
            | name
          input.form-control( type="text", v-model.trim="name", @input="$v.name.$touch()" )
          span( v-if="!$v.name.required" )
            | Field is required
          span( v-if="!$v.name.minLength" )
            | Name must have at least {{ $v.name.$params.minLength.min }} letters
        .form-group( :class="{ 'form-group--error': $v.age.$error }" )
          label.text-capitalize(for="age") age
          input.form-control( type="text", v-model.trim="age", @blur="$v.age.$touch()" )
          span.form-group__message( v-if="!$v.age.between" )
            | The age must be between {{ $v.age.$params.between.min }} and {{ $v.age.$params.between.max }} years
        pre
          | {{ $v.age }}
</template>

<script>
  import { required, minLength, between } from 'vuelidate/lib/validators'

  export default {
    name: 'primo',
    data () {
      return {
        name: '',
        age: 0
      }
    },
    validations: {
      name: {
        required,
        minLength: minLength(4)
      },
      age: {
        between: between(20, 30)
      }
    }
  }
</script>

<style lang="scss" scoped>
  //
</style>
