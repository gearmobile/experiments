<template>
  <div class="row calc__row trailer">
    <div class="col-md-6">
      <h3 class="calc__title">Наличие \ отсутствие прицепа ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="trailer" id="trailer" v-model="trailerValue" @change="getTrailerRatio">
          <option v-for="item in trailer" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="trailerValue" @click="changeSelectTrailer">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const trailerData = [
    { name: 'Не выбрано', value: 0, ratio: 0 },
    { name: 'Прицепы к мотоциклам и мотороллерам', value: 1, ratio: 1.16 },
    { name: 'Прицепы к грузовым автомобилям с макс массой 16 тонн', value: 2, ratio: 1.4 },
    { name: 'Прицепы к грузовым автомобилям с макс массой более 16 тонн', value: 2, ratio: 1.25 },
    { name: 'Прицепы к тракторам, не имеющих колесных движителей', value: 3, ratio: 1.24 },
    { name: 'Прицепы к другим типам транспортных средств', value: 4, ratio: 1 },
  ];
  export default {
    name: 'trailer',
    data() {
      return {
        trailer: trailerData,
        trailerValue: 0,
        KPR: 0, // наличие прицепа
      };
    },
    methods: {
      getTrailerRatio() {
        for (let i = 0; i < this.trailer.length; i += 1) {
          if (this.trailer[i].value === this.trailerValue) {
            this.KPR = this.trailer[i].ratio;
          }
        }
        eventBus.$emit('fetchTrailerRatio', this.KPR);
      },
      changeSelectTrailer() {
        this.trailerValue = 0;
        this.KPR = 0;
      },
    },
  };
</script>
