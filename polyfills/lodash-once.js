// Polyfill for once()
// -----------------------------
// Syntax Example
// once(func, context, arg1, arg2, .... , argN);

const myOnce = function (func, context, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a function');
    }
    let isRan = false;
    return function(...newArgs) {
        if (!isRan) {
            let result = func.apply(context, ...args);
            isRan = true;
            return result;
        }
    }
};

const hello = once(()=>{
    console.log('Hello');
})

hello();
hello();
hello();
hello();
