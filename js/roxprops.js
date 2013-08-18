function displayCBio() {
    $('#cdiv').toggleClass('active-transition-pic');
    $('#ldiv').removeClass('active-transition-pic');
    if($('#cdiv').hasClass('active-transition-pic')) {
        $('#team-info').fadeOut(100);
        $('#lbio-info').fadeOut(100);
        $('#cbio-info').fadeIn(200);
        $('#cdiv').removeClass('span6').removeClass('span3').addClass('span9', 100);
        $('#ldiv').removeClass('span6').addClass('span3', 100);
    } else {
        $('#cbio-info').fadeOut(100);
        $('#team-info').fadeIn(200);
        $('#cdiv').removeClass('span9').addClass('span6');
        $('#ldiv').removeClass('span3').addClass('span6');
    }
}

function displayLBio() {
    $('#ldiv').toggleClass('active-transition-pic');
    $('#cdiv').removeClass('active-transition-pic');
    if($('#ldiv').hasClass('active-transition-pic')) {
        $('#team-info').fadeOut(100);
        $('#cbio-info').fadeOut(100);
        $('#lbio-info').fadeIn(200);
        $('#ldiv').removeClass('span6').removeClass('span3').addClass('span9', 100);
        $('#cdiv').removeClass('span6').addClass('span3', 100);
    } else {
        $('#lbio-info').fadeOut(100);
        $('#team-info').fadeIn(200);
        $('#ldiv').removeClass('span9').addClass('span6');
        $('#cdiv').removeClass('span3').addClass('span6');
    }
}

function displayConceptionPlanning() {
    var cp = ('#cp');
    cp.toggleClass('active-transition-pic');
    $('#ep').removeClass('active-transition-pic');
    $('#pp').removeClass('active-transition-pic');
    if($('#cp').hasClass('active-transition-pic')) {
        $('#pe').fadeOut(100);
        $('#epi').fadeOut(100);
        $('#ppi').fadeOut(100);
        $('#cpi').fadeIn(200);


    }
}