<template lang="pug">
  section.hero.is-medium
    .hero-body
      .container
        .columns
          .column
            h3.title.is-4
              | Статус: <span>название статуса</span>
            table.table
              tbody
                tr
                  td.is-uppercase когда
                  td 18:00
                tr
                  td.is-uppercase откуда
                  td улица академика Королева, 25, подъезд 7
                tr
                  td.is-uppercase куда
                  td Улица Туполева, 3
                tr
                  td.is-uppercase тариф
                  td Эконом
                tr
                  td.is-uppercase комментарий
                  td
          .column
            h3.title.is-4
              | Любимые адреса
            table.table
              tbody
                tr
                  td.is-uppercase адрес 1
                  td Улица Карла Маркса, дом 7, подъезд 2
                tr
                  td.is-uppercase работа
                  td улица академика Королева, 25, подъезд 7
                tr
                  td.is-uppercase дом
                  td Улица Туполева, дом 3
                tr
                  td.is-uppercase петровы
                  td Улица Туполева, дом 7
        .columns
          .column
            h4.title.is-5
              | Ссылки:
            a( href="#" )
              | запись разговора
</template>

<script>
export default {
  name: 'info',
  data () {
    return {
      //
    }
  }
}
</script>

<style lang="scss" scoped>
  //
</style>

