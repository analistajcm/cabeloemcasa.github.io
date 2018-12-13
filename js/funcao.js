$(function (){
    $('.nav-link').click(function(event){
        event.preventDefault();
        var id = $(this).attr('href');
        $('html, body').animate({scrollTop: $(id).offset().top}, 800)
    });
});

$(function (){
    $('.scrollSubir').click(function(){
        $('html, body').animate({scrollTop: 0}, 800);
    });
});

$(function (){
    var barraFixa = $('.barraFixaAgendamento');
    var home = $('.barraFixaAgendamento a');
    $(window).scroll(function (){
        if($(this).scrollTop() > 0 && $(this).width() > 250){
            barraFixa.css({
                'position' : 'fixed',
                'bottom' : '0%',
                'margin' : '0 0 0 30%',
                'width' : '100%'
            });
            home.css({
                'margin' : '0 0 0 25%'
            });
             $('.barraFixaAgendamento').fadeIn();
        }else{
            $('.barraFixaAgendamento').fadeOut();
        }
    });
});

function whatsapp(){
        if(WURFL.is_mobile === true && WURFL.form_factor === "Smartphone"){ window.location.replace("https://api.whatsapp.com/send?phone=5561991128998&text=Ol%C3%A1,%20seja%20bem%20vindo%20ao%20Cabelo%20em%20Casa,%20em%20que%20podemos%20te%20ajudar%20hoje?");                    }
        else{
             window.location.replace("https://web.whatsapp.com/send?phone=5561991128998&text=Ol%C3%A1,%20seja%20bem%20vindo%20ao%20Cabelo%20em%20Casa,%20em%20que%20podemos%20te%20ajudar%20hoje?");   
        }   
}