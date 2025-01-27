Array.prototype.myFilter = function (callback, thisArgs) {
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
  