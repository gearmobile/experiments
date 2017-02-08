<template>
  <div class="row calc__row">
    <div class="col-md-6">
      <h3 class="calc__title">Водители, допущенные к управлению ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="drivers" id="drivers" v-model="driversValue" @change="getDriversRatio">
          <option v-for="item in drivers" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="driversValue" @click="changeSelectDrivers">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  const driversData = [
    { name: 'Не выбран', value: 0, ratio: 0 },
    { name: 'Ограниченное число водителей', value: 1, ratio: 1 },
    { name: 'Число водителей без ограничения', value: 2, ratio: 1.8 },
  ];
  export default {
    name: 'drivers',
    data() {
      return {
        drivers: driversData,
        driversValue: 0,
        KO: 0, // кол-во водителей
      };
    },
    methods: {
      getDriversRatio() {
        for (let i = 0; i < this.drivers.length; i += 1) {
          if (this.drivers[i].value === this.driversValue) {
            this.KO = this.drivers[i].ratio;
          }
        }
      },
      changeSelectDrivers() {
        this.driversValue = 0;
        this.KO = 0;
      },
    },
  };
</script>
