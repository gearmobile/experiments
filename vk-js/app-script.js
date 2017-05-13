function getURL (method, params) {
  if (!method) throw new Error('Enter method')
  params = params || {}
  params['access_token'] = '095b52caf14f7fa6919adc0dafb146b29a204c73952551da0a9d40ed0e3f72b4e6b735fcf57b08476b5f7'
  return 'https://api.vk.com/method/' + method + '?' + $.param(params)
}

function getRequest (method, param, func) {
  $.ajax({
    url: getURL (method, param),
    dataType: 'JSONP',
    method: 'GET',
    success: func
  })
}

function renderFriends (data) {
  let html = ''
  for (let i = 1; i < data.length; i++) {
    const friend = data[i]
    const online = friend.online ? 'Online' : 'Offline'
    html += '<li class="app__item well">' + '<a class="app__link" href="https://vk.com/id' + friend.uid + '" target="_blank">' + '<img class="app__image" src="' + friend.photo_100 + '">' + '<div>' + '<h4>' + friend.first_name + ' ' + friend.last_name + '</h4>' + '<p class="app__online">' + online + '</p>' + '<button class="app__button--write btn btn-default">write message</button>' + '</div>' + '</a>' + '</li>'
  }
  $('#list').html(html)
}

function loadFriends () {
  getRequest('friends.search', { count: 10, fields: 'photo_100,online' }, function (data) {
    renderFriends(data.response)
  })
}

$('#onGet').on('click', loadFriends)
