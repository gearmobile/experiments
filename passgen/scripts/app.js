document.addEventListener( 'DOMContentLoaded', () => {

  const inputOne = document.querySelector('#primoResult')
  const passLength = document.querySelector('#passLength')
  const buttonOne = document.querySelector('#primo')
  const buttonTwo = document.querySelector('#secondo')

  // ---------------

  const calcButton = document.querySelector('#calc')

  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'

  const charsetCollection = [
    { checked: true, type: 'numbers', value: "0123456789" },
    { checked: true, type: 'lowercase', value: "abcdefghijklmnopqrstuvwxyz" },
    { checked: false, type: 'uppercase', value: "ABCDEFGHIJKLMNOPQRSTUVWXYZ" },
    { checked: false, type: 'symbols', value: "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~" }
  ]

  function passgen (pattern, length) {
    let result = ''
    for (let i = 0; i < length; i += 1) {
      result += pattern.charAt(Math.floor(Math.random() * pattern.length))
    }
    return result
  }

  function getResult () {
    const length = passLength.value
    if (!length) {
      alert('Введите длину пароля')
      return
    }
    inputOne.value = passgen(charset, length)
  }

  function resetInput () {
    inputOne.value = ''
    passLength.value = ''
  }

  buttonOne.addEventListener('click', getResult, false)
  buttonTwo.addEventListener('click', resetInput, false)

});
