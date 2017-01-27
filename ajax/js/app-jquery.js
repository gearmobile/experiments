const URL1 = 'https://learnwebcode.github.io/json-example/animals-1.json';
const URL2 = 'https://learnwebcode.github.io/json-example/animals-2.json';
const URL3 = 'https://learnwebcode.github.io/json-example/animals-3.json';
const URL4 = 'data.json';

$(document).ready(() => {
  const searchInput = $('#searchInput');
  searchInput.on('keyup', function () {
    const searchValue = new RegExp(searchInput.val(), 'i');
    $.getJSON(URL4, (data) => {
      let output = '<ul class="result" id="result">';
      $.each(data, (key, val) => {
        if (val.name.search(searchValue) !== -1 || val.bio.search(searchValue) !== -1) {
          output += '<li class="result__item">';
          output += '<h2 class="result__title">' + val.name + '</h2>';
          output += '<div class="result__body">';
          output += '<img class="result__image" src="images/' + val.shortname + '_tn.jpg" alt="' + val.name + '">';
          output += '<p class="result__content">' + val.bio + '</p>';
          output += '</div>';
          output += '</li>';
        }
      });
      output += '</ul>';
      $('#main').html(output);
    });
  });
});
