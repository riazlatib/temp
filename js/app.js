// Get data from data/data.json file

fetch('/temp/data/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(users) {
    var data = {
      labels: users.map(function(user) {
        return user.name;
      }),
      series: users.map(function(user) {
        return user.name.length;
      })
    };

    var chart = new Chartist.Bar('.ct-chart', data, {
      distributeSeries: true
    });
  });
