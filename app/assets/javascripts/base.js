$(document).on('turbolinks:load', function() {
  title.innerHTML = "Timer client one";

  // function time() {
  //   var time = new Date();
  //   var n = time.toLocaleTimeString();
  //   document.getElementById("time").innerHTML = time.toLocaleTimeString();
  // }
  // setInterval(time, 1000);
  //
  setInterval('publish_time_mqtt()', 1000);

  $.get({
    url: "time/get_time_now"
  }).done(function(data) {
    console.log(data);
    document.getElementById("time").innerHTML = data;
  });

})

function publish_time_mqtt() {

  var thisTime = $('#time').get(0).textContent;
  console.log(thisTime);
  var vData = {
    time: thisTime
  };

  $.post({
    data: vData,
    url: "time/publish_time_mqtt"
  }).done(function(data) {

  });
}
