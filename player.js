let jsonData = {};

function jsonCallback(json){
  jsonData = json;
}

$.ajax({
  url: "guide.json",
  jsonp: "jsonCallback",
  dataType: "jsonp",
  crossDomain: true
});
$(function(){
	var introguide = introJs();
	introguide.setOptions(jsonData);
	introguide.setOption('positionPrecedence', ['left', 'right', 'top', 'bottom']);
	introguide.start();
});