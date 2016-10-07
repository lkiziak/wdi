console.log("friendship");

$('#addHome').removeClass("btn-danger").addClass('btn-success');

var $newLink = $( '<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>' );

//Can write it like this or $('body').append($newLink);
$newLink.appendTo('body');

//Using an underscore opens a new ink in a different tab
$('#zillowLink').attr('target', "_blank");

//to remove an attribute:   $('#zillowLink').removeAttr('target');
$('#addHome').on('click', function(evt) {
  console.log(evt, this);
})

//Delegation: can write it this way or down below:
//$('ul').on('click', 'li', function(){
//  console.log(this);
//})

//remove a row. the command 'closest' goes up the tree.
//Also .find refers to descendants (several levels) and .children is for one child (one level)
$('#homes').on('click', 'button', function() {
  $(this).closest('tr').remove();
});
//the word THIS is simple but confusing


//to hide slowly use fadeOut
$('#homes').on('click', 'button', function() {
  $(this).closest('tr').fadeOut(2000, function() {
    $(this).remove();
  })
});


//Add New Homes code

var newHomes = [
  {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
  {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
  {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
  {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
];


$('#addHome').on('click', function(evt) {
    //pick a home
  var home = newHomes.pop();

  //build the string for the new table row
  var newRow = "<tr><td>" + home.address + "</td><td>" + home.sf + "</td><td>" + home.bedrooms + "</td><td>" +
    home.baths + "</td><td>" + home.price +
    "</td><td><button class='btn btn-xs btn-danger'>Remove</button></td></tr>";
$('#homes tbody').append(newRow);
})






