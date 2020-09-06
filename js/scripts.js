$(document).ready(function(){

    //Efecto menu

    $(".menu a").each(function(index,elemento){
        $(this).css({
            "top": "-200px"
        });

        $(this).animate({
            top: "0"
        },2000 + (index * 700));
    })

    //Efecto header
    if( $(window).width() > 800){
        $("header .textos").css({
            opacity: 0,
            marginTop: "0px"
        });

        $("header .textos").animate({
            opacity: 1,
            marginTop: "-52px"
        }, 1500);

    }
    // efecto scroll
    var acercaDe = $("#acerca-de").offset().top,
        platillos = $("#platillos").offset().top,
        galeria = $("#galeria").offset().top,
        ubicacion = $("#ubicacion").offset().top


    $("#btn-acerca-de").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: acercaDe - 300
        },1000);
    });
    
    $("#btn-menu").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: platillos - 100
        },1000);
    });

    $("#btn-galeria").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: galeria - 50
        },1000);
    });

    $("#btn-ubicacion").on("click",function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: ubicacion +10
        },1000);
    });



});

