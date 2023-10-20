interface MyCache {
    [key: string]: number;
  };
  
function cacheFunction(cache: MyCache, arg1: number, arg2: number): number {
    const key = `${arg1}_${arg2}`;
  
    if (key in cache) {
        return cache[key];
    } else {
        const result = arg1 + arg2;
        cache[key] = result;
        return result;
    }
}

let myCache: MyCache = {};
console.log(cacheFunction(myCache, 1, 2));  // Powinno wyświetlić 3
console.log(cacheFunction(myCache, 1, 2));  // Powinno wyświetlić 3 bez obliczania
console.log(cacheFunction(myCache, 3, 4));  // Powinno wyświetlić 7