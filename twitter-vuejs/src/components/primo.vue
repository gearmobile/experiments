<template lang="pug">
  #primo.panel.panel-success
    .panel-heading
      h3.panel-title.text-center compose new tweet
    .panel-body
      form
        // text section
        .form-group
          textarea.form-control( v-model="tweet" )
        // choose file to upload
        .form-input
          input.form-control.hidden( type="file", ref="onUpload", @change="onChooseFile" )
        // control section
        .form-group
          i.fa.fa-camera.fa-lg( aria-hidden="true", @click="onFileUpload" )
          span( :class="{ 'text-warning': charsUnderTwenty, 'text-danger': charsUnderTen }" ) {{ charsRemaining }}
          button.btn.btn-primary.pull-right( type="button", :disabled="tweetIsOutOfRange" ) submit
        // upload photos section
        .form-group( v-if="isUpload" )
          figure.twitter-image
            i.fa.fa-times-circle-o.fa-3x.twitter-image__button( aria-hidden="true", @click="removePhoto" )
            img( :src="photo" )
</template>

<script>
  const MAX_TWEET_LENGTH = 140

  export default {
    name: 'primo',
    data () {
      return {
        tweet: '',
        photo: null
      }
    },
    methods: {
      onFileUpload () {
        this.$refs.onUpload.click()
      },
      removePhoto () {
        this.photo = null
      },
      onChooseFile (event) {
        let self = this
        let reader = new FileReader()
        reader.onload = (event) => {
          self.photo = event.target.result
        }
        reader.readAsDataURL(event.target.files[0])
      }
    },
    computed: {
      isUpload () {
        return this.photo !== null
      },
      tweetIsOutOfRange () {
        return this.charsRemaining === MAX_TWEET_LENGTH || this.charsRemaining < 0
      },
      charsRemaining () {
        return MAX_TWEET_LENGTH - this.tweet.length
      },
      charsUnderTwenty () {
        return this.charsRemaining <= 20 && this.charsRemaining > 10
      },
      charsUnderTen () {
        return this.charsRemaining <= 10
      }
    }
  }
</script>

<style scoped>
  .twitter-image {
    position: relative;
  }
  .twitter-image__button {
    position: absolute;
    top: 20px;
    left: 20px;
    cursor: pointer;
    color: teal;
  }
  .twitter-image__button:hover {
    color: lightgreen;
  }
  textarea {
    min-height: 120px;
  }
  .panel-title {
    text-transform: capitalize;
  }
  .fa-camera {
    cursor: pointer;
    margin-right: 10px;
  }
  .fa-times {
    cursor: pointer;
  }
  .fa-times:hover,
  .fa-times:active {
    color: indianred;
  }
  .fa-camera:hover,
  .fa-camera:active {
    color: teal;
  }
</style>
