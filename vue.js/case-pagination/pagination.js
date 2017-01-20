Vue.component( 'pagination', {
    template: '#pagination-template',
    props: {
        current: {
            type: Number,
            default: 1
        },
        totalPages: {
            type: Number,
            default: 1
        },
        perPage: {
            type: Number,
            default: 9
        }
    },
    computed: {
        getNextPage: function () {
            return this.current + 1;
        },
        getPrevPage: function () {
            return this.current - 1;
        },
        totalPages: function () {
            return Math.ceil( this.photosAmount / this.perPage );
        }
    },
    methods: {
        changePage: function ( pageNumber ) {
            this.$emit( 'page-change', pageNumber );
        }
    }
});