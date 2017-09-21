<template lang="pug">
  section.info
    .container
      .columns
        
        // COLUMN PRIMARY
        .column.is-7
          h3.info__title
            | Cтатус: название статуса
          table.table
            tbody
              tr
                td.table__title
                  | когда
                td.table__content
                  | 18:00
              tr
                td.table__title
                  | откуда
                td.table__content
                  | Улица академика Королева, 25, подъезд 7
              tr
                td.table__title
                  | куда
                td.table__content
                  | Улица Туполева, 3
              tr
                td.table__title
                  | тариф
                td.table__content
                  | Эконом
              tr
                td.table__title
                  | комментарий
                td.table__content
        
        // COLUMN SECONDARY
        .column.is-5
          h3.info__title
            | Любимые адреса
          table.table
            tbody
              tr
                td.table__title
                  | адрес 1
                td.table__content
                  | Улица Карла Маркса, дом 7, подъезд 2
              tr
                td.table__title
                  | работа
                td.table__content
                  | Улица академика Королева, 25, подъезд 7
              tr
                td.table__title
                  | дом
                td.table__content
                  | Улица Туполева, дом 3
              tr
                td.table__title
                  | петровы
                td.table__content
                  | Улица Иванова, дом 7
      
      // LINKS
      .columns
        .column
          h4.info__subtitle
            | Ссылки:
          .info__wrapper
            a.info__link( href="#" )
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

  .info {
    padding: 9rem 1.5rem;

    &__title {
      color:  #1c0b43;
      font-size: 2rem;
      font-weight: 700;
      line-height: 1.469;
      margin-bottom: 5rem;
    }

    &__subtitle {
      color:  #1c0b43;
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 1;
    }

    &__wrapper {
      margin-top: 1.6rem;
      display: flex;
      justify-content: flex-start;
      align-items: center;
    }

    &__link {
      font-family: $family-monospace;
      color:  #8b61ff;
      font-size: 0.75rem;
      font-weight: 500;
      line-height: 2;
      margin-right: .6rem;
    }
  }

  .table {

    &__title {
      text-transform: uppercase;
      // font-family: RobotoMono;
      font-family: $family-monospace;
      color:  #323c47;
      font-size: 1rem;
      font-weight: 500;
      line-height: 0.875;
    }

    &__content {
      color:  #1c0b43;
      font-size: 1rem;
      font-weight: 400;
      line-height: 0.875;
    }

  }

</style>

