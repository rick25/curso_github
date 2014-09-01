/*

JS personalizado
================

Author:  Ricardo Chinchay
Updated: Agosto 2014

*/

$(document).ready(function () {
	 $('#alertMe').on('click', function (e) {
	 	e.preventDefault();
	 	$('#successAlert').slideDown();
	 });
	 $('a.pop').on('click', function (e) {
	 	e.preventDefault();
	 });
	 $('a.pop').popover();

	 $('[rel="tooltip"]').tooltip();
});