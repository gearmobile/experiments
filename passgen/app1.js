document.addEventListener( 'DOMContentLoaded', function( event ) {

  const inputOne = document.querySelector('#primoResult')
  const buttonOne = document.querySelector('#primo')
  const pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  const passLength = 10
  let password = ''

  function passgen () {
    password += pattern.charAt(Math.floor(Math.random() * pattern.length))
    inputOne.value = password
  }

  buttonOne.addEventListener('click', passgen, false)

});