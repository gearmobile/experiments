<template>
  <div class="panel panel-default">
    <div class="panel-heading">
      <h3 class="panel-title text-center">{{ question }}</h3>
    </div>
    <div class="panel-body">
      <div class="panel__row col-xs-12 col-sm-6 text-center">
        <button type="button" class="panel__button btn btn-primary btn-lg" @click="onAnswer(btnData[0].correct)">{{ btnData[0].answer }}</button>
      </div>
      <div class="panel__row col-xs-12 col-sm-6 text-center">
        <button type="button" class="panel__button btn btn-primary btn-lg" @click="onAnswer(btnData[1].correct)">{{ btnData[1].answer }}</button>
      </div>
      <div class="panel__row col-xs-12 col-sm-6 text-center">
        <button type="button" class="panel__button btn btn-primary btn-lg" @click="onAnswer(btnData[2].correct)">{{ btnData[2].answer }}</button>
      </div>
      <div class="panel__row col-xs-12 col-sm-6 text-center">
        <button type="button" class="panel__button btn btn-primary btn-lg" @click="onAnswer(btnData[3].correct)">{{ btnData[3].answer }}</button>
      </div>
    </div>
  </div>
</template>

<script>
  const MODE_ADDITION = 1;
  const MODE_SUBTRACTION = 2;
  export default {
    data() {
      return {
        question: 'Oops, an error ocurred :/',
        btnData: [
          { correct: true, answer: 0 },
          { correct: false, answer: 0 },
          { correct: false, answer: 0 },
          { correct: false, answer: 0 },
        ],
      };
    },
    methods: {
      generateQuestion() {
        const firstNumber = this.generateRandomNumber(1, 100);
        const secondNumber = this.generateRandomNumber(1, 100);
        const modeNumber = this.generateRandomNumber(1, 2);
        let correctAnswer = 0;
        switch ( modeNumber ) {
          case MODE_ADDITION:
            correctAnswer = firstNumber + secondNumber;
            this.question = 'What is ' + firstNumber + ' + ' + secondNumber + '?';
            break;
          case MODE_SUBTRACTION:
            correctAnswer = firstNumber + secondNumber;
            this.question = 'What is ' + firstNumber + ' - ' + secondNumber + '?';
            break;
          default:
            correctAnswer = 0;
            this.question = 'Oops, an error ocurred :/';
        }
      },
      generateRandomNumber(min, max, except) {
        const randomNumber = Math.round(Math.random() * (max - min)) + min;
        console.log(min, max, randomNumber);
        if (randomNumber === except) {
          return this.generateRandomNumber(min, max, except);
        }
        return randomNumber;
      },
      onAnswer(isCorrect) {
        this.$emit('answered', isCorrect);
      },
    },
  };
</script>

<style lang="scss">
  .panel__row {
    margin-bottom: 20px;
  }
</style>
