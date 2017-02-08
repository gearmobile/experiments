<template>
  <div class="row calc__row">
    <div class="col-md-6">
      <h3 class="calc__title">Класс за безаварийную езду</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="bonusMalus" id="bonusMalus" v-model="bonusMalusValue" @change="getBonusMalusRatio">
          <option v-for="item in bonusMalus" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="bonusMalusValue" @click="changeSelectBonusMalus">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  const bonusMalusData = [
    { name: 'Не выбран', value: 0, ratio: 0 },
    { name: 'М', value: 'M', ratio: 2.45 },
    { name: '0', value: 1, ratio: 2.3 },
    { name: '1', value: 2, ratio: 1.55 },
    { name: '2', value: 3, ratio: 1.4 },
    { name: '3', value: 4, ratio: 1 },
    { name: '4', value: 5, ratio: 0.95 },
    { name: '5', value: 6, ratio: 0.9 },
    { name: '6', value: 7, ratio: 0.85 },
    { name: '7', value: 8, ratio: 0.8 },
    { name: '8', value: 9, ratio: 0.75 },
    { name: '9', value: 10, ratio: 0.7 },
    { name: '10', value: 11, ratio: 0.65 },
    { name: '11', value: 12, ratio: 0.6 },
    { name: '12', value: 13, ratio: 0.55 },
    { name: '13', value: 14, ratio: 0.5 },
  ];
  export default {
    name: 'bonusmalus',
    data() {
      return {
        bonusMalus: bonusMalusData,
        bonusMalusValue: 0,
        KBM: 0,
      };
    },
    methods: {
      getBonusMalusRatio() {
        for (let i = 0; i < this.bonusMalus.length; i += 1) {
          if (this.bonusMalus[i].value === this.bonusMalusValue) {
            this.KBM = this.bonusMalus[i].ratio;
          }
        }
      },
      changeSelectBonusMalus() {
        this.bonusMalusValue = 0;
        this.KBM = 0;
      },
    },
  };
</script>
