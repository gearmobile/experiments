document.addEventListener( 'DOMContentLoaded', () => {

  const inputOne = document.querySelector('#primoResult')
  const passLength = document.querySelector('#passLength')
  const buttonOne = document.querySelector('#primo')
  const buttonTwo = document.querySelector('#secondo')

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  function passgen (pattern, length) {
    let result = ''
    for (let i = 0; i < length; i += 1) {
      result += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    return result
  }

  function getResult () {
    const length = passLength.value
    inputOne.value = passgen(charset, length)
  }

  function resetInput () {
    inputOne.value = ''
    passLength.value = ''
  }

  buttonOne.addEventListener('click', getResult, false)
  buttonTwo.addEventListener('click', resetInput, false)

});
