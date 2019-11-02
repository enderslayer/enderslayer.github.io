$(document).ready(function(){
  $('#button').click(function(){
    $.ajax({
      dataType: "json",
      url: "https://dog.ceo/api/breeds/image/random",
      success:function(results){
        console.log(results["message"]);
        $('#image').attr("src", results["message"]);
      }
    });
  });
});

$(document).ready(function(){
  $('#button').click(function(){
    $.ajax({
      dataType: 'json',
      url: 'https://quote-garden.herokuapp.com/quotes/random',
      success:function(results){
        console.log(results['quoteText']);
        $('#quote').text(results['quoteText']);
      }
    });
  });
});
