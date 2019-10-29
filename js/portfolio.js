// **************************
// MENU CONTROLLER
// **************************

// toggle the menu wrapper
function toggleWrapper() {
    $("#toggle-button-wrapper").toggleClass("toggled");
    $("#menu-toggle").toggleClass("toggled");
};

// toggle the main menu
$("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#wrapper").toggleClass("toggled");
    toggleWrapper();
});



// **************************
// BIG PICTURE CONTROLLER
// **************************

// get elements by id
function getID(id) {
    return document.getElementById(id);
};

// get elements by tag name
function getClasses(t) {
    return document.getElementsByClassName(t);
};

// BigPicture handler to easily attach event listeners to pictures
function BigPicHandler(e) {
    BigPicture({
        el: e,
        imgSrc: e.src
    });
};

// attach BigPicHandler to all images
var imgs = getClasses("bigpic");

for (var i = 0; i < imgs.length; i++) {
    imgs[i].onclick = function() {
        BigPicHandler(this);
    };
}

// attach a youtube video to the image (for the tutorial section)
var vid = getID('yt-vid');

if (vid) {
    vid.onclick = function() {
        BigPicture({
            el: vid,
            ytSrc: 'rp37BZuSE68'
        });
    };
}
