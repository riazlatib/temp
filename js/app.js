// Get data from data/data.json file

/*
fetch('/temp/data/data.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {

    var data = {
      labels: ['60', '61', '62', '63', '64', '65', '66', '67', '68', '69', '70', '71', '72', '73', '74', '75', '76', '77', '78', '79', '80', '81', '82', '83', '84', '85'],
      series: data.map(function(t) {
        return t.temp;
      })
    };

    var chart = new Chartist.Bar('.ct-chart', data, {
      distributeSeries: true
    });
  });
*/
// -------------------------------------------- //
/*
fetch('/temp/data/test.json')
.then(function(response) {
  return response.json();
})
.then(function(users) {

  var data = {
    labels: users.map(function(user) {
      console.log(user.name);
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
*/

// ----------------------------------------------- Data

fetch('/temp/data/data.json')
.then(function(response) {
  return response.json();
})
.then(function(data) {
  var dates = [];
  var temps = [];

  for (var i = 0; i < data.length; i++) {
    var temp = data[i].temp;
    var date = new Date(data[i].time);
    var day = date.getDate();
    var hour = date.getHours();

    if (day != dates[dates.length - 1]) {
      dates.push(day);
      temps.push(temp); // random temp from this day
    } else {
      // console.log(hour);
    }
  }

  var data = {
    labels: dates,
    series: [[66, 65, 55, 58, 81, 64, 68, 69, 71, 66, 63, 61, 58, 54, 59, 63, 67, 69, 71, 74, 79, 81, 76, 71]]
  };

  var defaultOptions = {
    threshold: 0,
    classNames: {
      aboveThreshold: 'ct-threshold-above',
      belowThreshold: 'ct-threshold-below'
    },
    maskNames: {
      aboveThreshold: 'ct-threshold-mask-above',
      belowThreshold: 'ct-threshold-mask-below'
    }
  };

  var chart = new Chartist.Line('.ct-chart', data,
  {
    showArea: true,
    axisY: {
      onlyInteger: true
    },
    plugins: [
      Chartist.plugins.ctThreshold({
        threshold: 74
      })
    ]
  });
});

// ------------------------------------------------ Graph
