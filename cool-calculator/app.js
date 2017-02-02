// http://eloboostbros.com/elo-boost

function searchPrice( nameKey, nameArray ) {
    for ( let i = 0; i < nameArray.length; i++ ) {
        if ( nameArray[i].name === nameKey ) {
            return nameArray[i].price;
        }
    }
}

function searchPrice_2( nameKey, nameArray ) {
    for ( let i = 0; i < nameArray.length; i++ ) {
        if ( nameArray[i].value === nameKey ) {
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
      { name: 'division I', value: 1, price: 100 },
      { name: 'division II', value: 2, price: 200 },
      { name: 'division III', value: 3, price: 300 },
      { name: 'division IV', value: 4, price: 400 },
      { name: 'division V', value: 5, price: 500 },
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
    currDivisionSelect: 2,

    // desired state ------------
    desLeagueSelect: 'gold',
    desDivisionSelect: 4,

    // server state ------------
    serverState: 'eu west',

    // warnings ---------------
    showWarning: false,
    // divisionWarning: false,

    // placeholders -------------
    headText: '',
    middleText: '',
    endText: '',
    currPlace: ''
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
        this.showWarning = true;
        this.headText = 'desired';
        this.middleText = 'equal';
        this.endText = 'current';
        this.currPlace = 'league';
      } else if ( desLeaguePrice < currLeaguePrice ) {
        this.showWarning = true;
        this.middleText = 'less';
      } else {
        this.showWarning = false;
      }
    },
    desDivisionSelect: function () {
      let desDivisionPrice = searchPrice_2( this.desDivisionSelect, this.division );
      let currDivisionPrice = searchPrice_2( this.currDivisionSelect, this.division );
      if ( desDivisionPrice === currDivisionPrice ) {
        this.showWarning = true;
        this.headText = 'desired';
        this.middleText = 'equal';
        this.endText = 'current';
        this.currPlace = 'division';
      } else if ( desDivisionPrice < currDivisionPrice ) {
        this.showWarning = true;
        this.middleText = 'less';
      } else {
        this.showWarning = false;
      }
    },
    currLeagueSelect: function () {
      let desLeaguePrice = searchPrice( this.desLeagueSelect, this.league );
      let currLeaguePrice = searchPrice( this.currLeagueSelect, this.league );
      console.log( currLeaguePrice, desLeaguePrice );
      if ( currLeaguePrice === desLeaguePrice ) {
        this.showWarning = true;
        this.headText = 'current';
        this.middleText = 'equal';
        this.endText = 'desired';
        this.currPlace = 'league';
      } else if ( currLeaguePrice > desLeaguePrice ) {
        this.showWarning = true;
        this.middleText = 'more';
      } else {
        this.showWarning = false;
      }
    },
    currDivisionSelect: function () {
      let desDivisionPrice = searchPrice_2( this.desDivisionSelect, this.division );
      let currDivisionPrice = searchPrice_2( this.currDivisionSelect, this.division );
      console.log( currDivisionPrice, desDivisionPrice );
      if ( currDivisionPrice === desDivisionPrice ) {
        this.showWarning = true;
        this.headText = 'current';
        this.middleText = 'equal';
        this.endText = 'desired';
        this.currPlace = 'division';
      } else if ( currDivisionPrice > desDivisionPrice ) {
        this.showWarning = true;
        this.middleText = 'more';
      } else {
        this.showWarning = false;
      }
    }
  },
});

app.$mount('#app');
