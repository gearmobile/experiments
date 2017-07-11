document.addEventListener( 'DOMContentLoaded', function( event ) {

  const inputOne = document.querySelector('#primoResult')
  const buttonOne = document.querySelector('#primo')
  const buttonTwo = document.querySelector('#secondo')

  const pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const passLength = 10
  let password = ''

  function passgen () {
    for (let i = 0; i < passLength; i += 1) {
      password += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    inputOne.value = password
    password = ''
  }

  function resetInput () {
    inputOne.value = ''
  }

  buttonOne.addEventListener('click', passgen, false)
  buttonTwo.addEventListener('click', resetInput, false)

});