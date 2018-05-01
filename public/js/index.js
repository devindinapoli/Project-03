function createGameSection(data) {
  for (var i = 0; i < data.length; i++) {
    var gameSection = $("<div>");
    gameSection.addClass("game");
    gameSection.attr("id", "game-well-" + data[i].id);
    $(".results-field").append(gameSection);
    $(gameSection).append("<img src=" + data[i].screenshots[0].url + ">");
    $(gameSection).append("<h3>" + data[i].name + "</h3>");
    $(gameSection).append("<p>" + data[i].summary + "</p>");
  }
}

$(document).ready(function() {
  $('.ui.rating').rating({
    initialRating: 3,
    maxRating: 5
  });
  $("#modal1").click(function() {
    $(".modal1").modal("show");
  });
  $(".modal").modal({
    closable: true
  });

  $.get("/search?title=barbie", function(data) {
    console.log(data);
    createGameSection(data);
  });
});

$("#search").on("click", function(event) {
  event.preventDefault();
  $(".results-field").empty();
  var title = $("#gameSearch")
    .val()
    .trim();
  $.get("/search?title=" + title, function(data) {
    console.log(title);
    console.log(data);
    createGameSection(data);
  });
});