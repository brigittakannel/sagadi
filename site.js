$(function(){
  $('.button').on('click', function(){
    var notThis = $('.button').not(this);
    notThis.addClass('index');
    notThis.find('.overlay').hide();
    notThis.removeClass('active');
    $(this).find('.overlay').toggle();
    $(this).addClass('clicked');
    $(this).toggleClass('active');
    $(this).removeClass('index');
  })

  var time = new Date().getTime();
   $(document.body).bind("mousedown touch", function(e) {
       time = new Date().getTime();
       console.log(time);
   });

   function refresh() {
       if(new Date().getTime() - time >= 120000)
           window.location.reload(true);
       else
           setTimeout(refresh, 60000);
   }

   setTimeout(refresh, 60000);
})
