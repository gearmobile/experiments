window.addEventListener('load', () => {
  // -----------------------------------------------------------
  function loadAJAX() {
    // XMLHttpRequest - XHR
    const URL1 = 'https://learnwebcode.github.io/json-example/animals-1.json';
    const URL2 = 'https://learnwebcode.github.io/json-example/animals-2.json';
    const URL3 = 'https://learnwebcode.github.io/json-example/animals-3.json';
    // -----------------------------------------------------------
    const request = new XMLHttpRequest();
    // -----------------------------------------------------------
    request.open('GET', URL1, true);
    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const data = JSON.parse(this.responseText);
        let output = '<ul>';
        data.forEach((item) => {
          output += '<li>' + item.name + '</li>';
        });
        output += '</ul>';
        document.getElementById('animalInfo').innerHTML = output;
      }
    };
    request.send();
  }
  // --------------------------------------------------------------
  document.getElementById('button').addEventListener('click', () => {
    loadAJAX();
  });
}, false);
