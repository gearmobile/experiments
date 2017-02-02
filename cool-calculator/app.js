// http://eloboostbros.com/elo-boost
const app = new Vue({
  data: {
    league: [
      { name: 'diamond', value: 'diamond' },
      { name: 'platinum', value: 'platinum' },
      { name: 'gold', value: 'gold' },
      { name: 'silver', value: 'silver' },
      { name: 'bronze', value: 'bronze' },
    ],
    division: [
      { name: 'division I', value: 1 },
      { name: 'division II', value: 2 },
      { name: 'division III', value: 3 },
      { name: 'division IV', value: 4 },
      { name: 'division V', value: 5 },
    ],
    server: [
      { name: 'EU West', value: 1 },
      { name: 'EU Nordic&amp;East', value: 2 },
      { name: 'North America', value: 3 },
      { name: 'Brazil', value: 4 },
      { name: 'Russia', value: 5 },
      { name: 'Latin America North', value: 6 },
      { name: 'Latin America South', value: 7 },
      { name: 'Oceania', value: 8 },
      { name: 'Turkey', value: 9 },
    ],
    // current state ---------
    currLeagueSelect: 'silver',
    currDivisionSelect: 3,
    // desired state ------------
    disLeagueSelect: 'gold',
    disDivisionSelect: 4,
    // warnings ---------------
    leagueWarning: false,
    divisionWarning: false,
    leagueWarningText: '',
  },
  computed: {
    totalSum: function () {
      return this.disLeagueSelect + this.disDivisionSelect;
    },
    currImagePath: function () {
      return 'images/' + this.currLeagueSelect + '_' + this.currDivisionSelect + '.png';
    }
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
