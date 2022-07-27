$( document ).ready(function() {
    console.log( "ready!" );
    $('div#about_me').removeClass('hide')
});

$('a.tabs').click(function(){
    var ids=$(this).attr('id');
    $('div.righty').addClass('hide');
    $('div#'+ids).removeClass('hide');
});