
$(function() {
    console.log('ready Jquery');
   /* Je clique sur le bouton */
   /* on ajoute la classe show a UL */
   $('#menus').click(function(){
        console.log('OK');
        $('#banana ul').toggleClass('show');



   });
});