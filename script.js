$('.dashboard').click(function(){
    $('nav .dash').toggleClass("item");
    $('nav .dash li a span').toggleClass("arrow-rotate");
});

$('.profile').click(function(){
    $('nav .profile').toggleClass("item");
    $('nav .profile li a span').toggleClass("arrow-rotate");
});