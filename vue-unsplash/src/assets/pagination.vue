<template>
  <div class="pagination">
    <div class="pagination__left">
      <a href="#" v-if="hasPrev()" @click="changePage(prevPage)">previous</a>
    </div>
    <div class="pagination__mid">
      <span>{{ curr }} from {{ totalPages }}</span>
    </div>
    <div class="pagination__right">
      <a href="#" v-if="hasNext()" @click="changePage(nextPage)">next</a>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        //
      };
    },
    props: {
      curr: {
        type: Number,
        default: 1,
      },
      perPage: {
        type: Number,
        default: 9,
      },
      total: {
        type: Number,
        default: 0,
      }
    },
    computed: {
      nextPage() {
        return this.curr + 1;
      },
      prevPage() {
        return this.curr - 1;
      },
      totalPages() {
        return Math.ceil(this.total / this.perPage);
      },
    },
    methods: {
      changePage(page) {
        this.$emit('changePage', page);
      },
      hasPrev() {
        return this.curr > 1;
      },
      hasNext() {
        return this.curr < this.total;
      },
    },
  };
</script>
