// api key : 82565a74ce3e39072e71ac0895d785d9

const url =
  "http://api.openweathermap.org/data/2.5/weather?q=Visakhapatnam&appid=82565a74ce3e39072e71ac0895d785d9";
// Make a request for a user with a given ID
axios
  .get(
    "http://api.openweathermap.org/data/2.5/weather?q=Visakhapatnam&appid=82565a74ce3e39072e71ac0895d785d9"
  )
  .then(function (response) {
    // handle success
    document.getElementById(
      "message"
    ).innerText = `it is now ${response.data.main.temp}C`;
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .finally(function () {
    console.log("all done");
    // always executed
  });
