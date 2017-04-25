$.ajax({
  url: 'https://api.vk.com/method/friends.search?count=10&fields=photo&access_token=d0883bb8de8de52f8708dc975c263ebe156fec603cc3b4698017df9ff13c414aeafcd19a9f21b8d938ed2&v=5.52',
  method: 'GET',
  dataType: 'JSONP',
  success (data) {
    console.log(data)
  }
})