/* Load this script using conditional IE comments if you need to support IE 7 and IE 6. */

window.onload = function() {
	function addIcon(el, entity) {
		var html = el.innerHTML;
		el.innerHTML = '<span style="font-family: \'Watch-Prototype\'">' + entity + '</span>' + html;
	}
	var icons = {
			'icon-chevron-left' : '&#x5b;',
			'icon-chevron-right' : '&#x5d;',
			'icon-arrow-up' : '&#x2d;',
			'icon-arrow-down' : '&#x3d;',
			'icon-feed' : '&#x72;',
			'icon-twitter' : '&#x74;',
			'icon-facebook' : '&#x66;',
			'icon-youtube' : '&#x79;',
			'icon-warning-sign' : '&#x31;',
			'icon-cloud' : '&#x63;',
			'icon-sun' : '&#x73;',
			'icon-cloudy' : '&#x70;',
			'icon-rainy' : '&#x6e;'
		},
		els = document.getElementsByTagName('*'),
		i, attr, html, c, el;
	for (i = 0; ; i += 1) {
		el = els[i];
		if(!el) {
			break;
		}
		attr = el.getAttribute('data-icon');
		if (attr) {
			addIcon(el, attr);
		}
		c = el.className;
		c = c.match(/icon-[^\s'"]+/);
		if (c && icons[c[0]]) {
			addIcon(el, icons[c[0]]);
		}
	}
};