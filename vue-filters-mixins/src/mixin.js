const appMixin = {
  data() {
    return {
      fruits: ['Apple', 'Lemon', 'Banana', 'Strawberry', 'Mango'],
      filterText: '',
    };
  },
  computed: {
    filteredFruits() {
      return this.fruits.filter((el) => {
        return el.match(this.filterText);
      });
    },
  },
};

export default appMixin;
