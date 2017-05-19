function mydock() {
	//alert('Action to be executed after click Submit');
	
	chrome.tabs.query({'active': true}, function(tabs) {
		//alert('aqui');
		//chrome.tabs.update(tabs[0].id, {url: 'http://www.andres4apps.com/ebooks/public/'});
		//chrome.tabs.executeScript(tabs[0].id, {greeting: "hello"}, function(response){});
		chrome.tabs.sendRequest(tabs[0].id, {greeting: "hello World!"}, function(response){});
		window.close();
	});
	
}

document.getElementById('button').addEventListener('click', mydock);

