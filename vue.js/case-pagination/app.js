
window.addEventListener( 'load', function () {

    var appID = '6f4d3134dae83411f959c6372d6b98f701f812491bee1eff182c067f0811b392';

    var wm = new Vue({
        el: '#container',
        data: {
            photos: [],
            photosAmount: 0,
            photosPerPage: 9,
            currentPage: 1
        },
        methods: {
            fetchPhotos: function ( pageNumber ) {
                var options = {
                    params: {
                        client_id: appID,
                        page: pageNumber,
                        per_page: this.photosPerPage
                    }
                };
                this.$http.get( 'https://api.unsplash.com/photos', options ).then(
                    function ( response ) {
                        this.photos = response.data;
                        this.photosAmount = parseInt( response.headers.get( 'x-total' ) );
                        this.currentPage = pageNumber;
                        console.log( this.photos, this.photosAmount );
                    },
                    function ( error ) {
                        console.log( error );
                    }
                );
            }
        },
        created: function () {
            this.fetchPhotos( this.currentPage );
        }
    });

});

