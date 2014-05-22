var memoize = function(fn){
	var cache = {};
	return function(arg){
		return cache[arg] || (cache[arg] = fn(arg));
	};
};

var once = function(fn){
	var timesRun;
	return function(){
		if (timesRun !== true){
			timesRun = true;
			fn();
		}
	};
};

var findTrueLove = once(function() {
  console.log("Looking for true love...");
});


findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();
findTrueLove();