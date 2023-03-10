$(document).ready(function () {
  $('#b1').click(function () {
    $(this).css({
       'background-color':'rgb(143, 148, 219)'
    })
    
    
    $('.mission1').toggle();
    $('.mission2').hide();
    $('.mission3').hide();
    $('.mission4').hide();
    $('#image1').toggle();
    $('#image2').hide();
    $('#image3').hide();
    $('#image4').hide();
    $('#b2').css({'background-color':'white'} );
    $('#b3').css({'background-color':'white'} );
    $('#b4').css({'background-color':'white'} );




  })
  $('#b2').click(function () {
    $(this).css({
      'background-color':'rgb(143, 148, 219)'
   })
    $('.mission2').toggle();
    $('.mission1').hide();
    $('.mission3').hide();
    $('.mission4').hide();
    $('#image2').toggle();
    $('#image1').hide();
    $('#image3').hide();
    $('#image4').hide();
    $('#b1').css({'background-color':'white'} );
    $('#b3').css({'background-color':'white'} );
    $('#b4').css({'background-color':'white'} );



  })
  $('#b3').click(function () {
    $(this).css({
      'background-color':'rgb(143, 148, 219)'
   })
    $('.mission3').toggle();
    $('.mission1').hide();
    $('.mission2').hide();
    $('.mission4').hide();
    $('#image3').toggle();
    $('#image1').hide();
    $('#image2').hide();
    $('#image4').hide();
    $('#b2').css({'background-color':'white'} );
    $('#b4').css({'background-color':'white'} );
    $('#b1').css({'background-color':'white'} );



  })
  $('#b4').click(function () {
    $(this).css({
      'background-color':'rgb(143, 148, 219)'
   })
    $('.mission4').toggle();
    $('.mission1').hide();
    $('.mission2').hide();
    $('.mission3').hide();
    $('#image4').toggle();
    $('#image1').hide();
    $('#image2').hide();
    $('#image3').hide();
    $('#b2').css({'background-color':'white'} );
    $('#b3').css({'background-color':'white'} );
    $('#b1').css({'background-color':'white'} );



  })
})




