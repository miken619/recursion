// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var element = document.body;
  var arr = [];

  function search(element){
  	if(element.classList && element.classList.contains(className)){
  		arr.push(element);
  	}
  	if(element.childNodes){
  		var length = element.childNodes.length;
  		for(var i = 0; i < length; ++i){
  			search( element.childNodes[i]);
  		}
  	}
  }
  search(element);
  return arr;
};
