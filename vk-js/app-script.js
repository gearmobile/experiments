function getURL (method, params) {
  if (!method) throw new Error('Enter method')
  params = params || {}
  params['access_token'] = '75314dab362913b7f0df6b71cac9c3d9f705ab7798424917868c28a971d8d197078fed6360ce8fa325305'
  console.log(params)
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

function loadFriends () {
  getRequest('friends.search', { count: 10 }, function (data) { console.log(data) })
}

$('#onGet').on('click', loadFriends)
