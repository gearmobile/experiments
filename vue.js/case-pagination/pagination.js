Vue.component( 'pagination', {
    template: '#pagination-template',
    props: {
        current: {
            type: Number,
            default: 1
        }
    },
    computed: {
        getNextPage: function () {
            return this.current + 1;
        },
        getPrevPage: function () {
            return this.current - 1;
        }
    },
    methods: {
        changePage: function ( pageNumber ) {
            this.$emit( 'page-change', pageNumber );
        }
    }
});