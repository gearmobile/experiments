const URL1 = 'https://learnwebcode.github.io/json-example/animals-1.json';
const URL2 = 'https://learnwebcode.github.io/json-example/animals-2.json';
const URL3 = 'https://learnwebcode.github.io/json-example/animals-3.json';


$(document).ready(() => {
  $.getJSON(URL1, (data) => {
    let output = '<ul>';
    $.each(data, (key, val) => {
      output += '<li>' + val.name + '</li>';
    });
    output += '</ul>';
    $('#load').on('click', () => {
      $('#content').append(output);
    });
  });
});
