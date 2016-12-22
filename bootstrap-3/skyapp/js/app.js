
$( document ).ready( function () {
    $( ".navbar-default .navbar-nav > li > a" ).on("click", function(){
        $( ".navbar-default .navbar-nav > li" ).find(".active").removeClass("active");
        $(this).parent().addClass("active");
    });
});