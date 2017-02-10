<template>
  <div class="row calc__row owner">
    <div class="col-md-6">
      <h3 class="calc__title">Собственник ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="owner" id="owner" v-model="ownerValue" @change="getOwnerRatio">
          <option v-for="item in owner" :value="item.value" v-text="item.name"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button type="button" class="calc__change btn btn-default" v-show="ownerValue" @click="changeSelectOwner">изменить</button>
      </div>
    </div>
</div>
</template>

<script>
  import eventBus from '../../main';

  const ownerData = [
    { name: 'Не выбрано', value: 0, ratio: 0 },
    { name: 'Физическое лицо', value: 1, ratio: 1200 },
    { name: 'Юридическое лицо', value: 2, ratio: 2000 },
  ];
  export default {
    name: 'owner',
    data() {
      return {
        owner: ownerData,
        ownerValue: 0,
        TB: 0,
      };
    },
    methods: {
      changeSelectOwner() {
        this.ownerValue = 0;
        this.TB = 0;
        eventBus.$emit('clrStateOne', this.TB);
      },
      getOwnerRatio() {
        for (let i = 0; i < this.owner.length; i += 1) {
          if (this.owner[i].value === this.ownerValue) {
            this.TB = this.owner[i].ratio;
          }
        }
        eventBus.$emit('chgOwnerValue', this.ownerValue);
        eventBus.$on('fetchOwnerRatio', this.TB);
      },
    },
  };
</script>
