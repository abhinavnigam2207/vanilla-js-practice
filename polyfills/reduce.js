// Polyfill for reduce()
// -----------------------------
// Syntax Example
// arr.reduce((acc, curr, i, arr) => acc+curr, acc);

Array.prototype.myReduce = function (callback, initialValue) {
    if (!Array.isArray(this)) {
      throw new TypeError("Not an array");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback not a function");
    }
    let result = initialValue ? initialValue : this[0];

    for (let i = initialValue ? 0 : 1; i < this.length; i++) {
        result = callback(result, this[i], i, this);
        console.log(result);
    }
    return result;
};

console.log([1,2,3,4,5,6].myReduce((acc, curr) => acc + curr, 5));
 
  