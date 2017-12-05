$(document).on('turbolinks:load', function() {
  title.innerHTML = "Timer client one";

  window.setInterval('publish_time_mqtt()', 10000);

  function time() {
    var time = new Date();
    var n = time.toLocaleTimeString();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
  }
  setInterval(time, 1000);

  $.get({
    url: "time/get_time_now"
  }).done(function(data) {
    console.log(data);
    document.getElementById("time").innerHTML = data;
    console.log(data);
  });


})

function publish_time_mqtt() {

  thisTime = document.getElementById("time").val;
  var vData = {
    time: thisTime
  };

  $.post({
    data: vData,
    url: "time/publish_time_mqtt"
  }).done(function(data) {

  });
}
