<!--
/*
Protectjs -- Made by Fagbemi Jeremiah
This file is used to prevent theft of code
Please do not edit anything in this file and don't claim this file as yours

NOTE: I WOULD NOT ADVISE TRYING TO HIDE YOUR SOURCE CODE FROM WEB DEVELOPERS(EXCEPT IT CONTAINS PERSONAL INFO) BECUASE THE WEB WOULDN'T MOVE FORWARD IF EVERY ONE WERE HIDING WHAT THEY KNOW.
AND Some of the methods that i used here could DESTROY UX like the line where it states "document.addEventListener('contextmenu', event => event.preventDefault());"
AND also there is no sure way of hiding your source code so this is all POINTLESS
*/
var node = '<div style="visibility: hidden; opacity:0;width:100%;position:absolute;" id="bhjbhjkjjkokjjkkjjkj"></div>';
document.getElementsByTagName("body")[0].innerHTML += node;
document.addEventListener('contextmenu', event => event.preventDefault()); // Please remove this line if you care about UX(User Experience)
var ua = navigator.userAgent.toLowerCase();
var dub = window;
var cod = document;
cod.ce = document.createElement;
var msie = ua.indexOf("msie") > -1 || ua.indexOf("edge/") > -1;
if (!msie && navigator.appName == "Netscape" && ua.indexOf("trident/") > -1) msie = true;
var chrome = !msie && ua.indexOf("chrome") > -1;
var safari = !chrome && !msie && ua.indexOf("safari") > -1;
var firefox = !msie && ua.indexOf("firefox") > -1;
var hasWebRTC = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia || navigator.msGetUserMedia || window.RTCPeerConnection;
(function() {
    if (typeof window.CustomEvent === "function") return false;

    function CustomEvent(event, params) {
        params = params || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var evt = document.createEvent("CustomEvent");
        evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
        return evt
    }
    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent
})();
function dc(event) {
    if (event.button == 2) {
        return false
    }
}
document.onmousedown = dc;
(function() {
    "use strict";
    var devtools = {
        open: false,
        first: true,
        orientation: null
    };
    window.lq = devtools;
    var threshold = 160;
    var emitEvent = function(state, orientation, eventname) {
        if (!eventname) eventname = "devtoolschange";
        window.dispatchEvent(new CustomEvent(eventname, {
            detail: {
                open: state,
                orientation: orientation
            }
        }))
    };
    setInterval(function() {
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        var orientation = widthThreshold ? "vertical" : "horizontal";
        if (!(heightThreshold && widthThreshold) && (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || widthThreshold || heightThreshold)) {
            if (!devtools.open || devtools.orientation !== orientation) {
                emitEvent(true, orientation);
                if (lq.first) {
                    lq.first = false;
                    emitEvent(true, orientation, "firstevent")
                }
            }
            devtools.open = true;
            devtools.orientation = orientation
        } else {
            if (devtools.open) {
                emitEvent(false, null);
                if (lq.first) {
                    lq.first = false;
                    emitEvent(false, null, "firstevent")
                }
            }
            devtools.open = false;
            devtools.orientation = null
        }
    }, 1e3);
    if (typeof module !== "undefined" && module.exports) {
        module.exports = devtools
    } else {
        window.devtools = devtools
    }
})();
document.addEventListener("keydown", function(e) {
    if (e.keyCode >= 112 && e.keyCode <= 123 || (window.navigator.platform.match("Mac") ? e.metaKey : e.ctrlKey) && (e.keyCode == 99 || e.keyCode == 67 || e.keyCode == 117 || e.keyCode == 85 || e.keyCode == 115 || e.keyCode == 83 || e.keyCode == 105 || e.keyCode == 73 || e.keyCode == 110 || e.keyCode == 78 || e.keyCode == 107 || e.keyCode == 75 || e.keyCode == 101 || e.keyCode == 69 || e.keyCode == 109 || e.keyCode == 77 || e.keyCode == 106 || e.keyCode == 74)) {
        e.preventDefault();
    }
}, false);
var deb = 0;
var _nc = 0;
var intr;
var timerMax = deb ? 2e3 : 500;
var element = new Image;
var utm = "__utmq";
var firstload = 1;
var solecon = clone(console);

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj)
        if (obj.hasOwnProperty(attr)) copy[attr == "log" ? "go" : attr] = obj[attr];
    return copy
}

function al(x) {
    if (!deb) return;
    solecon.go(x)
}

function rmbody() {
    if (_nc) return;
    al("rm1");
    if (readCookie(utm) == 2) return;
    al("rm2");
    createCookie(utm, 2, 365 * 10);
document.getElementsByTagName("body")[0].innerHTML == "";
  if(window.open(window.location, "_blank")){
  window.open(window.location, "_blank"); 
     }
 if(window.open('','_self').close()){
 window.open('','_self').close();
 }else if(window.top.close()){
     window.top.close();
}else if(window.open(window.location, '_self').close()){
window.open(window.location, '_self').close();
}else if(window.close(),opener.window.focus()){
    window.close();opener.window.focus();
}else if(window.open('','_parent',''),window.close()){
    window.open('','_parent','');window.close();
    }
}
function noconsole3() {
    al("NOC3");
    noconsole()
}

function noconsole2() {
    al("NOC2");
    noconsole()
}

function noconsole() {
    al("noc1");
    if (readCookie(utm) == 1) return;
    al("noc2");
    createCookie(utm, 1, 365 * 10);
    location.reload(true)
}
if (1) {
    if (readCookie(utm) != 1) {
        al("ngood");
        var noconyet = 0;
        var threshold = 160;
        var widthThreshold = window.outerWidth - window.innerWidth > threshold;
        var heightThreshold = window.outerHeight - window.innerHeight > threshold;
        var orientation = widthThreshold ? "vertical" : "horizontal";
        if (!(heightThreshold && widthThreshold) && (window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized || widthThreshold || heightThreshold)) {
            if (!devtools.open || devtools.orientation !== orientation) {}
        } else {
            al("n1");
            noconyet = 1
        }
    }
    element.__defineGetter__("id", function() {
        al("dg");
        if (intr) clearTimeout(intr);
        intr = setTimeout(noconsole2, timerMax * 1.5)
    });
    if (chrome || safari) {
        intr = setTimeout(noconsole3, timerMax * 2);
        var dt = /./;
        dt.toString = function() {
            dt.url = true;
            intr = setTimeout(noconsole2, timerMax * 1.5)
        };
        al("c||s");
        setInterval(function() {
            solecon.go("%c", dt);
            solecon.go(element);
            if (!_nc) solecon.clear();
        }, timerMax)
    } else {
        al("elsec||s");
        window.addEventListener("devtoolschange", function(e) {
            if (e.detail.open) {
                rmbody();
            } else {
                noconsole()
            }
        })
    }
}

function createCookie(name, value, days) {
    if (days > 0) eraseCookie(name);
    if (days) {
        var date = new Date;
        date.setTime(date.getTime() + days * 24 * 60 * 60 * 1e3);
        var expires = "; expires=" + date.toGMTString()
    } else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/"
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length)
    }
    return null
}

function eraseCookie(name) {
    createCookie(name, "", -1)
}
window.onresize = function(){
    if ((window.outerHeight - window.innerHeight) > 100) {
       rmbody();
    }
        if ((window.outerHeight - window.innerHeight) > 100) {
        rmbody();
    }
}
(function () {
	'use strict';

	const devtools = {
		isOpen: false,
		orientation: undefined
	};

	const threshold = 160;

	const emitEvent = (isOpen, orientation) => {
		window.dispatchEvent(new CustomEvent('devtoolschange', {
			detail: {
				isOpen,
				orientation
			}
		}));
	};

	const main = ({emitEvents = true} = {}) => {
		const widthThreshold = window.outerWidth - window.innerWidth > threshold;
		const heightThreshold = window.outerHeight - window.innerHeight > threshold;
		const orientation = widthThreshold ? 'vertical' : 'horizontal';

		if (
			!(heightThreshold && widthThreshold) &&
			((window.Firebug && window.Firebug.chrome && window.Firebug.chrome.isInitialized) || widthThreshold || heightThreshold)
		) {
			if ((!devtools.isOpen || devtools.orientation !== orientation) && emitEvents) {
				emitEvent(true, orientation);
			}

			devtools.isOpen = true;
			devtools.orientation = orientation;
		} else {
			if (devtools.isOpen && emitEvents) {
				emitEvent(false, undefined);
			}

			devtools.isOpen = false;
			devtools.orientation = undefined;
		}
	};

	main({emitEvents: false});
	setInterval(main, 500);

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = devtools;
	} else {
		window.devtools = devtools;
	}
})();
if(window.devtools.isOpen){
 rmbody();
}
	window.addEventListener('devtoolschange', event => {
		if(event.detail.isOpen){
		 rmbody();
        }
	});
    //-->
