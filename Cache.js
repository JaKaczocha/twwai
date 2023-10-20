;
function cacheFunction(cache, arg1, arg2) {
    var key = "".concat(arg1, "_").concat(arg2);
    if (key in cache) {
        return cache[key];
    }
    else {
        var result = arg1 + arg2;
        cache[key] = result;
        return result;
    }
}
var myCache = {};
console.log(cacheFunction(myCache, 1, 2)); // Powinno wyświetlić 3
console.log(cacheFunction(myCache, 1, 2)); // Powinno wyświetlić 3 bez obliczania
console.log(cacheFunction(myCache, 3, 4)); // Powinno wyświetlić 7
