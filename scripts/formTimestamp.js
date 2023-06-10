window.addEventListener("DOMContentLoaded", function () {
  var currentTimestamp = new Date().toISOString();
  var timestampField = document.getElementById("timestamp");
  timestampField.value = currentTimestamp;
});
