// https://www.bonus-malus.ru/osago/kalkuljator.html
// https://www.vbr.ru/strahovanie/help/osago/formula-rascheta-osago/regionalnye-kojefficienty-strahovyh-tarifov/
// http://polisgid.ru/stati-osago/tarify-osago/
// http://www.4sure.ru/inform/aboutinsure/23-kojefficient-territorii
// http://avtoedet.ru/formula-rascheta-osago/

// -------------------------------------------
// МОЩНОСТЬ ДВИГАТЕЛЯ (КМ):
// -------------------------------------------
const powerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'до 50 л.с. включительно', value: 1, ratio: 0.6 },
  { name: 'свыше 50 до 70 л.с. включительно', value: 2, ratio: 0.9 },
  { name: 'свыше 70 до 100 л.с. включительно', value: 3, ratio: 1 },
  { name: 'свыше 100 до 120 л.с. включительно', value: 4, ratio: 1.2 },
  { name: 'свыше 120 до 150 л.с. включительно', value: 5, ratio: 1.4 },
  { name: 'свыше 150 л.с.', value: 6, ratio: 1.6 },
];

// -------------------------------------------
// БАЗОВАЯ ТАРИФНАЯ СТАВКА (ТБ):
// -------------------------------------------
const ownerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'физическое лицо', value: 1, ratio: 1200 },
  { name: 'юридическое лицо', value: 2, ratio: 2000 },
];

// -------------------------------------------
// НАЛИЧИЕ ПРИЦЕПА В ДОГОВОРЕ ОСАГО (КПР)
// -------------------------------------------
const trailerData = [
  { name: 'не выбрано', value: 0, ratio: 0 },
  { name: 'Прицепы к мотоциклам и мотороллерам', value: 1, ratio: 1.16 },
  { name: 'Прицепы к грузовым автомобилям с макс массой 16 тонн', value: 2, ratio: 1.4 },
  { name: 'Прицепы к грузовым автомобилям с макс массой более 16 тонн', value: 2, ratio: 1.25 },
  { name: 'Прицепы к тракторам, не имеющих колесных движителей', value: 3, ratio: 1.24 },
  { name: 'Прицепы к другим типам транспортных средств', value: 4, ratio: 1 },
];

const vehicleData = [
  { name: 'не выбрано', value: 0 },
  { name: 'мотоциклы, мопеды, квадроциклы', value: 'a' },
  { name: 'легковой автомобиль', value: 'b' },
  { name: 'легковое такси', value: 'bt' },
  { name: 'грузовой автомобиль, max 16 тонн и менее', value: 'c' },
  { name: 'грузовой автомобиль, max 16 тонн и более', value: 'cm' },
  { name: 'автобусы до 16 пассажиров включительно', value: 'd' },
  { name: 'автобусы более 16 пассажиров', value: 'dm' },
  { name: 'маршрутные автобусы', value: 'dt' },
  { name: 'троллейбусы', value: 'tb' },
  { name: 'трамваи', value: 'tm' },
  { name: 'трактора', value: 'tr' },
];

// -------------------------------------------
// МЕСТО ПРОЖИВАНИЯ СОБСТВЕННИКА:
// -------------------------------------------
const regionData = [
  { name: 'Алтайский край', value: 0 },
  { name: 'Амурская область', value: 1 },
  { name: 'Архангельская область', value: 2 },
  { name: 'Астраханская область', value: 3 },
  { name: 'Белгородская область', value: 4 },
];

// -------------------------------------------
// МЕСТО РЕГИСТРАЦИИ СОБСТВЕННИКА (КТ):
// -------------------------------------------
const regionRegistrationData = [
  [
    { name: 'не выбран', value: 0 },
    { name: 'Барнаул', value: 1 },
    { name: 'Бийск', value: 2 },
    { name: 'Заринск, Новоалтайск, Рубцовск', value: 3 },
    { name: 'прочие города и населенные пункты', value: 4 },
  ],
  [
    { name: 'не выбран', value: 0 },
    { name: 'Благовещенск', value: 1 },
    { name: 'Белогорск, Свободный', value: 2 },
    { name: 'прочие города и населенные пункты', value: 3 },
  ],
  [
    { name: 'не выбран', value: 0 },
    { name: 'Архангельск', value: 1 },
    { name: 'Северодвинск', value: 2 },
    { name: 'Котлас', value: 3 },
    { name: 'прочие города и населенные пункты', value: 4 },
  ],
  [
    { name: 'не выбран', value: 0 },
    { name: 'Астрахань', value: 1 },
    { name: 'прочие города и населенные пункты', value: 2 },
  ],
  [
    { name: 'не выбран', value: 0 },
    { name: 'Белгород', value: 1 },
    { name: 'Губкин, Старый Оскол', value: 2 },
    { name: 'прочие города и населенные пункты', value: 3 },
  ],
];

const conditionOneData = [
  { name: 'не выбрано', value: 0 },
  { name: 'стандартные', value: 1 },
  { name: 'транзит', value: 2 },
  { name: 'иностранец', value: 3 },
];

const conditionTwoData = [
  { name: 'не выбрано', value: 0 },
  { name: 'стандартные', value: 1 },
  { name: 'транзит', value: 2 },
  { name: 'иностранец', value: 3 },
  { name: 'спецтехника', value: 4 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ ОГРАНИЧЕНИЯ НА КОЛИЧЕСТВО ДОПУЩЕННЫХ ЛИЦ (КО):
// -------------------------------------------
const driversData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'ограниченное число водителей', value: 1, ratio: 1 },
  { name: 'число водителей без ограничения', value: 2, ratio: 1.8 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ ВОЗРАСТА И СТАЖА ВОДИТЕЛЯ (КВС):
// -------------------------------------------
const experienceData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'До 22 лет включительно со стажем вождения до 3 лет включительно', value: 1, ratio: 1.8 },
  { name: 'Более 22 лет со стажем вождения до 3 лет включительно', value: 2, ratio: 1.7 },
  { name: 'До 22 лет включительно со стажем вождения свыше 3 лет', value: 3, ratio: 1.6 },
  { name: 'Более 22 лет со стажем вождения свыше 3 лет', value: 4, ratio: 1 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ БОНУС-МАЛУС (КБМ):
// -------------------------------------------
const bonusMalusData = [
  { name: 'не выбран', value: 0, ratio: 0 },
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

// -------------------------------------------
// КОЭФФИЦИЕНТ ПРАКТИЧЕСКОГО ИСПОЛЬЗОВАНИЯ ТС (КС):
// -------------------------------------------
const periodExploitationData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: '3 месяца', value: 1, ratio: 0.5 },
  { name: '4 месяца', value: 2, ratio: 0.6 },
  { name: '5 месяцев', value: 3, ratio: 0.65 },
  { name: '6 месяцев', value: 4, ratio: 0.7 },
  { name: '7 месяцев', value: 5, ratio: 0.8 },
  { name: '8 месяцев', value: 6, ratio: 0.9 },
  { name: '9 месяцев', value: 7, ratio: 0.95 },
  { name: '10 месяцев и более', value: 8, ratio: 1 },
];

// -------------------------------------------
// ПЕРИОД ДЕЙСТВИЯ СТРАХОВОГО ПОЛИСА (КП):
// -------------------------------------------
const periodInsuranceData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'от 5 до 15 дней', value: 1, ratio: 0.2 },
  { name: 'от 16 дней до 1 месяца', value: 2, ratio: 0.3 },
  { name: '2 месяца', value: 3, ratio: 0.4 },
  { name: '3 месяца', value: 4, ratio: 0.5 },
  { name: '4 месяца', value: 5, ratio: 0.6 },
  { name: '5 месяцев', value: 6, ratio: 0.65 },
  { name: '6 месяцев', value: 7, ratio: 0.7 },
  { name: '7 месяцев', value: 8, ratio: 0.8 },
  { name: '8 месяцев', value: 9, ratio: 0.9 },
  { name: '9 месяцев', value: 10, ratio: 0.95 },
  { name: '10 месяцев и более', value: 11, ratio: 1 },
];

// -------------------------------------------
// КОЭФФИЦИЕНТ НАРУШЕНИЙ КН
// -------------------------------------------
const violationsData = [
  { name: 'не выбран', value: 0, ratio: 0 },
  { name: 'нет', value: 1, ratio: 1.5 },
  { name: 'да', value: 2, ratio: 1.5 },
];

// =================================================================

const app = new Vue({
  data: {
    owner: ownerData,
    conditionOne: conditionOneData,
    conditionTwo: conditionTwoData,
    vehicle: vehicleData,
    power: powerData,
    trailer: trailerData,
    region: regionData,
    regionRegistration: regionRegistrationData,
    drivers: driversData,
    experience: experienceData,
    bonusMalus: bonusMalusData,
    periodExploitation: periodExploitationData,
    periodInsurance: periodInsuranceData,
    violations: violationsData,
    // ПЕРЕМЕННЫЕ
    // --------------------------------------------------------------------------
    ownerValue: 0,
    conditionOneValue: 0,
    conditionTwoValue: 0,
    vehicleValue: 0,
    powerValue: 0,
    trailerValue: 0,
    regionValue: 0,
    periodExploitationValue: 0,
    periodInsuranceValue: 0,
    driversValue: 0,
    experienceValue: 0,
    bonusMalusValue: 0,
    violationsValue: 0,
    // -----------------------
    // ВЫЧИСЛЯЕМЫЕ КОЭФИЦИЕНТЫ
    // -----------------------
    TB: 0, // базовый тариф
    KM: 0, // мощность двигателя
    КС: 0, // период эксплуатации
    KP: 0, // период страхования
    KPR: 0, // наличие прицепа
    KBC: 0, // стаж водителя
    KO: 0, // кол-во водителей
    KH: 0, // нарушения
    KBM: 0, // бонус-малус
    // -----------------------
  },
  methods: {
    changeSelectOwner() {
      this.ownerValue = 0;
      this.TB = 0;
    },
    changeSelectVehicle() {
      this.vehicleValue = 0;
    },
    changeSelectPower() {
      this.powerValue = 0;
      this.KM = 0;
    },
    changeSelectTrailer() {
      this.trailerValue = 0;
      this.KPR = 0;
    },
    changeSelectRegion() {
      this.regionValue = 0;
    },
    changeSelectPeriod() {
      this.periodValue = 0;
      this.КС = 0;
    },
    changeSelectInsurance() {
      this.insuranceValue = 0;
      this.KP = 0;
    },
    changeSelectDrivers() {
      this.driversValue = 0;
      this.KO = 0;
    },
    changeSelectExperience() {
      this.experienceValue = 0;
      this.KBC = 0;
    },
    changeSelectBonusMalus() {
      this.bonusMalusValue = 0;
      this.KBM = 0;
    },
    changeSelectViolations() {
      this.violationsValue = 0;
      this.KH = 0;
    },

    // ----------------------------------------
    getOwnerRatio() { // checked
      for (let i = 0; i < this.owner.length; i += 1) {
        if (this.owner[i].value === this.ownerValue) {
          this.TB = this.owner[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPowerRatio() { // checked
      for (let i = 0; i < this.power.length; i += 1) {
        if (this.power[i].value === this.powerValue) {
          this.KM = this.power[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPeriodExpRatio() { // checked
      for (let i = 0; i < this.periodExploitation.length; i += 1) {
        if (this.periodExploitation[i].value === this.periodExploitationValue) {
          this.КС = this.periodExploitation[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getPeriodInsRatio() { // checked
      for (let i = 0; i < this.periodInsurance.length; i += 1) {
        if (this.periodInsurance[i].value === this.periodInsuranceValue) {
          this.KP = this.periodInsurance[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getTrailerRatio() { // checked
      for (let i = 0; i < this.trailer.length; i += 1) {
        if (this.trailer[i].value === this.trailerValue) {
          this.KPR = this.trailer[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getExperienceRatio() { // checked
      for (let i = 0; i < this.experience.length; i += 1) {
        if (this.experience[i].value === this.experienceValue) {
          this.KBC = this.experience[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getDriversRatio() { // checked
      for (let i = 0; i < this.drivers.length; i += 1) {
        if (this.drivers[i].value === this.driversValue) {
          this.KO = this.drivers[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getViolationsRatio() { // checked
      for (let i = 0; i < this.violations.length; i += 1) {
        if (this.violations[i].value === this.violationsValue) {
          this.KH = this.violations[i].ratio;
        }
      }
    },
    // ----------------------------------------
    getBonusMalusRatio() { // checked
      for (let i = 0; i < this.bonusMalus.length; i += 1) {
        if (this.bonusMalus[i].value === this.bonusMalusValue) {
          this.KBM = this.bonusMalus[i].ratio;
        }
      }
    },
    // ----------------------------------------
  },
  computed: {
    condOneShow() {
      return this.ownerValue === 1;
    },
    condTwoShow() {
      return this.ownerValue === 2;
    },
    group1Show() {
      return this.regionValue === 1;
    },
    group2Show() {
      return this.regionValue === 2;
    },
    group3Show() {
      return this.regionValue === 3;
    },
    group4Show() {
      return this.regionValue === 4;
    },
    group5Show() {
      return this.regionValue === 5;
    },
    currGroup() {
      return this.regionRegistration[this.regionValue];
    },
  },
});

app.$mount('#app');
