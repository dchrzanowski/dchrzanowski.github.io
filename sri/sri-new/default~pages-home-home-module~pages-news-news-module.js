(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~pages-home-home-module~pages-news-news-module"],{

/***/ "./node_modules/bigpicture/index.js":
/*!******************************************!*\
  !*** ./node_modules/bigpicture/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// BigPicture.js | license MIT | henrygd.me/bigpicture

// trigger element used to open popup
var el;

// set to true after first interaction
var initialized;

// container element holding html needed for script
var container;

// currently active display element (image, video, youtube / vimeo iframe container)
var displayElement;

// popup image element
var displayImage;

// popup video element
var displayVideo;

// popup audio element
var displayAudio;

// container element to hold youtube / vimeo iframe
var iframeContainer;

// iframe to hold youtube / vimeo player
var iframeSiteVid;

// store requested image source
var imgSrc;

// button that closes the container
var closeButton;

// youtube / vimeo video id
var siteVidID;

// keeps track of loading icon display state
var isLoading;

// timeout to check video status while loading
var checkMediaTimeout;

// loading icon element
var loadingIcon;

// caption element
var caption;

// caption content element
var captionText;

// store caption content
var captionContent;

// hide caption button element
var captionHideButton;

// open state for container element
var isOpen;

// gallery open state
var galleryOpen;

// used during close animation to avoid triggering timeout twice
var isClosing;

// array of prev viewed image urls to check if cached before showing loading icon
var imgCache = [];

// store whether image requested is remote or local
var remoteImage;

// store animation opening callbacks
var animationStart;
var animationEnd;

// store changeGalleryImage callback
var onChangeImage;

// gallery left / right icons
var rightArrowBtn;

var leftArrowBtn;

// position of gallery
var galleryPosition;

// hold active gallery els / image src
var galleryEls;

// counter element
var galleryCounter;

// store images in gallery that are being loaded
var preloadedImages = {};

// whether device supports touch events
var supportsTouch;

// options object
var opts;

// Save bytes in the minified version
var appendEl = 'appendChild';
var createEl = 'createElement';
var removeEl = 'removeChild';

function BigPicture (options) {
	// initialize called on initial open to create elements / style / event handlers
	initialized || initialize();

	// clear currently loading stuff
	if (isLoading) {
		clearTimeout(checkMediaTimeout);
		removeContainer();
	}

	opts = options;

	// store video id if youtube / vimeo video is requested
	siteVidID = options.ytSrc || options.vimeoSrc;

	// store optional callbacks
	animationStart = options.animationStart;
	animationEnd = options.animationEnd;
	onChangeImage = options.onChangeImage;

	// set trigger element
	el = options.el;

	// wipe existing remoteImage state
	remoteImage = false;

	// set caption if provided
	captionContent = el.getAttribute('data-caption');

	if (options.gallery) {
		makeGallery(options.gallery, options.position);
	} else if (siteVidID || options.iframeSrc) {
		// if vimeo, youtube, or iframe video
		// toggleLoadingIcon(true)
		displayElement = iframeContainer;
		createIframe();
	} else if (options.imgSrc) {
		// if remote image
		remoteImage = true;
		imgSrc = options.imgSrc;
		!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
		displayElement = displayImage;
		displayElement.src = imgSrc;
	} else if (options.audio) {
		// if direct video link
		toggleLoadingIcon(true);
		displayElement = displayAudio;
		displayElement.src = options.audio;
		checkMedia('audio file');
	} else if (options.vidSrc) {
		// if direct video link
		toggleLoadingIcon(true);
		if (options.dimensions) {
			changeCSS(displayVideo, ("width:" + (options.dimensions[0]) + "px"));
		}
		makeVidSrc(options.vidSrc);
		checkMedia('video');
	} else {
		// local image / background image already loaded on page
		displayElement = displayImage;
		// get img source or element background image
		displayElement.src =
			el.tagName === 'IMG'
				? el.src
				: window
						.getComputedStyle(el)
						.backgroundImage.replace(/^url|[(|)|'|"]/g, '');
	}

	// add container to page
	container[appendEl](displayElement);
	document.body[appendEl](container);
	return {
		close: close,
		next: function () { return updateGallery(1); },
		prev: function () { return updateGallery(-1); },
	}
}

// create all needed methods / store dom elements on first use
function initialize() {
	var startX;
	// return close button elements
	function createCloseButton(className) {
		var el = document[createEl]('button');
		el.className = className;
		el.innerHTML =
			'<svg viewBox="0 0 48 48"><path d="M28 24L47 5a3 3 0 1 0-4-4L24 20 5 1a3 3 0 1 0-4 4l19 19L1 43a3 3 0 1 0 4 4l19-19 19 19a3 3 0 0 0 4 0v-4L28 24z"/></svg>';
		return el
	}

	function createArrowSymbol(direction, style) {
		var el = document[createEl]('button');
		el.className = 'bp-lr';
		el.innerHTML =
			'<svg viewBox="0 0 129 129" height="70" fill="#fff"><path d="M88.6 121.3c.8.8 1.8 1.2 2.9 1.2s2.1-.4 2.9-1.2a4.1 4.1 0 0 0 0-5.8l-51-51 51-51a4.1 4.1 0 0 0-5.8-5.8l-54 53.9a4.1 4.1 0 0 0 0 5.8l54 53.9z"/></svg>';
		changeCSS(el, style);
		el.onclick = function (e) {
			e.stopPropagation();
			updateGallery(direction);
		};
		return el
	}

	// add style - if you want to tweak, run through beautifier
	var style = document[createEl]('STYLE');
	style.innerHTML =
		'#bp_caption,#bp_container{bottom:0;left:0;right:0;position:fixed;opacity:0}#bp_container>*,#bp_loader{position:absolute;right:0;z-index:10}#bp_container,#bp_caption,#bp_container svg{pointer-events:none}#bp_container{top:0;z-index:9999;background:rgba(0,0,0,.7);opacity:0;transition:opacity .35s}#bp_loader{top:0;left:0;bottom:0;display:flex;align-items:center;cursor:wait;background:0;z-index:9}#bp_loader svg{width:50%;max-width:300px;max-height:50%;margin:auto;animation:bpturn 1s infinite linear}#bp_aud,#bp_container img,#bp_sv,#bp_vid{user-select:none;max-height:96%;max-width:96%;top:0;bottom:0;left:0;margin:auto;box-shadow:0 0 3em rgba(0,0,0,.4);z-index:-1}#bp_sv{background:#111}#bp_sv svg{width:66px}#bp_caption{font-size:.9em;padding:1.3em;background:rgba(15,15,15,.94);color:#fff;text-align:center;transition:opacity .3s}#bp_aud{width:650px;top:calc(50% - 20px);bottom:auto;box-shadow:none}#bp_count{left:0;right:auto;padding:14px;color:rgba(255,255,255,.7);font-size:22px;cursor:default}#bp_container button{position:absolute;border:0;outline:0;background:0;cursor:pointer;transition:all .1s}#bp_container>.bp-x{padding:0;height:41px;width:41px;border-radius:100%;top:8px;right:14px;opacity:.8;line-height:1}#bp_container>.bp-x:focus,#bp_container>.bp-x:hover{background:rgba(255,255,255,.2)}.bp-x svg,.bp-xc svg{height:21px;width:20px;fill:#fff;vertical-align:top;}.bp-xc svg{width:16px}#bp_container .bp-xc{left:2%;bottom:100%;padding:9px 20px 7px;background:#d04444;border-radius:2px 2px 0 0;opacity:.85}#bp_container .bp-xc:focus,#bp_container .bp-xc:hover{opacity:1}.bp-lr{top:50%;top:calc(50% - 130px);padding:99px 0;width:6%;background:0;border:0;opacity:.4;transition:opacity .1s}.bp-lr:focus,.bp-lr:hover{opacity:.8}@keyframes bpf{50%{transform:translatex(15px)}100%{transform:none}}@keyframes bpl{50%{transform:translatex(-15px)}100%{transform:none}}@keyframes bpfl{0%{opacity:0;transform:translatex(70px)}100%{opacity:1;transform:none}}@keyframes bpfr{0%{opacity:0;transform:translatex(-70px)}100%{opacity:1;transform:none}}@keyframes bpfol{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(-70px)}}@keyframes bpfor{0%{opacity:1;transform:none}100%{opacity:0;transform:translatex(70px)}}@keyframes bpturn{0%{transform:none}100%{transform:rotate(360deg)}}@media (max-width:600px){.bp-lr{font-size:15vw}}';
	document.head[appendEl](style);

	// create container element
	container = document[createEl]('DIV');
	container.id = 'bp_container';
	container.onclick = close;
	closeButton = createCloseButton('bp-x');
	container[appendEl](closeButton);
	// gallery swipe listeners
	if ('ontouchstart' in window) {
		supportsTouch = true;
		container.ontouchstart = function (ref) {
			var changedTouches = ref.changedTouches;

			startX = changedTouches[0].pageX;
		};
		container.ontouchmove = function (e) {
			e.preventDefault();
		};
		container.ontouchend = function (ref) {
			var changedTouches = ref.changedTouches;

			if (!galleryOpen) {
				return
			}
			var distX = changedTouches[0].pageX - startX;
			// swipe right
			distX < -30 && updateGallery(1);
			// swipe left
			distX > 30 && updateGallery(-1);
		};
	}

	// create display image element
	displayImage = document[createEl]('IMG');

	// create display video element
	displayVideo = document[createEl]('VIDEO');
	displayVideo.id = 'bp_vid';
	displayVideo.setAttribute('playsinline', true);
	displayVideo.controls = true;
	displayVideo.loop = true;

	// create audio element
	displayAudio = document[createEl]('audio');
	displayAudio.id = 'bp_aud';
	displayAudio.controls = true;
	displayAudio.loop = true;

	// create gallery counter
	galleryCounter = document[createEl]('span');
	galleryCounter.id = 'bp_count';

	// create caption elements
	caption = document[createEl]('DIV');
	caption.id = 'bp_caption';
	captionHideButton = createCloseButton('bp-xc');
	captionHideButton.onclick = toggleCaption.bind(null, false);
	caption[appendEl](captionHideButton);
	captionText = document[createEl]('SPAN');
	caption[appendEl](captionText);
	container[appendEl](caption);

	// left / right arrow icons
	rightArrowBtn = createArrowSymbol(1, 'transform:scalex(-1)');
	leftArrowBtn = createArrowSymbol(-1, 'left:0;right:auto');

	// create loading icon element
	loadingIcon = document[createEl]('DIV');
	loadingIcon.id = 'bp_loader';
	loadingIcon.innerHTML =
		'<svg viewbox="0 0 32 32" fill="#fff" opacity=".8"><path d="M16 0a16 16 0 0 0 0 32 16 16 0 0 0 0-32m0 4a12 12 0 0 1 0 24 12 12 0 0 1 0-24" fill="#000" opacity=".5"/><path d="M16 0a16 16 0 0 1 16 16h-4A12 12 0 0 0 16 4z"/></svg>';
	// create youtube / vimeo container
	iframeContainer = document[createEl]('DIV');
	iframeContainer.id = 'bp_sv';

	// create iframe to hold youtube / vimeo player
	iframeSiteVid = document[createEl]('IFRAME');
	iframeSiteVid.setAttribute('allowfullscreen', true);
	iframeSiteVid.allow = 'autoplay; fullscreen';
	iframeSiteVid.onload = function () { return iframeContainer[removeEl](loadingIcon); };
	changeCSS(
		iframeSiteVid,
		'border:0;position:absolute;height:100%;width:100%;left:0;top:0'
	);
	iframeContainer[appendEl](iframeSiteVid);

	// display image bindings for image load and error
	displayImage.onload = open;
	displayImage.onerror = open.bind(null, 'image');

	window.addEventListener('resize', function () {
		// adjust loader position on window resize
		galleryOpen || (isLoading && toggleLoadingIcon(true));
		// adjust iframe dimensions
		displayElement === iframeContainer && updateIframeDimensions();
	});

	// close container on escape key press and arrow buttons for gallery
	document.addEventListener('keyup', function (ref) {
		var keyCode = ref.keyCode;

		keyCode === 27 && isOpen && close();
		if (galleryOpen) {
			keyCode === 39 && updateGallery(1);
			keyCode === 37 && updateGallery(-1);
			keyCode === 38 && updateGallery(10);
			keyCode === 40 && updateGallery(-10);
		}
	});
	// prevent scrolling with arrow keys if gallery open
	document.addEventListener('keydown', function (e) {
		var usedKeys = [37, 38, 39, 40];
		if (galleryOpen && ~usedKeys.indexOf(e.keyCode)) {
			e.preventDefault();
		}
	});

	// trap focus within conainer while open
	document.addEventListener(
		'focus',
		function (e) {
			if (isOpen && !container.contains(e.target)) {
				e.stopPropagation();
				closeButton.focus();
			}
		},
		true
	);

	// all done
	initialized = true;
}

// return transform style to make full size display el match trigger el size
function getRect() {
	var ref = el.getBoundingClientRect();
	var top = ref.top;
	var left = ref.left;
	var width = ref.width;
	var height = ref.height;
	var leftOffset = left - (container.clientWidth - width) / 2;
	var centerTop = top - (container.clientHeight - height) / 2;
	var scaleWidth = el.clientWidth / displayElement.clientWidth;
	var scaleHeight = el.clientHeight / displayElement.clientHeight;
	return ("transform:translate3D(" + leftOffset + "px, " + centerTop + "px, 0) scale3D(" + scaleWidth + ", " + scaleHeight + ", 0)")
}

function makeVidSrc(source) {
	if (Array.isArray(source)) {
		displayElement = displayVideo.cloneNode();
		source.forEach(function (src) {
			var source = document[createEl]('SOURCE');
			source.src = src;
			source.type = "video/" + (src.match(/.(\w+)$/)[1]);
			displayElement[appendEl](source);
		});
	} else {
		displayElement = displayVideo;
		displayElement.src = source;
	}
}

function makeGallery(gallery, position) {
	var galleryAttribute = opts.galleryAttribute || 'data-bp';
	if (Array.isArray(gallery)) {
		// is array of images
		galleryPosition = position || 0;
		galleryEls = gallery;
		captionContent = gallery[galleryPosition].caption;
	} else {
		// is element selector or nodelist
		galleryEls = [].slice.call(
			typeof gallery === 'string'
				? document.querySelectorAll((gallery + " [" + galleryAttribute + "]"))
				: gallery
		);
		// find initial gallery position
		var elIndex = galleryEls.indexOf(el);
		galleryPosition =
			position === 0 || position ? position : elIndex !== -1 ? elIndex : 0;
		// make gallery object w/ els / src / caption
		galleryEls = galleryEls.map(function (el) { return ({
			el: el,
			src: el.getAttribute(galleryAttribute),
			caption: el.getAttribute('data-caption'),
		}); });
	}
	// show loading icon if needed
	remoteImage = true;
	// set initial src to imgSrc so it will be cached in open func
	imgSrc = galleryEls[galleryPosition].src;
	!~imgCache.indexOf(imgSrc) && toggleLoadingIcon(true);
	if (galleryEls.length > 1) {
		// if length is greater than one, add gallery stuff
		container[appendEl](galleryCounter);
		galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
		if (!supportsTouch) {
			// add arrows if device doesn't support touch
			container[appendEl](rightArrowBtn);
			container[appendEl](leftArrowBtn);
		}
	} else {
		// gallery is one, just show without clutter
		galleryEls = false;
	}
	displayElement = displayImage;
	// set initial image src
	displayElement.src = imgSrc;
}

function updateGallery(movement) {
	var galleryLength = galleryEls.length - 1;

	// only allow one change at a time
	if (isLoading) {
		return
	}

	// return if requesting out of range image
	var isEnd =
		(movement > 0 && galleryPosition === galleryLength) ||
		(movement < 0 && !galleryPosition);
	if (isEnd) {
		// if beginning or end of gallery, run end animation
		if (!opts.loop) {
			changeCSS(displayImage, '');
			setTimeout(
				changeCSS,
				9,
				displayImage,
				("animation:" + (movement > 0 ? 'bpl' : 'bpf') + " .3s;transition:transform .35s")
			);
			return
		}
		// if gallery is looped, adjust position to beginning / end
		galleryPosition = movement > 0 ? -1 : galleryLength + 1;
	}

	// normalize position
	galleryPosition = Math.max(
		0,
		Math.min(galleryPosition + movement, galleryLength)
	)

	// load images before and after for quicker scrolling through pictures
	;[galleryPosition - 1, galleryPosition, galleryPosition + 1].forEach(
		function (position) {
			// normalize position
			position = Math.max(0, Math.min(position, galleryLength));
			// cancel if image has already been preloaded
			if (preloadedImages[position]) { return }
			var src = galleryEls[position].src;
			// create image for preloadedImages
			var img = document[createEl]('IMG');
			img.addEventListener('load', addToImgCache.bind(null, src));
			img.src = src;
			preloadedImages[position] = img;
		}
	);
	// if image is loaded, show it
	if (preloadedImages[galleryPosition].complete) {
		return changeGalleryImage(movement)
	}
	// if not, show loading icon and change when loaded
	isLoading = true;
	changeCSS(loadingIcon, 'opacity:.4;');
	container[appendEl](loadingIcon);
	preloadedImages[galleryPosition].onload = function () {
		galleryOpen && changeGalleryImage(movement);
	};
	// if error, store error object in el array
	preloadedImages[galleryPosition].onerror = function () {
		galleryEls[galleryPosition] = {
			error: 'Error loading image',
		};
		galleryOpen && changeGalleryImage(movement);
	};
}

function changeGalleryImage(movement) {
	if (isLoading) {
		container[removeEl](loadingIcon);
		isLoading = false;
	}
	var activeEl = galleryEls[galleryPosition];
	if (activeEl.error) {
		// show alert if error
		alert(activeEl.error);
	} else {
		// add new image, animate images in and out w/ css animation
		var oldimg = container.querySelector('img:last-of-type');
		displayImage = displayElement = preloadedImages[galleryPosition];
		changeCSS(
			displayImage,
			("animation:" + (movement > 0 ? 'bpfl' : 'bpfr') + " .35s;transition:transform .35s")
		);
		changeCSS(oldimg, ("animation:" + (movement > 0 ? 'bpfol' : 'bpfor') + " .35s both"));
		container[appendEl](displayImage);
		// update el for closing animation
		if (activeEl.el) {
			el = activeEl.el;
		}
	}
	// update counter
	galleryCounter.innerHTML = (galleryPosition + 1) + "/" + (galleryEls.length);
	// show / hide caption
	toggleCaption(galleryEls[galleryPosition].caption);
	// execute onChangeImage callback
	onChangeImage && onChangeImage([displayImage, galleryEls[galleryPosition]]);
}

// create video iframe
function createIframe() {
	var url;
	var prefix = 'https://';
	var suffix = 'autoplay=1';

	// create appropriate url
	if (opts.ytSrc) {
		url = prefix + "www.youtube" + (opts.ytNoCookie ? '-nocookie' : '') + ".com/embed/" + siteVidID + "?html5=1&rel=0&playsinline=1&" + suffix;
	} else if (opts.vimeoSrc) {
		url = prefix + "player.vimeo.com/video/" + siteVidID + "?" + suffix;
	} else if (opts.iframeSrc) {
		url = opts.iframeSrc;
	}

	// add loading spinner to iframe container
	changeCSS(loadingIcon, '');
	iframeContainer[appendEl](loadingIcon);

	// set iframe src to url
	iframeSiteVid.src = url;

	updateIframeDimensions();

	setTimeout(open, 9);
}

function updateIframeDimensions() {
	var height;
	var width;

	// handle height / width / aspect / max width for iframe
	var windowHeight = window.innerHeight * 0.95;
	var windowWidth = window.innerWidth * 0.95;
	var windowAspect = windowHeight / windowWidth;

	var ref = opts.dimensions || [1920, 1080];
	var dimensionWidth = ref[0];
	var dimensionHeight = ref[1];

	var iframeAspect = dimensionHeight / dimensionWidth;

	if (iframeAspect > windowAspect) {
		height = Math.min(dimensionHeight, windowHeight);
		width = height / iframeAspect;
	} else {
		width = Math.min(dimensionWidth, windowWidth);
		height = width * iframeAspect;
	}

	iframeContainer.style.cssText += "width:" + width + "px;height:" + height + "px;";
}

// timeout to check video status while loading
function checkMedia(errMsg) {
	if (~[1, 4].indexOf(displayElement.readyState)) {
		open();
		// short timeout to to make sure controls show in safari 11
		setTimeout(function () {
			displayElement.play();
		}, 99);
	} else if (displayElement.error) {
		open(errMsg);
	} else {
		checkMediaTimeout = setTimeout(checkMedia, 35, errMsg);
	}
}

// hide / show loading icon
function toggleLoadingIcon(bool) {
	// don't show loading icon if noLoader is specified
	if (opts.noLoader) {
		return
	}
	// bool is true if we want to show icon, false if we want to remove
	// change style to match trigger element dimensions if we want to show
	bool &&
		changeCSS(
			loadingIcon,
			("top:" + (el.offsetTop) + "px;left:" + (el.offsetLeft) + "px;height:" + (el.clientHeight) + "px;width:" + (el.clientWidth) + "px")
		);
	// add or remove loader from DOM
	el.parentElement[bool ? appendEl : removeEl](loadingIcon);
	isLoading = bool;
}

// hide & show caption
function toggleCaption(captionContent) {
	if (captionContent) {
		captionText.innerHTML = captionContent;
	}
	changeCSS(
		caption,
		("opacity:" + (captionContent ? "1;pointer-events:auto" : '0'))
	);
}

function addToImgCache(url) {
	!~imgCache.indexOf(url) && imgCache.push(url);
}

// animate open of image / video; display caption if needed
function open(err) {
	// hide loading spinner
	isLoading && toggleLoadingIcon();

	// execute animationStart callback
	animationStart && animationStart();

	// check if we have an error string instead of normal event
	if (typeof err === 'string') {
		removeContainer();
		return opts.onError
			? opts.onError()
			: alert(("Error: The requested " + err + " could not be loaded."))
	}

	// if remote image is loaded, add url to imgCache array
	remoteImage && addToImgCache(imgSrc);

	// transform displayEl to match trigger el
	displayElement.style.cssText += getRect();

	// fade in container
	changeCSS(container, "opacity:1;pointer-events:auto");

	// set animationEnd callback to run after animation ends (cleared if container closed)
	if (animationEnd) {
		animationEnd = setTimeout(animationEnd, 410);
	}

	isOpen = true;

	galleryOpen = !!galleryEls;

	// enlarge displayEl, fade in caption if hasCaption
	setTimeout(function () {
		displayElement.style.cssText += 'transition:transform .35s;transform:none';
		captionContent && setTimeout(toggleCaption, 250, captionContent);
	}, 60);
}

// close active display element
function close(e) {
	var target = e ? e.target : container;
	var clickEls = [
		caption,
		captionHideButton,
		displayVideo,
		displayAudio,
		captionText,
		leftArrowBtn,
		rightArrowBtn,
		loadingIcon ];

	// blur to hide close button focus style
	target.blur();

	// don't close if one of the clickEls was clicked or container is already closing
	if (isClosing || ~clickEls.indexOf(target)) {
		return
	}

	// animate closing
	displayElement.style.cssText += getRect();
	changeCSS(container, 'pointer-events:auto');

	// timeout to remove els from dom; use variable to avoid calling more than once
	setTimeout(removeContainer, 350);

	// clear animationEnd timeout
	clearTimeout(animationEnd);

	isOpen = false;
	isClosing = true;
}

// remove container / display element from the DOM
function removeContainer() {
	// clear src of displayElement (or iframe if display el is iframe container)
	// needs to be done before removing container in IE
	var srcEl =
		displayElement === iframeContainer ? iframeSiteVid : displayElement;
	srcEl.removeAttribute('src');

	// remove container from DOM & clear inline style
	document.body[removeEl](container);
	container[removeEl](displayElement);
	changeCSS(container, '');
	changeCSS(displayElement, '');

	// remove caption
	toggleCaption(false);

	if (galleryOpen) {
		// remove all gallery stuff
		var images = container.querySelectorAll('img');
		for (var i = 0; i < images.length; i++) {
			container[removeEl](images[i]);
		}
		isLoading && container[removeEl](loadingIcon);
		container[removeEl](galleryCounter);
		galleryOpen = galleryEls = false;
		preloadedImages = {};
		supportsTouch || container[removeEl](rightArrowBtn);
		supportsTouch || container[removeEl](leftArrowBtn);
		// in case displayimage changed, we need to update event listeners
		displayImage.onload = open;
		displayImage.onerror = open.bind(null, 'image');
	}

	// run close callback
	opts.onClose && opts.onClose();

	isClosing = isLoading = false;
}

// style helper functions
function changeCSS(ref, newStyle) {
	var style = ref.style;

	style.cssText = newStyle;
}

module.exports = BigPicture;


/***/ }),

/***/ "./node_modules/ngx-animate-in/__ivy_ngcc__/ngx-animate-in.js":
/*!********************************************************************!*\
  !*** ./node_modules/ngx-animate-in/__ivy_ngcc__/ngx-animate-in.js ***!
  \********************************************************************/
/*! exports provided: AnimateInModule, AnimateInDirective, ObserverServiceConfig, ObserverService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateInModule", function() { return AnimateInModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimateInDirective", function() { return AnimateInDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverServiceConfig", function() { return ObserverServiceConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ObserverService", function() { return ObserverService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");






class ObserverServiceConfig {
}
class ObserverService {
    /**
     * Assigns the user config if they wish to
     * override the defaults by using forRoot
     * @param {?} config
     */
    constructor(config) {
        this.options = {
            rootMargin: '0px',
            threshold: 0.1
        };
        this.supported = false;
        this.watching = [];
        this.supported = 'IntersectionObserver' in window &&
            'IntersectionObserverEntry' in window;
        if (config) {
            this.options = Object.assign({}, this.options, config);
        }
        this.observer = this.supported ? new IntersectionObserver(this.handleEvent.bind(this), this.options) : null;
    }
    /**
     * Handles events made by the observer
     * @param {?} entries
     * @return {?}
     */
    handleEvent(entries) {
        entries.forEach((entry) => {
            const /** @type {?} */ target = this.watching.find((element) => {
                return element.element === entry.target;
            });
            if (entry.isIntersecting) {
                this.observer.unobserve(entry.target);
                target.callback(true);
            }
        });
    }
    /**
     * Adds the target to our array so we can call its
     * call back when it enters the viewport
     * @param {?} el
     * @param {?} callback
     * @return {?}
     */
    addTarget(el, callback) {
        this.observer.observe(el);
        this.watching.push({
            element: el,
            callback: callback
        });
    }
    /**
     * @return {?}
     */
    isSupported() {
        return this.supported;
    }
}
ObserverService.ɵfac = function ObserverService_Factory(t) { return new (t || ObserverService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ObserverServiceConfig, 8)); };
ObserverService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ObserverService, factory: ObserverService.ɵfac });
/**
 * @nocollapse
 */
ObserverService.ctorParameters = () => [
    { type: ObserverServiceConfig, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] },] },
];
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ObserverService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: ObserverServiceConfig, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }] }]; }, null); })();

class AnimateInDirective {
    /**
     * @param {?} _observer
     * @param {?} el
     * @param {?} animationBuilder
     */
    constructor(_observer, el, animationBuilder) {
        this._observer = _observer;
        this.el = el;
        this.animationBuilder = animationBuilder;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        let /** @type {?} */ animation;
        if (this.animateInAnimation !== null && this.animateInAnimation !== undefined) {
            animation = this.animationBuilder.build(this.animateInAnimation);
        }
        else {
            animation = this.animationBuilder.build([
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 0, transform: 'translateX(-100px)' }),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])('1200ms cubic-bezier(0.35, 0, 0.25, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["style"])({ opacity: 1, transform: 'translateX(0)' })),
            ]);
        }
        if (this._observer.isSupported()) {
            this.player = animation.create(this.el.nativeElement);
            this.player.init();
            this._observer.addTarget(this.el.nativeElement, this.startAnimating.bind(this));
        }
    }
    /**
     * Builds and triggers the animation
     * when it enters the viewport
     * @param {?} inViewport
     * @return {?}
     */
    startAnimating(inViewport) {
        if (inViewport) {
            this.player.play();
        }
    }
}
AnimateInDirective.ɵfac = function AnimateInDirective_Factory(t) { return new (t || AnimateInDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ObserverService), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"])); };
AnimateInDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: AnimateInDirective, selectors: [["", "animateIn", ""]], inputs: { animateInAnimation: "animateInAnimation" } });
/**
 * @nocollapse
 */
AnimateInDirective.ctorParameters = () => [
    { type: ObserverService, },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
    { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"], },
];
AnimateInDirective.propDecorators = {
    'animateInAnimation': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateInDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[animateIn]'
            }]
    }], function () { return [{ type: ObserverService }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_animations__WEBPACK_IMPORTED_MODULE_2__["AnimationBuilder"] }]; }, { animateInAnimation: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();

class AnimateInModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('AnimateInModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: AnimateInModule,
            providers: [
                {
                    provide: ObserverServiceConfig, useValue: config
                }
            ]
        };
    }
}
AnimateInModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AnimateInModule });
AnimateInModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AnimateInModule_Factory(t) { return new (t || AnimateInModule)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](AnimateInModule, 12)); }, providers: [
        ObserverService
    ], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        ]] });
/**
 * @nocollapse
 */
AnimateInModule.ctorParameters = () => [
    { type: AnimateInModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"] },] },
];
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AnimateInModule, { declarations: function () { return [AnimateInDirective]; }, imports: function () { return [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]]; }, exports: function () { return [AnimateInDirective]; } }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnimateInModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                ],
                exports: [
                    AnimateInDirective,
                ],
                declarations: [
                    AnimateInDirective
                ],
                providers: [
                    ObserverService
                ]
            }]
    }], function () { return [{ type: AnimateInModule, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["SkipSelf"]
            }] }]; }, null); })();

/**
 * Generated bundle index. Do not edit.
 */



//# sourceMappingURL=ngx-animate-in.js.map

/***/ }),

/***/ "./src/app/components/components-common/attention/attention.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/components-common/attention/attention.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AttentionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttentionComponent", function() { return AttentionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function AttentionComponent_a_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", ctx_r0.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.buttonText, " ");
} }
function AttentionComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx_r2.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.buttonText, " ");
} }
class AttentionComponent {
    constructor() { }
    ngOnInit() {
        if (this.noRouting === undefined) {
            this.noRouting = false;
        }
    }
}
AttentionComponent.ɵfac = function AttentionComponent_Factory(t) { return new (t || AttentionComponent)(); };
AttentionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AttentionComponent, selectors: [["app-attention"]], inputs: { noRouting: "noRouting", text: "text", link: "link", buttonText: ["button-text", "buttonText"] }, decls: 9, vars: 3, consts: [[1, "container-fluid", "bg-primary-gradient", "attention-banner"], [1, "row", "text-center"], [1, "col-12", "col-sm-8", "m-auto", "pb-4", "pb-sm-0"], [1, "m-0", "d-block", "text-white"], [1, "col-12", "col-sm-4", "m-auto"], ["class", "btn btn-lg btn-white", 3, "routerLink", 4, "ngIf", "ngIfElse"], ["externalLink", ""], [1, "btn", "btn-lg", "btn-white", 3, "routerLink"], ["target", "_blank", 1, "btn", "btn-lg", "btn-white", 3, "href"]], template: function AttentionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h4", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AttentionComponent_a_6_Template, 2, 2, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AttentionComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.text, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noRouting)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]], styles: [".attention-banner[_ngcontent-%COMP%] {\n  padding-top: 60px;\n  padding-bottom: 60px;\n}\n\n.btn-white[_ngcontent-%COMP%] {\n  border: 1px solid white;\n  color: white;\n  transition: background-color 0.3s ease;\n  border-radius: 4px;\n}\n\n.btn-white[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.2);\n}\n\nh4[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  font-weight: bold !important;\n}\n\na[_ngcontent-%COMP%] {\n  border: 2px solid white !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbW1vbi9hdHRlbnRpb24vYXR0ZW50aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSxvQkFBQTtBQUNKOztBQUVBO0VBQ0ksdUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksMENBQUE7QUFDSjs7QUFFQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQ0FBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbW1vbi9hdHRlbnRpb24vYXR0ZW50aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF0dGVudGlvbi1iYW5uZXIge1xuICAgIHBhZGRpbmctdG9wOiA2MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA2MHB4O1xufVxuXG4uYnRuLXdoaXRlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB3aGl0ZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4uYnRuLXdoaXRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwyNTUsMjU1LCAwLjIpO1xufVxuXG5oNCwgYSB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQgIWltcG9ydGFudDtcbn1cblxuYSB7XG4gICAgYm9yZGVyOiAycHggc29saWQgd2hpdGUgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttentionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-attention',
                templateUrl: './attention.component.html',
                styleUrls: ['./attention.component.scss']
            }]
    }], function () { return []; }, { noRouting: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['noRouting']
        }], text: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['text']
        }], link: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['link']
        }], buttonText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['button-text']
        }] }); })();


/***/ }),

/***/ "./src/app/components/components-common/components-common.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/components/components-common/components-common.module.ts ***!
  \**************************************************************************/
/*! exports provided: ComponentsCommonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComponentsCommonModule", function() { return ComponentsCommonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _attention_attention_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attention/attention.component */ "./src/app/components/components-common/attention/attention.component.ts");
/* harmony import */ var _content_spinner_content_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./content-spinner/content-spinner.component */ "./src/app/components/components-common/content-spinner/content-spinner.component.ts");






class ComponentsCommonModule {
}
ComponentsCommonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ComponentsCommonModule });
ComponentsCommonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ComponentsCommonModule_Factory(t) { return new (t || ComponentsCommonModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ComponentsCommonModule, { declarations: [_attention_attention_component__WEBPACK_IMPORTED_MODULE_3__["AttentionComponent"],
        _content_spinner_content_spinner_component__WEBPACK_IMPORTED_MODULE_4__["ContentSpinnerComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_attention_attention_component__WEBPACK_IMPORTED_MODULE_3__["AttentionComponent"],
        _content_spinner_content_spinner_component__WEBPACK_IMPORTED_MODULE_4__["ContentSpinnerComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ComponentsCommonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _attention_attention_component__WEBPACK_IMPORTED_MODULE_3__["AttentionComponent"],
                    _content_spinner_content_spinner_component__WEBPACK_IMPORTED_MODULE_4__["ContentSpinnerComponent"],
                ],
                exports: [
                    _attention_attention_component__WEBPACK_IMPORTED_MODULE_3__["AttentionComponent"],
                    _content_spinner_content_spinner_component__WEBPACK_IMPORTED_MODULE_4__["ContentSpinnerComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/components-common/content-spinner/content-spinner.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/components-common/content-spinner/content-spinner.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: ContentSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentSpinnerComponent", function() { return ContentSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContentSpinnerComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContentSpinnerComponent.ɵfac = function ContentSpinnerComponent_Factory(t) { return new (t || ContentSpinnerComponent)(); };
ContentSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentSpinnerComponent, selectors: [["app-content-spinner"]], decls: 4, vars: 0, consts: [[1, "bubblingG"], ["id", "bubblingG_1"], ["id", "bubblingG_2"], ["id", "bubblingG_3"]], template: function ContentSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["[_nghost-%COMP%] {\n  position: relative;\n  top: 0;\n  left: 0;\n  width: 100%;\n  padding-bottom: 20vh;\n  padding-top: 10vh;\n}\n\n.bubblingG[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 178px;\n  height: 89px;\n  margin: auto;\n}\n\n.bubblingG[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: inline-block;\n  vertical-align: middle;\n  width: 20px;\n  height: 20px;\n  margin: 48px auto;\n  background: black;\n  border-radius: 98px;\n  -o-border-radius: 98px;\n  -ms-border-radius: 98px;\n  -webkit-border-radius: 98px;\n  -moz-border-radius: 98px;\n  animation: bubblingG 1.5s infinite alternate;\n  -o-animation: bubblingG 1.5s infinite alternate;\n  -ms-animation: bubblingG 1.5s infinite alternate;\n  -webkit-animation: bubblingG 1.5s infinite alternate;\n  -moz-animation: bubblingG 1.5s infinite alternate;\n}\n\n#bubblingG_1[_ngcontent-%COMP%] {\n  animation-delay: 0s;\n  -o-animation-delay: 0s;\n  -ms-animation-delay: 0s;\n  -webkit-animation-delay: 0s;\n  -moz-animation-delay: 0s;\n}\n\n#bubblingG_2[_ngcontent-%COMP%] {\n  animation-delay: 0.45s;\n  -o-animation-delay: 0.45s;\n  -ms-animation-delay: 0.45s;\n  -webkit-animation-delay: 0.45s;\n  -moz-animation-delay: 0.45s;\n}\n\n#bubblingG_3[_ngcontent-%COMP%] {\n  animation-delay: 0.9s;\n  -o-animation-delay: 0.9s;\n  -ms-animation-delay: 0.9s;\n  -webkit-animation-delay: 0.9s;\n  -moz-animation-delay: 0.9s;\n}\n\n@keyframes bubblingG {\n  0% {\n    width: 20px;\n    height: 20px;\n    background-color: black;\n    transform: translateY(0);\n  }\n  100% {\n    width: 46px;\n    height: 46px;\n    background-color: white;\n    transform: translateY(-20px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbW1vbi9jb250ZW50LXNwaW5uZXIvY29udGVudC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDQyxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQUNEOztBQUVBO0VBQ0MscUJBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0Msc0JBQUE7RUFDQSx1QkFBQTtFQUNBLDJCQUFBO0VBQ0Esd0JBQUE7RUFDRCw0Q0FBQTtFQUNDLCtDQUFBO0VBQ0EsZ0RBQUE7RUFDQSxvREFBQTtFQUNBLGlEQUFBO0FBQ0Y7O0FBRUE7RUFDQyxtQkFBQTtFQUNDLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxzQkFBQTtFQUNDLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSw4QkFBQTtFQUNBLDJCQUFBO0FBQ0Y7O0FBRUE7RUFDQyxxQkFBQTtFQUNDLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSw2QkFBQTtFQUNBLDBCQUFBO0FBQ0Y7O0FBSUE7RUFDQztJQUNDLFdBQUE7SUFDQSxZQUFBO0lBQ0EsdUJBQUE7SUFDQSx3QkFBQTtFQURBO0VBSUQ7SUFDQyxXQUFBO0lBQ0EsWUFBQTtJQUNBLHVCQUFBO0lBQ0EsNEJBQUE7RUFGQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jb21wb25lbnRzLWNvbW1vbi9jb250ZW50LXNwaW5uZXIvY29udGVudC1zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMjB2aDtcbiAgICBwYWRkaW5nLXRvcDogMTB2aDtcbn1cblxuLmJ1YmJsaW5nRyB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0d2lkdGg6MTc4cHg7XG5cdGhlaWdodDo4OXB4O1xuXHRtYXJnaW46IGF1dG87XG59XG5cbi5idWJibGluZ0cgc3BhbiB7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0d2lkdGg6IDIwcHg7XG5cdGhlaWdodDogMjBweDtcblx0bWFyZ2luOiA0OHB4IGF1dG87XG5cdGJhY2tncm91bmQ6IHJnYigwLDAsMCk7XG5cdGJvcmRlci1yYWRpdXM6IDk4cHg7XG5cdFx0LW8tYm9yZGVyLXJhZGl1czogOThweDtcblx0XHQtbXMtYm9yZGVyLXJhZGl1czogOThweDtcblx0XHQtd2Via2l0LWJvcmRlci1yYWRpdXM6IDk4cHg7XG5cdFx0LW1vei1ib3JkZXItcmFkaXVzOiA5OHB4O1xuXHRhbmltYXRpb246IGJ1YmJsaW5nRyAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcblx0XHQtby1hbmltYXRpb246IGJ1YmJsaW5nRyAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcblx0XHQtbXMtYW5pbWF0aW9uOiBidWJibGluZ0cgMS41cyBpbmZpbml0ZSBhbHRlcm5hdGU7XG5cdFx0LXdlYmtpdC1hbmltYXRpb246IGJ1YmJsaW5nRyAxLjVzIGluZmluaXRlIGFsdGVybmF0ZTtcblx0XHQtbW96LWFuaW1hdGlvbjogYnViYmxpbmdHIDEuNXMgaW5maW5pdGUgYWx0ZXJuYXRlO1xufVxuXG4jYnViYmxpbmdHXzEge1xuXHRhbmltYXRpb24tZGVsYXk6IDBzO1xuXHRcdC1vLWFuaW1hdGlvbi1kZWxheTogMHM7XG5cdFx0LW1zLWFuaW1hdGlvbi1kZWxheTogMHM7XG5cdFx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDBzO1xuXHRcdC1tb3otYW5pbWF0aW9uLWRlbGF5OiAwcztcbn1cblxuI2J1YmJsaW5nR18yIHtcblx0YW5pbWF0aW9uLWRlbGF5OiAwLjQ1cztcblx0XHQtby1hbmltYXRpb24tZGVsYXk6IDAuNDVzO1xuXHRcdC1tcy1hbmltYXRpb24tZGVsYXk6IDAuNDVzO1xuXHRcdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAwLjQ1cztcblx0XHQtbW96LWFuaW1hdGlvbi1kZWxheTogMC40NXM7XG59XG5cbiNidWJibGluZ0dfMyB7XG5cdGFuaW1hdGlvbi1kZWxheTogMC45cztcblx0XHQtby1hbmltYXRpb24tZGVsYXk6IDAuOXM7XG5cdFx0LW1zLWFuaW1hdGlvbi1kZWxheTogMC45cztcblx0XHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMC45cztcblx0XHQtbW96LWFuaW1hdGlvbi1kZWxheTogMC45cztcbn1cblxuXG5cbkBrZXlmcmFtZXMgYnViYmxpbmdHIHtcblx0MCUge1xuXHRcdHdpZHRoOiAyMHB4O1xuXHRcdGhlaWdodDogMjBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDAsMCk7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0d2lkdGg6IDQ2cHg7XG5cdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHR9XG59XG5cbkAtby1rZXlmcmFtZXMgYnViYmxpbmdHIHtcblx0MCUge1xuXHRcdHdpZHRoOiAyMHB4O1xuXHRcdGhlaWdodDogMjBweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigwLDAsMCk7XG5cdFx0LW8tdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuXHR9XG5cblx0MTAwJSB7XG5cdFx0d2lkdGg6IDQ2cHg7XG5cdFx0aGVpZ2h0OiA0NnB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwyNTUsMjU1KTtcblx0XHQtby10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHR9XG59XG5cbkAtbXMta2V5ZnJhbWVzIGJ1YmJsaW5nRyB7XG5cdDAlIHtcblx0XHR3aWR0aDogMjBweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMCwwLDApO1xuXHRcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblxuXHQxMDAlIHtcblx0XHR3aWR0aDogNDZweDtcblx0XHRoZWlnaHQ6IDQ2cHg7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LDI1NSwyNTUpO1xuXHRcdC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHR9XG59XG5cbkAtd2Via2l0LWtleWZyYW1lcyBidWJibGluZ0cge1xuXHQwJSB7XG5cdFx0d2lkdGg6IDIwcHg7XG5cdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwKTtcblx0XHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHdpZHRoOiA0NnB4O1xuXHRcdGhlaWdodDogNDZweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XG5cdFx0LXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHR9XG59XG5cbkAtbW96LWtleWZyYW1lcyBidWJibGluZ0cge1xuXHQwJSB7XG5cdFx0d2lkdGg6IDIwcHg7XG5cdFx0aGVpZ2h0OiAyMHB4O1xuXHRcdGJhY2tncm91bmQtY29sb3I6cmdiKDAsMCwwKTtcblx0XHQtbW96LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXG5cdDEwMCUge1xuXHRcdHdpZHRoOiA0NnB4O1xuXHRcdGhlaWdodDogNDZweDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsMjU1LDI1NSk7XG5cdFx0LW1vei10cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuXHR9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-spinner',
                templateUrl: './content-spinner.component.html',
                styleUrls: ['./content-spinner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/directives/big-vid/big-vid.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/directives/big-vid/big-vid.directive.ts ***!
  \*********************************************************/
/*! exports provided: BigVidDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BigVidDirective", function() { return BigVidDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bigpicture */ "./node_modules/bigpicture/index.js");
/* harmony import */ var bigpicture__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bigpicture__WEBPACK_IMPORTED_MODULE_1__);



class BigVidDirective {
    constructor(elementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        this.elementRef.nativeElement.style.cursor = 'pointer';
    }
    /**
     * Launch BigPicture with onClick event
     * Gets the youtube source link from the element attribute "bigVid"
     */
    click(eventData) {
        bigpicture__WEBPACK_IMPORTED_MODULE_1___default()({
            el: this.elementRef.nativeElement,
            ytSrc: this.bigVid
        });
    }
}
BigVidDirective.ɵfac = function BigVidDirective_Factory(t) { return new (t || BigVidDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
BigVidDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: BigVidDirective, selectors: [["", "bigVid", ""]], hostBindings: function BigVidDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BigVidDirective_click_HostBindingHandler() { return ctx.click(); });
    } }, inputs: { bigVid: "bigVid" } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BigVidDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[bigVid]'
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { bigVid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], click: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click']
        }] }); })();


/***/ }),

/***/ "./src/app/directives/directives.module.ts":
/*!*************************************************!*\
  !*** ./src/app/directives/directives.module.ts ***!
  \*************************************************/
/*! exports provided: DirectivesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectivesModule", function() { return DirectivesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _big_vid_big_vid_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./big-vid/big-vid.directive */ "./src/app/directives/big-vid/big-vid.directive.ts");




class DirectivesModule {
}
DirectivesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DirectivesModule });
DirectivesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DirectivesModule_Factory(t) { return new (t || DirectivesModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DirectivesModule, { declarations: [_big_vid_big_vid_directive__WEBPACK_IMPORTED_MODULE_2__["BigVidDirective"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]], exports: [_big_vid_big_vid_directive__WEBPACK_IMPORTED_MODULE_2__["BigVidDirective"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DirectivesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _big_vid_big_vid_directive__WEBPACK_IMPORTED_MODULE_2__["BigVidDirective"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                exports: [
                    _big_vid_big_vid_directive__WEBPACK_IMPORTED_MODULE_2__["BigVidDirective"],
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/strapi/strapi.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/strapi/strapi.service.ts ***!
  \***************************************************/
/*! exports provided: StrapiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StrapiService", function() { return StrapiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_settings_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/settings/settings */ "./src/app/shared/settings/settings.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class StrapiService {
    constructor(http) {
        this.http = http;
    }
    /**
     * Get news from CMS
     */
    getNews() {
        return this.http.get(src_app_shared_settings_settings__WEBPACK_IMPORTED_MODULE_1__["settings"].url.api.news);
    }
}
StrapiService.ɵfac = function StrapiService_Factory(t) { return new (t || StrapiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
StrapiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StrapiService, factory: StrapiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StrapiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/settings/settings.ts":
/*!*********************************************!*\
  !*** ./src/app/shared/settings/settings.ts ***!
  \*********************************************/
/*! exports provided: settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
const url = "https://sri.ait.e";
const apiUrl = "https://cms.comand.ie";
const settings = {
    url: {
        root: url,
        api: {
            root: apiUrl,
            testimonials: apiUrl + "/sri-testimonials",
            news: apiUrl + "/sri-news",
            projects: apiUrl + "/sri-projects",
            researches: apiUrl + "/sri-researches",
            services: apiUrl + "/sri-services",
            funding: apiUrl + "/sri-fundings",
            goals: apiUrl + "/sri-goals",
            contact: apiUrl + "/sri-contacts",
        }
    }
};


/***/ })

}]);
//# sourceMappingURL=default~pages-home-home-module~pages-news-news-module.js.map