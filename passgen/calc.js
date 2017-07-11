$( document ).ready( function () {

  const charsetCollection = [
    { checked: true, type: 'numbers', value: "0123456789" },
    { checked: true, type: 'lowercase', value: "abcdefghijklmnopqrstuvwxyz" },
    { checked: false, type: 'uppercase', value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { checked: false, type: 'symbols', value: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" }
  ]

  function calc () {
    let arr = ''
    $('input:checked').each( function () {
      arr += $(this).val()
    })
    console.log(arr)
  }

  $('#calc').on( 'click', calc )
    
});