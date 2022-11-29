////////////////////////////////
// Add elements

// add the collapse/expand button
$('body').prepend("<button id='collapse'>➖</button>");
$('body').prepend("<button id='expand'>➕</button>");
// add the invert button
$('body').prepend("<button id='invert'>Invert</button>");
// add the scroll up button
$('body').prepend("<span id='scroll-button' onclick='window.scroll(0, 0);'>🡅</span>");

// Add elements end
////////////////////////////////

////////////////////////////////
// color inversion logic start
// var body = document.getElementsByTagName('body')[0];
var anchors = document.getElementsByTagName('a');

// toggle body colours
function toggleInversion(toggler) {
    if (toggler) {
        $('body').attr('class', 'invert');
        $('a').attr('class', 'a-invert');
        $('button').addClass('btn-invert');
    }
    else {
        $('body').attr('class', '');
        $('a').attr('class', '');
        $('button').removeClass('btn-invert');
    }
};

function storageRead() {
    var input = localStorage.getItem("invertColour");
    if (input == "yes") {
        return true;
    }
    else {
        return false;
    }
}

function storageSave(current) {
    if (current) {
        localStorage.setItem("invertColour", "yes");
    }
    else {
        localStorage.setItem("invertColour", "no");
    }
}
// get elements by id
function getID(id) {
    return document.getElementById(id);
};

var button = getID("invert");

button.onclick = function() {
    var current = storageRead();
    current = !current;
    toggleInversion(current);
    // save setting
    storageSave(current);
};

toggleInversion(storageRead());  // invert the colour of the page based on the local storage data
// color inversion logic end
////////////////////////////////

////////////////////////////////
// scrolling logic
var scroll_button = getID('scroll-button');

function checkHeight() {
    var y = window.pageYOffset;
    if (y > 250) {
        scroll_button.style.display = 'block';
    } else {
        scroll_button.style.display = 'none';
    }
}

window.onscroll = function() {checkHeight();};
// scrolling logic end
////////////////////////////////

////////////////////////////////
// jQuery hiding
var slidingSpeed = 250;

// add toggler buttons to all h2
$('h2').each(function() {
    $(this).append("<button class='toggler' isup='0' affects='.outline-3, .outline-text-2, #text-table-of-contents'>➖</button>");
});

// add toggler buttons to all h3
$('h3').each(function() {
    $(this).append("<button class='toggler toggler-h3' isup='0' affects='.outline-4, .outline-text-3, ol, ul'>➖</button>");
});


// collapse/expand all
$("#collapse").click(function() {
    $(".toggler:not(.toggler-h3)").each(function() {
        var $parent = $(this).closest('div');
        collapse($parent, this);
    });
});

$("#expand").click(function() {
    $(".toggler:not(.toggler-h3)").each(function() {
        var $parent = $(this).closest('div');
        expand($parent, this);
    });
});

// collapse/expand individual
$(".toggler").click(function() {
    var $parent = $(this).closest('div');
    toggleContent($parent, this);
});

// expand/collapse section helper
function toggleContent($parent, $button) {
    var isUp = $($button).attr('isup');

    if (isUp === '0') {
        collapse($parent, $button);
    }
    else {
        expand($parent, $button);
    }
}

function collapse($parent, $button) {
    var affects = $($button).attr('affects');

    $($parent).find(affects).slideUp(slidingSpeed);
    $($button).attr('isup', '1');
    $($button).text("➕");
}

function expand($parent, $button) {
    var affects = $($button).attr('affects');

    $($parent).find(affects).slideDown(slidingSpeed);
    $($button).attr('isup', '0');
    $($button).text("➖");
}
// jQuery hiding ends
////////////////////////////////
