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
  for (var i = 0; i < data.length; i++) {
    var date = new Date(data[i].time);
    var day = date.getDate();
    console.log(day);
  }
});

// ------------------------------------------------ Graph
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

var chart = new Chartist.Line('.ct-chart', {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  series: [
    [5, -4, 3, 7, 20, 10, 3, 4, 8, -10, 6, -8]
  ]
}, {
  showArea: true,
  axisY: {
    onlyInteger: true
  },
  plugins: [
    Chartist.plugins.ctThreshold({
      threshold: 4
    })
  ]
});
