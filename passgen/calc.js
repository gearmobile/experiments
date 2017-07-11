$( document ).ready( () => {

  const calcButton = $('#calc')

  const charsetCollection = [
    { checked: true, type: 'numbers', value: "0123456789" },
    { checked: true, type: 'lowercase', value: "abcdefghijklmnopqrstuvwxyz" },
    { checked: false, type: 'uppercase', value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { checked: false, type: 'symbols', value: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" }
  ]

  function calc () {
    const items = $('.random__list input:checked')
    console.log(items)
  }

  calcButton.on( 'click', calc )
    
});