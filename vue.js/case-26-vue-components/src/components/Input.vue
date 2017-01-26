<template>
    <section class="submit">
        <form class="form" action="#" method="post">
            <p>{{ inputCompProp }}</p>
            <input :value="inputCompProp" @input="changeMessage" class="form__input" name="message" type="text" required>
            <p class="form__output" v-text="inputMessage"></p>
        </form>
    </section>
</template>

<script>
    export default {
        name: 'submit',
        data () {
            return {
                inputMessage: 'this is native data from Input.vue'
            }
        },
        methods: {
            changeMessage ( event ) {
              this.inputMessage = event.target.value;
              this.$emit( 'onValueChange', this.inputMessage );
            }
        },
      props: [ 'inputCompProp' ]
    }
</script>

<style scoped>
    .submit {
        padding: 40px 0;
        border: 1px solid #000;
    }
    .form {
        padding: 10px 0;
    }
    .form__input {
        min-width: 400px;
        padding: 20px 40px;
        border-radius: 4px;
        border: 1px solid rgba( 0,0,0, .8 );
        text-transform: capitalize;
        font-style: italic;
        opacity: .6;
    }
    .form__output {
        text-transform: capitalize;
        font-size: 20px;
        color: forestgreen;
    }
</style>