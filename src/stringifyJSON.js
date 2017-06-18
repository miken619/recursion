// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if(obj === undefined || typeof obj === 'function')
  	return;

  if(typeof obj === 'number' || typeof obj === 'boolean' || obj === null)
  	return '' + obj;

  if(typeof obj === 'string')
  	return '"' + obj + '"';

  if(Array.isArray(obj)){
  	var length = obj.length;
  	var arr = [];
  	for(var i = 0; i < length; ++i){
  		var val = stringifyJSON(obj[i]); 		
  		arr.push(val);
  	}

  	return '[' + arr.join(',') + ']'; 
  }

  if(typeof obj === 'object'){	
  	var arr = [];
  	for(var i in obj){
  		
  		var element = obj[i];
  		
  		if(element === undefined ||  element === 'undefined' || typeof element === 'function'){  			
  			arr.push();
  		}else{
  			var val = '"' + i + '":';
  			val += (element === 'string') ? element : stringifyJSON(element);
  		    arr.push(val);
  		}
  	}
  
  	return '{' + arr.join(',') + '}';

  }


};
