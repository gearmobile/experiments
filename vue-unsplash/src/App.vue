<template>
  <div id="app">
    <app-pagination :total="totalPhotos" :perPage="photosPerPage" :curr="currPage" @changePage="fetchPhotos"></app-pagination>
    <section class="grid">
      <div class="grid__item card" v-for="photo in photos">
        <main class="card__body">
          <img :src="photo.urls.small" alt="Photo">
        </main>
        <footer class="card__footer media">
          <img :src="photo.user.profile_image.small" :alt="photo.user.name" class="media__obj">
          <div class="media__body">
            <a :href="photo.user.portfolio_url" target="_blank" v-text="photo.user.name"></a>
          </div>
        </footer>
      </div>
    </section>
  </div>
</template>

<script>
  const apiID = '6f4d3134dae83411f959c6372d6b98f701f812491bee1eff182c067f0811b392';
  import appPagination from './assets/pagination.vue';
  
  export default {
    name: 'app',
    data () {
      return {
        photos: [], // array of images
        totalPhotos: 0, // quantity of images
        photosPerPage: 9, // quantity of images on one page
        currPage: 2 // number of current page
      };
    },
    components: {
      appPagination,
    },
    methods: {
      fetchPhotos(page) { // fetch photos from unsplash
        const options = {
          params: {
            client_id: apiID,
            page: page,
            per_page: this.photosPerPage, // кол-во images, которые нужно получить за один раз
          }
        };
        this.$http.get('https://api.unsplash.com/photos', options).then(response => {
          this.photos = response.body;
          this.totalPhotos = parseInt(response.headers.get('x-total'));
          this.currPage = page;
          console.log(this.photos,this.totalPhotos);
        }, response => {
          console.log(response);
        });
      },
    },
    created() {
      this.fetchPhotos(this.currPage);
    },
  };
</script>

<style lang="scss">
  *,*::before,*::after {
    box-sizing: border-box;
  }

  body {
    background-color: #f5f6f7;
    display: flex;
    justify-content: center;
    padding: 120px 0 80px;
  }

  #app {
    width: 100%;
  }


  /* Галерея */
  .grid {
    width: 100%;
    max-width: 1280px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin: 0 auto;
  }

  .grid__item {
    width: 30%;
    flex-grow: 1;
    flex-shrink: 1;
    margin: 0 20px 40px;
  }


  /* Фотокарточки */
  .card {
    background-color: #fff;
    overflow: hidden;
    box-shadow: 0 1px 2px rgba(0,0,0,.2);
    border-radius: 2px;
    line-height: 0;
    cursor: pointer;
  }

  .card:hover {
    box-shadow: 0 3px 6px rgba(0,0,0,.2)
  }

  .card__body {
    width: 100%;
    height: 215px;
    overflow: hidden;
    background-color: #eee;
  }

  .card__body img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .card__footer {
    width: 100%;
    padding: 10px 15px;
  }

  .media__obj {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #d8d8d8;
    margin-right: 15px;
    float: left;
  }

  .media__body {
    width: 100%;
    height: 32px;
    line-height: 32px;
  }

  .media__body a {
    font-family: Courier, serif;
    font-size: 15px;
    color: #999;
  }

  .media__body a:hover {
    text-decoration: none;
  }


  /* Пагинация */
  .pagination {
    width: 100%;
    height: 44px;
    display: flex;
    justify-content: space-between;
    margin: 30px auto 30px;
    padding: 0 15px;
    max-width: 1280px;
  }

  .pagination__left, .pagination__right {
    width: 20%;
  }

  .pagination__left {
    float: left;
  }

  .pagination__right {
    float: right;
  }

  .pagination__right a {
    float: right;
  }

  .pagination a, .pagination span {
    display: block;
    text-align: center;
    font-family: Helvetica, Arial, sans-serif;
    font-weight: 300;
    line-height: 42px;
    height: 44px;
    color: #999;
    font-size: 18px;
  }

  .pagination a {
    padding: 0 20px;
    max-width: 160px;
    background-color: transparent;
    border-radius: 4px;
    border: 1px solid #ccc;
    text-decoration: none;
    margin: 0 6px;
    transition: all .2s ease-in-out;
  }

  .pagination a:hover, .pagination a.current {
    border-color: #ea4c89;
    color: #ea4c89;
  }

  .pagination__mid {
    display: flex;
    justify-content: center;
    width: 60%;
  }

  .pagination__mid ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .pagination__mid li {
    display: inline-block;
  }
</style>
