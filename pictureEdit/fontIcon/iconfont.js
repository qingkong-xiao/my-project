(function(window){var svgSprite='<svg><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M691.908486 949.511495l75.369571-89.491197c10.963703-12.998035 10.285251-32.864502-1.499144-44.378743L479.499795 515.267417 757.434875 204.940602c11.338233-12.190647 11.035334-32.285311-0.638543-44.850487l-80.46666-86.564541c-11.680017-12.583596-30.356378-12.893658-41.662889-0.716314L257.233596 494.235404c-11.332093 12.183484-11.041474 32.266891 0.657986 44.844348l80.46666 86.564541c1.772366 1.910513 3.706415 3.533476 5.750981 4.877077l306.620399 321.703933C662.505829 963.726242 680.945807 962.528973 691.908486 949.511495z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M332.091514 74.487481l-75.369571 89.491197c-10.963703 12.998035-10.285251 32.864502 1.499144 44.378743l286.278095 300.375162L266.565125 819.058374c-11.338233 12.190647-11.035334 32.285311 0.638543 44.850487l80.46666 86.564541c11.680017 12.583596 30.356378 12.893658 41.662889 0.716314l377.434212-421.426145c11.332093-12.183484 11.041474-32.266891-0.657986-44.844348l-80.46666-86.564541c-1.772366-1.910513-3.706415-3.533476-5.750981-4.877077L373.270379 71.774697C361.493148 60.273758 343.054193 61.470003 332.091514 74.487481z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)