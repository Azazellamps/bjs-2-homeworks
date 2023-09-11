
function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = args.join(",");
		let objectInCache = cache.find((item) => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.new);
			return "Из кеша: " + objectInCache.new;
		}

		let result = func(...args);
		cache.push({
			hash,
			new: result
		});
		if (cache.length > 5) {
			cache.shift();

		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}





function debounceDecoratorNew(func, delay) {
	let timeoutId;
	let sendSignal = false;

	function wrapper(...args) {
		clearTimeout(timeoutId);
		timeoutId = setTimeout(() => {
			func(args);
			wrapper.count++;
		}, delay);
		if (!sendSignal) {
			func(...args);
			wrapper.count++;
			sendSignal = true;
		}
		wrapper.allCount++;
	}
	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}

