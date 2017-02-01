new Vue({
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false,
  },
  methods: {

    // START GAME
    // -------------------------------------
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },

    // ATTACK GAME
    // -------------------------------------
    attackGame() {
        this.monsterHealth -= this.calcDamage(5, 12);
        if (this.checkGame()) {
          return;
        }

        this.playerHealth -= this.calcDamage(3, 10);
        this.checkGame()
    },

    specialAttackGame() {
      //
    },

    healGame() {
      //
    },

    giveUpGame() {
      //
    },

    calcDamage(minValue, maxValue) {
      return Math.max(Math.floor(Math.random() * maxValue) + 1, minValue);
    },

    checkGame() {
      if (this.monsterHealth <= 0) {
        if (confirm('You win! Start new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You lost! Start new game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
      return false;
    }
  }
}).$mount('#app');
