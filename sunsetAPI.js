fetch("https://api.sunrisesunset.io/json?lat=44.571651&lng=-123.277702&date=today")
.then(response => response.json())
.then(data => console.log(data.results));

//https://sunrisesunset.io/api/