Vue.filter( 'roundDown', function( value ) {
  return Math.floor( value );
});

const app = new Vue({
  data: {
    owner: [
      { name: 'not selected', value: 0 },
      { name: 'john', value: 1 },
      { name: 'mary', value: 2 }
    ],
    vehicle: [
      { name: 'not selected', value: 0 },
      { name: 'chevrolet', value: 1 },
      { name: 'ford', value: 2 }
    ],
    power: [
      { name: 'not selected', value: 0 },
      { name: 'less 100hp', value: 1 },
      { name: 'more 100hp and less 150hp', value: 2 },
      { name: 'more 150hp', value: 3 }
    ],
    ownerValue: 0,
    vehicleValue: 0,
    powerValue: 0,
    progress: 0,
    step: 100 / 3
  },
  computed: {
    progressStyle: function () {
      return {
        width: this.progress + '%',
      }
    }
  },
  methods: {
    changeSelectOwner() {
      this.ownerValue = 0;
      this.progress = 0;
    },
    changeSelectVehicle() {
      this.vehicleValue = 0;
      this.progress -= this.step;
    },
    changeSelectPower() {
      this.powerValue = 0;
      this.progress -= this.step;
    },
    onChangeOwner() {
      if ( parseFloat( this.progressStyle.width  ) < this.step ) {
        this.progress += this.step;
      } else if ( this.ownerValue === 0 ) {
        this.progress = 0;
      }
    },
    onChangeVehicle() {
      if ( parseFloat( this.progressStyle.width  ) < this.step * 2 ) {
        this.progress += this.step;
      } else if ( this.vehicleValue === 0 ) {
        this.progress -= this.step;
      }
    },
    onChangePower() {
      if ( parseFloat( this.progressStyle.width  ) < this.step * 3 ) {
        this.progress += this.step;
      } else if ( this.powerValue === 0 ) {
        this.progress -= this.step;
      }
    }
  }
});

app.$mount('#app');
