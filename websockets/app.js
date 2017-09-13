window.onload = function () {

  const message = document.getElementById('message')
  const status = document.getElementById('status')
  const send = document.getElementById('send')
  const stop = document.getElementById('stop')

  send.addEventListener('click', onSend, false)
  stop.addEventListener('click', onStop, false)

  const socket = new WebSocket('ws://echo.websocket.org')

  /*
    WebSocket.CONNECTING
    WebSocket.OPEN
    WebSocket.CLOSING
    WebSocket.CLOSED
  */

  function onSend () {
    if (socket.readyState === WebSocket.OPEN) {
      socket.send(message.value)
    }
  }

  function onStop () {
    if (socket.readyState === WebSocket.OPEN) {
      socket.close()
    }
  }

  socket.onopen = () => {
    if (socket.readyState === WebSocket.OPEN) {
      status.innerHTML = 'Connection established to address ' + socket.url
    }
  }

  socket.onclose = (error) => {
    const errorCode = error.code
    const errorReason = error.reason;
    const wasClean = error.wasClean;
    if (wasClean) {
      status.innerHTML = 'Connection closed correct'
    } else {
      status.innerHTML = 'Connection closed with error ' + errorReason
    }
  }

  socket.onerror = (error) => {
    console.log('error')
  }

  socket.onmessage = (event) => {
    if (typeof event.data === 'string') {
      status.innerHTML = event.data
    }
  }
}