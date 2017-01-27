window.addEventListener( 'DOMContentLoaded', function () {
  // -----------------------------------------------------------
  const URL1 = 'https://learnwebcode.github.io/json-example/animals-1.json';
  const URL2 = 'https://learnwebcode.github.io/json-example/animals-2.json';
  const URL3 = 'https://learnwebcode.github.io/json-example/animals-3.json';
  // -----------------------------------------------------------
  let request = new XMLHttpRequest();
  // -----------------------------------------------------------
  request.open( 'GET', URL1, true );
  request.onreadystatechange = function () {
    if ( request.readyState === 4 && request.status === 200 ) {
      let data = JSON.parse( request.responseText );
      console.log( data );
    }
  };
  request.send();
}, false);