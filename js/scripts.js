// Go to folder with github.io page, then type in: python -m SimpleHTTPServer
// Open up browser to: localhost:8000
var a = 10;
console.log(a);

//  https://data.sfgov.org/resource/w969-5mn4.json

var request = new XMLHttpRequest();
request.open('GET', 'data.json', true);

var liz = '';

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    console.log("Success");
    var data = JSON.parse(request.responseText);
    liz = data;
    console.log(data);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();