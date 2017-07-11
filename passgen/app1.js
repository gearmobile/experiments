document.addEventListener( 'DOMContentLoaded', function( event ) {

  const inputOne = document.querySelector('#primoResult')
  const buttonOne = document.querySelector('#primo')

  function passgen () {
    const passLength = 10
    const pattern = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    inputOne.value = Math.floor(Math.random() * pattern.length)
  }

  buttonOne.addEventListener('click', passgen, false)

});