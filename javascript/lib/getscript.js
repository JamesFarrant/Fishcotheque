/*!
* getScript
*   github.com/premasagar/mishmash/tree/master/getscript/
*   
*   Simple JavaScript loader
*/    
var getScript=function(e){"use strict";function j(g,d,b){function a(a,b,h){function c(){f.onload=f.onreadystatechange=f.onerror=null;g||e.removeChild(f);b.call(i,l)}var d=h.charset,g=h.keep,i=h.target,q=h.path||"",m=i.document,e=m.head||m.getElementsByTagName("head")[0],f=m.createElement("script"),l=!1;f.type="text/javascript";f.charset=d;f.onload=f.onreadystatechange=function(){var a=this.readyState;if(!l&&(!a||a==="complete"||a==="loaded"))l=!0,c()};f.onerror=c;f.async=!0;f.src=q+a+(h.noCache?"?v="+r:"");e.appendChild(f)}
function c(b,c,d){var g=b.length,e=0,j,i;j=function(a){(!a||++e===g)&&c.call(d.target,a)};for(i=0;i<g;i++)b[i]?a(b[i],j,d):c.call(d.target,!0)}n=typeof g==="string"?a:c;b=b||{};if(!b.charset)b.charset="utf-8";if(!b.target)b.target=e;return n.call(e,g,d||function(){},b)}function s(g,d,b){return function(a){a!==!1?j(g,d,b):d&&d(a)}}var r=(new Date).getTime(),n,o,p;o=Array.prototype.slice;p=Object.prototype.toString;return function(g,d,b){var a=o.call(arguments),c=a.length,e=a.slice(-1)[0],k=a.slice(-2,
-1)[0];c-=2;typeof e==="object"&&p.call(e)!=="[object Array]"?(b=e,d=k):(b=null,d=e,c++);typeof d!=="function"&&(d=null,c++);for(var a=g=a.slice(0,c),e=d,k=b,c=a.length-1,h=[];c;c--)h[c]=s(a[c],h[c+1]||e,k);return j(a[0],h[1],k)}}(window);
