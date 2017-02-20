<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col-md-8 col-md-offset-2">
        <h2>{{ title }}</h2>
        <div class="input-group">
          <input class="form-control" type="text" placeholder="add shopping list item" v-model="newItem" @keyup.enter="addItem">
          <span class="input-group-btn">
            <button type="button" class="btn btn-default" @click="addItem">add new item</button>
          </span>
        </div>
        <ul class="shopping-list">
          <li v-for="( item, index ) in items" :class="{ removed: item.status }">
            <div class="checkbox">
              <label>
                <input type="checkbox" v-model="item.status">{{ item.name | capitalize }}
              </label>
            </div>
          </li>
        </ul>
        <footer class="footer">
          <em>change the title of your shopping list here</em>
          <input type="text" v-model="title">
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data () {
      return {
        newItem: '',
        items: [
          { name: 'bananas', status: false },
          { name: 'apples', status: true },
          { name: 'mangos', status: false },
          { name: 'potatos', status: false },
        ],
        title: 'My Shopping List',
      }
    },
    methods: {
      addItem() {
        let text = this.newItem.trim();
        if ( text ) {
          this.items.push({
            name: this.newItem,
            status: false
          });
        }
        this.newItem = '';
      }
    },
    filters: {
      capitalize(value) {
        return value.slice(0,1).toUpperCase() + value.slice(1);
      }
    },
  }
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin-top: 60px;
  }
  .shopping-list {
    list-style-type: none;
    padding: 0;
    margin: 0 0 20px;
  }
  .footer {
    text-transform: capitalize;
  }
  .removed {
    text-decoration: line-through;
    font-style: italic;
  }
</style>
