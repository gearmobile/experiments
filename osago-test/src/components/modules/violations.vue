<template>
  <div class="row calc__row violations">
    <div class="col-md-6">
      <h3 class="calc__title">Наличие нарушений условий страхования ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="violations" id="violations" v-model="violationsValue" @change="getViolationsRatio">
          <option v-for="item in violations" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="violationsValue" @click="changeSelectViolations">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const violationsData = [
    { name: 'Не выбран', value: 0, ratio: 0 },
    { name: 'Нет', value: 1, ratio: 1.5 },
    { name: 'Да', value: 2, ratio: 1.5 },
  ];
  export default {
    name: 'violations',
    data() {
      return {
        violations: violationsData,
        violationsValue: 0,
        KH: 0, // нарушения
      };
    },
    methods: {
      changeSelectViolations() {
        this.violationsValue = 0;
        this.KH = 0;
      },
      getViolationsRatio() {
        for (let i = 0; i < this.violations.length; i += 1) {
          if (this.violations[i].value === this.violationsValue) {
            this.KH = this.violations[i].ratio;
          }
        }
        eventBus.$emit('fetchViolationRatio', this.KH);
      },
    },
  };
</script>
