<template>
  <div class="row calc__row condition">
    <div class="col-md-6">
      <h3 class="calc__title">Условия страхования ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="condition" id="condition" v-model="conditionValue" @change="chgConditionalValue">
          <option v-for="item in currCondition" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="conditionValue" @click="changeSelectCondition">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const conditionData = [
    [
      { name: 'Не выбрано', value: 0 },
    ],
    [
      { name: 'Не выбрано', value: 0 },
      { name: 'Стандартные', value: 1 },
      { name: 'Транзит', value: 2 },
      { name: 'Иностранец', value: 3 },
    ],
    [
      { name: 'Не выбрано', value: 0 },
      { name: 'Стандартные', value: 1 },
      { name: 'Транзит', value: 2 },
      { name: 'Иностранец', value: 3 },
      // { name: 'Спецтехника', value: 4 },
    ],
  ];
  export default {
    name: 'condition',
    data() {
      return {
        condition: conditionData,
        conditionValue: 0,
        ownerValue: 0,
      };
    },
    methods: {
      changeSelectCondition() {
        this.conditionValue = 0;
      },
      chgConditionalValue() {
        eventBus.$emit('chgConditionValue', this.conditionValue);
      },
    },
    computed: {
      currCondition() {
        return this.condition[this.ownerValue];
      },
    },
    created() {
      eventBus.$on('chgOwnerValue', (data) => {
        this.ownerValue = data;
      });
    },
  };
</script>
