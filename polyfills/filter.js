// Polyfill for filter()
// -----------------------------
// Syntax Example
// arr.filter((elem)=> elem%2 == 0);

Array.prototype.myFilter = function (callback) {
    if (!Array.isArray(this)) {
      throw new TypeError("Not an array");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback not a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            result.push(this[i]);
        }
    }
    return result;
};
  
console.log([1,2,3,4,5,6,7,8,9,10].myFilter((elem) => elem % 2==0));
  