$(document).ready(function() {
  $("button#Light").click(function() {
    $("body").removeClass();
    $("body").addClass("lightsOn");
  });
  $("button#Dark").click(function() {
    $("body").removeClass();
    $("body").addClass("lightsOff");
  });
});
