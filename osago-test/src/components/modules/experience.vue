<template>
  <div class="row calc__row experience">
    <div class="col-md-6">
      <h3 class="calc__title">Минимальный возраст и стаж водителя ТС:</h3>
    </div>
    <div class="col-md-6">
      <div class="col-md-8">
        <select class="calc__list form-control" name="experience" id="experience" v-model="experienceValue" @change="getExperienceRatio">
          <option v-for="item in experience" v-text="item.name" :value="item.value"></option>
        </select>
      </div>
      <div class="col-md-4">
        <button class="calc__change btn btn-default" v-show="experienceValue" @click="changeSelectExperience">изменить</button>
      </div>
    </div>
  </div>
</template>

<script>
  import eventBus from '../../main';

  const experienceData = [
    { name: 'Не выбран', value: 0, ratio: 0 },
    { name: 'До 22 лет включительно со стажем вождения до 3 лет включительно', value: 1, ratio: 1.8 },
    { name: 'Более 22 лет со стажем вождения до 3 лет включительно', value: 2, ratio: 1.7 },
    { name: 'До 22 лет включительно со стажем вождения свыше 3 лет', value: 3, ratio: 1.6 },
    { name: 'Более 22 лет со стажем вождения свыше 3 лет', value: 4, ratio: 1 },
  ];
  export default {
    data() {
      return {
        experience: experienceData,
        experienceValue: 0,
        KBC: 0, // стаж водителя
      };
    },
    methods: {
      changeSelectExperience() {
        this.experienceValue = 0;
        this.KBC = 0;
      },
      getExperienceRatio() {
        for (let i = 0; i < this.experience.length; i += 1) {
          if (this.experience[i].value === this.experienceValue) {
            this.KBC = this.experience[i].ratio;
          }
        }
        eventBus.$emit('fetchExperienceRatio', this.KBC);
      },
    },
  };
</script>
