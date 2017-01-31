new Vue({
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attackGame() {
        let maxValue = 10;
        let minValue = 3;
        this.playerHealth -= Math.max(Math.floor(Math.random() * maxValue) + 1, minValue);

        if (this.playerHealth <= 0) {
          alert('You lost!');
          this.gameIsRunning = false;
          return false;
        }

        maxValue += 2;
        minValue += 2;
        this.monsterHealth -= Math.max(Math.floor(Math.random() * maxValue) + 1, minValue);

        if (this.monsterHealth <= 0) {
          alert('You win!');
          this.gameIsRunning = false;
        }

    },
    specialAttackGame() {
      //
    },
    healGame() {
      //
    },
    giveUpGame() {
      //
    }
  }
}).$mount('#app');
