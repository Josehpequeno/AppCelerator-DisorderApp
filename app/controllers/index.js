function doClick(e) {
	//alert($.label.text);
	var t = Math.round(Math.random()*10);
	console.log(t);
	if (t % 2 == 0) {
		alert($.input.value + " Sim");
	}
	else {
		alert($.input.value + " Não");
	}
}
/*
iconeif ($.args.icon) {
	$.icon.image = $.args.icon;
} else {
	$.icon.visible = false;
	$.input.left = 10;
}*/

//custom textField style send in inputStyle
if ($.args.inputStyle) {
	_.extend($.input, $.args.inputStyle);
}

$.getValue = function () {
	return $.input.value;
};
$.setValue = function (value) {
	$.input.value = value;
};
$.index.open();