window.onready = function() {
    var setToActiveFunction = function(id) {
        $('.navitem').removeClass('active');
        $('#'+id).addClass('active');
    }
    var currentPage = $(location).attr('pathname').split('.')[0].substr(1);
    setToActiveFunction(currentPage);
}

function displayCBio() {
    $('#cdiv').toggleClass('active-transition-pic');
    $('#ldiv').removeClass('active-transition-pic');
    if($('#cdiv').hasClass('active-transition-pic')) {
        $('#team-info').fadeOut(100);
        $('#lbio-info').fadeOut(100);
        $('#cbio-info').fadeIn(200);
        $('#cdiv').removeClass('span6').removeClass('span3').addClass('span9', 100);
        $('#ldiv').removeClass('span6').removeClass('span9').addClass('span3', 100);
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
        $('#cdiv').removeClass('span6').removeClass('span9').addClass('span3', 100);
    } else {
        $('#lbio-info').fadeOut(100);
        $('#team-info').fadeIn(200);
        $('#ldiv').removeClass('span9').addClass('span6');
        $('#cdiv').removeClass('span3').addClass('span6');
    }
}

function expandAndContractPackageSpans(clickedDiv, remainingDiv1, remainingDiv2, allShouldBeEqual) {
    if(!allShouldBeEqual) {
        clickedDiv.removeClass('span4').removeClass('span3').addClass('span6');
        remainingDiv1.removeClass('span6').removeClass('span4').addClass('span3');
        remainingDiv2.removeClass('span6').removeClass('span4').addClass('span3');
    } else {
        clickedDiv.removeClass('span6').removeClass('span3').addClass('span4');
        remainingDiv1.removeClass('span6').removeClass('span3').addClass('span4');
        remainingDiv2.removeClass('span6').removeClass('span3').addClass('span4');
    }
}

function displayPackage(clickedPackage, cPInfo, remainingPackage1, rP1Info, remainingPackage2, rP2Info) {
    clickedPackage.toggleClass('active-transition-pic');
    remainingPackage1.removeClass('active-transition-pic');
    remainingPackage2.removeClass('active-transition-pic');
    if(clickedPackage.hasClass('active-transition-pic')) {
        $('#pe').fadeOut(100);
        rP1Info.fadeOut(100);
        rP2Info.fadeOut(100);
        cPInfo.fadeIn(200);
        expandAndContractPackageSpans(clickedPackage, remainingPackage1, remainingPackage2, false);
    } else {
        cPInfo.fadeOut(100);
        $('#pe').fadeIn(200);
        expandAndContractPackageSpans(clickedPackage, remainingPackage1, remainingPackage2, true);
    }
}

function displayConceptionPlanning() {
    displayPackage($('#cp'), $('#cpi'), $('#ep'), $('#epi'), $('#pp'), $('#ppi'));
}

function displayEventPlanning() {
    displayPackage($('#ep'), $('#epi'), $('#cp'), $('#cpi'), $('#pp'), $('#ppi'));
}

function displayPremiumProposal() {
    displayPackage($('#pp'), $('#ppi'), $('#ep'), $('#epi'), $('#cp'), $('#cpi'));
}

