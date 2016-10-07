  var makeMiddleEarth = function() {

  // 1.  Create a section tag with an id of "middle-earth".
  var $middleEarth = $("<selection>", {id: 'middle-earth'})

  // 2.  Create an article tag for each land in the lands array.
  //var $land1 = $('<article>', {class: "land"});
  //var $land2 = $('<article>', {class: "land"});
  //var $land3 = $('<article>', {class: "land"});

  for (var i = 0; i < lands.length; i++) {
    var $landArticle = $('<article>',  {class: "land"});
    var $landH1      = $('<h1>' + lands[i] + '</h1>');

    $landArticle.append($landH1);
    $middleEarth.append($landArticle);
}

  // 3.  Give each article tag a class of "land".
  // 4.  Inside each article tag include an h1 tag with the name
  //     of the land as content.
  // 5.  Append each article.land to section#middle-earth.
  // 6.  Append section#middle-earth to the document body.

  $('body').append($middleEarth);
}

// test this in the console (watch the HTML, though) by running:
makeMiddleEarth();
