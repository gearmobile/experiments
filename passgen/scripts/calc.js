$( document ).ready( function () {

  function getCharset () {
    let result = ''
    $('input:checked').each( function () {
      result += $(this).val()
    })
    return result
  }

  function getLength () {
    let result = $('#length').val() < 8 ? 8 : $('#length').val()
    return result
  }

  function passgen (pattern, length) {
    let result = ''
    for (let i = 0; i < length; i += 1) {
      result += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    return result
  }

  function getResult () {
    const result = passgen(getCharset(), getLength())
    console.info(result)
  }

  $('#calc').on( 'click', getResult )
    
});