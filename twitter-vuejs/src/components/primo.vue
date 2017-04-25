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
          figure.twitter-image( v-for="(photo, index) in photos" )
            i.fa.fa-times-circle-o.fa-3x.twitter-image__button( aria-hidden="true", @click="removePhoto(index)" )
            img( :src="photo", :key="index" )
</template>

<script>
  const MAX_TWEET_LENGTH = 140

  export default {
    name: 'primo',
    data () {
      return {
        tweet: '',
        photos: []
      }
    },
    methods: {
      onFileUpload () {
        this.$refs.onUpload.click()
      },
      removePhoto (value) {
        this.photos.splice(value, 1)
      },
      onChooseFile (event) {
        let self = this
        let files = event.target.files
        for (let i = 0; i < files.length; i++) {
          let reader = new FileReader()
          reader.onloadend = (evt) => {
            self.photos.push(evt.target.result)
          }
          reader.readAsDataURL(files[i])
        }
      }
    },
    computed: {
      isUpload () {
        return this.photos.lenght > 0
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
    color: firebrick;
  }
  .twitter-image__button:hover {
    color: salmon;
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
