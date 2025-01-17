

$(document).ready(function(){

    $('.sponsors-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    
  });

    $('.carousel24').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 2,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

function  displayMemberModel(element){
    var name = element.dataset.name;
    var img = element.dataset.img;
    var tel = element.dataset.tel;
    var email = element.dataset.email;
    var fb = element.dataset.fb;
    var post = element.dataset.post;


    $('.name-responsable').text(name);
    $('.photo-responsable').attr('src', img);
    $('.phone-number-responsable').text("GSM:  "+tel);
    $('.email-responsable').text("email:  "+email);
    $('.fb-responsable').attr('href', fb);
    $('.post-responsable').text(post);
    $('#myModal').modal('show');
}
