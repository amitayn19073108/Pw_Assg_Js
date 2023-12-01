function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            // If all arguments are provided, execute the original function
            return fn.apply(this, args);
        } else {
            // If not all arguments are provided, return a new curried function
            return function(...moreArgs) {
                return curried.apply(this, args.concat(moreArgs));
            };
        }
    };
}


function add(x, y) {
    return x + y;
}

var curriedAdd = curry(add);


console.log(curriedAdd(5)(3)); 
console.log(curriedAdd(5, 3));
console.log(curriedAdd(5)(3, 2)); 
 
