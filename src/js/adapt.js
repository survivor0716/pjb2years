(function (doc, win) {
  var docEl     = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc    = function () {
        var clientWidth = docEl.clientWidth >= 768 ? 768 : docEl.clientWidth;
        if (!clientWidth) return;
        var designWidth = 640;
        docEl.style.fontSize = 100 * (clientWidth / designWidth) + 'px';
      };

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);
