// Polyfill for call()
// -----------------------------
// Syntax Example
// call(thisArg, arg1, arg2, .... , argN);

Function.prototype.myCall = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a function');
    }
    context.fn = this;
    context.fn(...args);
};
  
  