define({
	findAncestor: function(el, cls) {
		while ((el = el.parentElement) && !el.classList.contains(cls));
		return el;
	},

	getSelectedText: function() {
		var text = '';
		if (typeof window.getSelection !== 'undefined') {
			text = window.getSelection().toString();
		} else if (typeof document.selection !== 'undefined' && document.selection.type === 'Text') {
			text = document.selection.createRange().text;
		}
		return text;
	},

	//Finds y value of given object
	findPos: function(obj) {
		var curtop = 0;
		if (obj.offsetParent) {
			do {
				curtop += obj.offsetTop;
			} while (obj = obj.offsetParent);
			return [curtop];
		}
		return [curtop];
	}
});
