export default {
  // DEFINE METHODS
  methods: {
    getNoun (number, singular, few, plural) {
      number = Math.abs(number)
      number %= 100
      if (number >= 5 && number <= 20) {
          return plural
      }
      number %= 10;
      if (number == 1) {
          return singular
      }
      if (number >= 2 && number <= 4) {
          return few
      }
      return plural
    }
  },
  // DEFINE FILTERS
  filters: {
    lowercase (value) {
      return value.toLowerCase()
    },
    uppercase (value) {
      return value.toUpperCase()
    }
  }
}
