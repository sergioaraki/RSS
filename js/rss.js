function leerRSS(element,params){
	$.get(params.url, function (data) {
		$(data).find("item").each(function () { // or "item" or whatever suits your feed
			var el = $(this);
			var item = document.createElement('div');
			item.setAttribute('data-bb-type','item');
			item.setAttribute('data-bb-title',el.find("title").text());
			item.innerHTML = el.find("pubDate").text();
			item.onclick = function() {openWebLink(el.find("link").text());};
			  
			// Append to list
			document.getElementById('lista').appendItem(item);
		});
		element.getElementById('spinner').hide();
	});
}

function openWebLink(url) {
    // open web link - allows the system to choose an appropriate target that handles http://
    blackberry.invoke.invoke({
        uri: url
    }, onInvokeSuccess, onInvokeError);
}

function onInvokeSuccess() {
    //console.log("Invocation successful!");
}

function onInvokeError(error) {
    console.log("Invocation failed, error: " + error);
}