// http://eloboostbros.com/elo-boost

function searchPrice( nameKey, nameArray ) {
    for ( let i = 0; i < nameArray.length; i++ ) {
        if ( nameArray[i].name === nameKey ) {
            return nameArray[i].price;
        }
    }
}

const app = new Vue({
  data: {
    league: [
      { name: 'diamond', value: 'diamond', price: 500 },
      { name: 'platinum', value: 'platinum', price: 400 },
      { name: 'gold', value: 'gold', price: 300 },
      { name: 'silver', value: 'silver', price: 200 },
      { name: 'bronze', value: 'bronze', price: 100 },
    ],
    division: [
      { name: 'division I', value: 1, price: 500 },
      { name: 'division II', value: 2, price: 400 },
      { name: 'division III', value: 3, price: 300 },
      { name: 'division IV', value: 4, price: 200 },
      { name: 'division V', value: 5, price: 100 },
    ],
    server: [
      { name: 'eu west', value: 1 },
      { name: 'eu nordic &amp; east', value: 2 },
      { name: 'north america', value: 3 },
      { name: 'brazil', value: 4 },
      { name: 'russia', value: 5 },
      { name: 'latin america north', value: 6 },
      { name: 'latin america south', value: 7 },
      { name: 'oceania', value: 8 },
      { name: 'turkey', value: 9 },
    ],

    // current state ---------
    currLeagueSelect: 'silver',
    currDivisionSelect: 3,

    // desired state ------------
    desLeagueSelect: 'gold',
    desDivisionSelect: 4,

    // server state ------------
    serverState: 'eu west',

    // warnings ---------------
    leagueWarning: false,
    divisionWarning: false,

    // placeholders -------------
    headText: '',
    middleText: '',
    endText: ''
  },
  computed: {
    totalSum: function () {
      return this.desLeagueSelect + this.desDivisionSelect;
    },
    currImagePath: function () {
      return 'images/' + this.currLeagueSelect + '_' + this.currDivisionSelect + '.png';
    },
    desImagePath: function () {
      return 'images/' + this.desLeagueSelect + '_' + this.desDivisionSelect + '.png';
    }
  },
  watch: {
    desLeagueSelect: function () {
      let desLeaguePrice = searchPrice( this.desLeagueSelect, this.league );
      let currLeaguePrice = searchPrice( this.currLeagueSelect, this.league );
      if ( desLeaguePrice === currLeaguePrice ) {
        this.leagueWarning = true;
        this.headText = 'desired';
        this.middleText = 'equal';
        this.endText = 'current';
      } else if ( desLeaguePrice < currLeaguePrice ) {
        this.leagueWarning = true;
        this.middleText = 'less';
      } else {
        this.leagueWarning = false;
      }
    },
    desDivisionSelect: function () {
      console.log( this.desDivisionSelect );
    },
    currLeagueSelect: function () {
      let desLeaguePrice = searchPrice( this.desLeagueSelect, this.league );
      let currLeaguePrice = searchPrice( this.currLeagueSelect, this.league );
      if ( desLeaguePrice === currLeaguePrice ) {
        this.leagueWarning = true;
        this.headText = 'current';
        this.middleText = 'equal';
        this.endText = 'desired';
      } else if ( desLeaguePrice < currLeaguePrice ) {
        this.leagueWarning = true;
        this.middleText = 'more';
      } else {
        this.leagueWarning = false;
      }
    },
    currDivisionSelect: function () {
      console.log( this.currDivisionSelect );
    }
  },
});

app.$mount('#app');
