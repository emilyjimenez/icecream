$(document).ready(function() {
  var flavors = ["chocolate chip mint", "vanilla", "strawberry", "chocolate peanut butter"]

  flavors.forEach(function(flavor) {
    $(".favflavor").text( "Favorite flavors: " + flavors);
  });
});
