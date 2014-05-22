var memoize = function(fn){
	var cache = {};
	return function(arg){
		return cache[arg] || (cache[arg] = fn(arg));
	};
};

var once = function(fn){
	var timesRun = 0;
	if (timesRun === 0){
		timesRun = 1;
		return (fn);
	}
};

var findTrueLove = once(function() {
  console.log("Looking for true love...");
});


findTrueLove();
findTrueLove();