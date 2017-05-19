/***
it could execute myfunction() directly from 1st line. this will execute the process automaticaly as soon as
the page is loaded.
**/
//myfunction(); //without comment ('//') this execute right away
//test();

chrome.extension.onRequest.addListener(function(request, sender, sendResponse) {
	//alert('dentro');
	//alert(request['greeting']);	//or alert(request.greeting);
	myfunction();
});

function myfunction() {
	
	document.getElementById('name').value="Soy Andres";
	document.getElementById('email').value="email@dominio.com";
	document.getElementById('address').value="your address";
	document.getElementById('cell').value="321-666-6969";
	
	//alert(document.getElementsByName('sure').checked);
	document.getElementsByName('sure')[0].checked = true;
	document.getElementsByName('accept')[0].checked = true;

	document.getElementById('letters').focus();
	
}

function test() {
	window.location.href = "http://www.andres4apps.com/ebooks/public/"
	/*this work in browser_action (popup.js)
	chrome.tabs.query({'active': true}, function(tabs) {
		alert('aqui');
		chrome.tabs.update(tabs[0].id, {url: 'wwww.yahoo.com'});
	});
	*/
}
