$( document ).ready( function () {

  const minLength = 8
  const maxLength = 62

  // GET CHARSET TO GENERATE PASSWORD
  function getCharset () {
    let result = ''
    $('input:checked').each( function () {
      result += $(this).val()
    })
    return result
  }

  // GET PASSWORD LENGTH
  function getLength () {
    const length = $('#length').val()
    if ( length > maxLength ) {
      alert('Пароль не может быть длиннее 62 символов')
      return
    } else {
      return length < minLength ? minLength : length
    }
  }

  // GENERATE PASSWORD
  function passgen (pattern, length) {
    let result = ''
    for (let i = 0; i < length; i += 1) {
      result += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    return result
  }

  // GET RESULT
  function getResult () {
    const output = $('#password')
    const result = passgen(getCharset(), getLength())
    output.val(result)
  }

  // COPY RESULT
  function copyResult () {
    const clipboard = new Clipboard('#copy')
  }

  // reset result
  function resetResult () {
    $('#password').val('')
  }

  // FIRE!
  $('#calc').on( 'click', getResult )
  $('#copy').on( 'click', copyResult )
  $('#reset').on( 'click', resetResult )
    
});