$(document).ready(function(){
  $('.imgs').on('click', function(){
    var discount = Math.floor( (Math.random()*5) + 5 ),
        msg = '<p>Your discount ' + discount + '%</p>';
      $(this).append(msg);

  });
});
