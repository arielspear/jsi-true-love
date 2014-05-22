// var memoize = function(fn){
// 	var cache = {};
// 	return function(arg){
// 		return cache[arg] || (cache[arg] = fn(arg));
// 	};
// };

var once = function(fn){
	var ranOnce;
	return function(){
		if (ranOnce !== true){
			ranOnce = true;
			fn();
		}
	};
};

var findTrueLove = once(function() {
  console.log("Found true love...");
});


findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();