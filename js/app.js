// Get data from data/data.json file

fetch('../data/data.json').then(function(response) {
  return response.json();
}).then(function(data) {
  new Chartist.Line('.ct-chart', data);
});
