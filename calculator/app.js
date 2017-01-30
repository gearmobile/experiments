// http://infportal.ru/calc/kalkulyator-nalogov-s-zarplaty.html
new Vue({
  el: '#app',
  data: {
    NDFL: 13,
    PFR: 22,
    FFOMS: 5.1,
    FCC: 2.9,
    // FCC2: 0.2,
    FCC2: 4,
    salary: 0,
    salaryPure: 0,
    fssAmount: 0.2,
    ndflAmount: 0,
    pfrAmount: 0,
    ffomsAmount: 0,
    fccAmount: 0,
    fccAmount2: 0,
    commonSumEmployer: 0,
    commonSumWorker: 0,
    children: false,
    childrenInvalidStatus: false,
    childrenInvalid: 0,
    otherExpensesStatus: false,
    otherExpenses: 0,
    fot: 0,
    fotStatus: false,
  },
  methods: {
    calcPure: function () {
      this.ndflAmount = ((this.salary * this.NDFL) / 100);
      this.salaryPure = (this.salary - this.ndflAmount);
      this.pfrAmount = ((this.salary * this.PFR) / 100);
      this.ffomsAmount = ((this.salary * this.FFOMS) / 100);
      this.fccAmount = ((this.salary * this.FCC) / 100);
      this.fccAmount2 = ((this.salary * this.FCC2) / 100);
      this.commonSumEmployer = (this.pfrAmount + this.ffomsAmount + this.fccAmount + this.fccAmount2);
      this.commonSumWorker = this.ndflAmount;
    },
    allClear() {
      this.salary = 0;
      this.salaryPure = 0;
      this.ndflAmount = 0;
    },
  },
});
