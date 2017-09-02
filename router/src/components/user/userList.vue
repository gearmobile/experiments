<template lang="pug">

  v-container
    v-layout( row )
      v-flex( xs12 )
        v-list( two-line )
          v-list-tile( v-for="user in users", :key="user.name", :to="{ name: 'userDetail', params: { userID: user.id }, query: { locale: 'en' } }" )
            v-list-tile-content
              v-list-tile-title
                | {{ user.name }}
              v-list-tile-sub-title
                | {{ user.position }}

</template>

<script>
  export default {
    name: 'user-list',
    data () {
      return {
        users: [
          { id: 1, name: 'John Doe', position: 'CEO' },
          { id: 2, name: 'Mary Dotson', position: 'Designer' },
          { id: 3, name: 'Moe Green', position: 'Frontend' }
        ]
      }
    }
  }
</script>

<style lang="stylus" scoped>
    //
</style>

