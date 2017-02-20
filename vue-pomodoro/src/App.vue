<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-md-8 col-md-offset-2">
          <div class="pomodoro">
            <h2 class="pomodoro__title">
              <span class="pomodoro__logo">Pomodoro</span>
              <button class="pomodoro__button pomodoro__button--start" type="button" :disabled="status === 'started'" @click="start">
                <i class="fa fa-play" aria-hidden="true"></i>
              </button>
              <button class="pomodoro__button pomodoro__button--pause" type="button" :disabled="status !== 'started'" @click="pause">
                <i class="fa fa-pause" aria-hidden="true"></i>
              </button>
              <button class="pomodoro__button pomodoro__button--stop" type="button" :disabled="status !== 'started' && status !== 'paused'" @click="stop">
                <i class="fa fa-stop" aria-hidden="true"></i>
              </button>
            </h2>
            <h3 class="pomodoro__state">{{ state }}</h3>
            <div class="well">
              <div class="pomodoro__timer">
                <span class="pomodoro__minutes">{{ minutesValue }}</span>
                <span>:</span>
                <span class="pomodoro__seconds">{{ secondsValue }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const POMODORO_STATES = {
    WORK: 'start work',
    REST: 'start rest',
  };
  const STATES = {
    STARTED: 'started',
    PAUSED: 'paused',
    STOPPED: 'stopped',
  };
  const WORKING_TIME = 25; // in minutes
  const RESTING_TIME = 5; //in minutes

  export default {
    name: 'app',
    data() {
      return {
        status: STATES.STOPPED,
        minutes: WORKING_TIME,
        seconds: 0,
        pomodoroState: POMODORO_STATES.WORK,
      };
    },
    computed: {
      state() {
        return this.pomodoroState === POMODORO_STATES.WORK ? 'Working' : 'Resting';
      },
      minutesValue() {
        if ( this.minutes < 10 ) {
          return '0' + this.minutes;
        }
        return this.minutes;
      },
      secondsValue() {
        if ( this.seconds < 10 ) {
          return '0' + this.seconds;
        }
        return this.seconds;
      }
    },
    methods: {
      tick() {
        // if seconds is not equal 0, just decrement seconds
        if ( this.seconds !== 0 ) {
          this.seconds -= 1;
          return;
        }
        // if seconds equal 0 and minutes is not equal 0, decrement minutes and set seconds equal 59
        if ( this.minutes !==0 ) {
          this.minutes -= 1;
          this.seconds = 59;
          return;
        }
        // if seconds equal 0 and minutes is equal 0 - toggle working \ resting interval
        this.pomodoroState = this.pomodoroState === POMODORO_STATES.WORK ? POMODORO_STATES.REST : POMODORO_STATES.WORK;
        if ( this.pomodoroState === POMODORO_STATES.WORK ) {
          this.minutes = WORKING_TIME;
        } else {
          this.minutes = RESTING_TIME;
        }
      },
      // start timer
      start() {
        this.status = STATES.STARTED;
        this.tick();
        this.interval = setInterval( this.tick, 1000 );
      },
      // pause timer
      pause() {
        this.status = STATES.PAUSED;
        clearInterval( this.interval );
      },
      // stop timer
      stop() {
        this.status = STATES.STOPPED;
        clearInterval( this.interval );
        this.minutes = WORKING_TIME;
        this.seconds = 0;
        this.pomodoroState = POMODORO_STATES.WORK;
      },
      showKitten() {
        //
      },
    },
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .pomodoro__button {
    padding: 0;
  }
</style>
