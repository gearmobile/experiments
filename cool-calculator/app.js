// http://eloboostbros.com/elo-boost
const app = new Vue({
  data: {
    league: [
      { name: 'diamond', value: 500 },
      { name: 'platinum', value: 400 },
      { name: 'gold', value: 300 },
      { name: 'silver', value: 200 },
      { name: 'bronze', value: 100 },
    ],
    division: [
      { name: 'division-5', value: 500 },
      { name: 'division-4', value: 400 },
      { name: 'division-3', value: 300 },
      { name: 'division-2', value: 200 },
      { name: 'division-1', value: 100 },
    ],
    currLeagueSelect: 200,
    currDivisionSelect: 200,
    disLeagueSelect: 300,
    disDivisionSelect: 300,
    leagueWarning: false,
    divisionWarning: false,
    leagueWarningText: '',
  },
  computed: {
    totalSum: function () {
      return this.disLeagueSelect + this.disDivisionSelect;
    },
  },
  watch: {
    disLeagueSelect: function () {
      if (this.disLeagueSelect < this.currLeagueSelect) {
        this.leagueWarning = true;
        this.leagueWarningText = 'less';
      } else if (this.disLeagueSelect === this.currLeagueSelect) {
        this.leagueWarning = true;
        this.leagueWarningText = 'equal';
      }
    },
    disDivisionSelect: function () {
      if (this.disDivisionSelect < this.currDivisionSelect) {
        this.divisionWarning = !this.divisionWarning;
      }
    },
  },
});

app.$mount('#app');
