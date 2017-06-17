export default {
  capitalize (value) {
    let arr = value.split(' ')
    for (let i = 0; i < arr.length; i += 1) {
      arr[i] = arr[i].slice(0, 1).toUpperCase() + arr[i].slice(1)
    }
    return arr.join(' ')
  }
}
