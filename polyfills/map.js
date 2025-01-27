Array.prototype.myMap = function (callback, thisArgs) {
    if (!Array.isArray(this)) {
      throw new TypeError("Not an array");
    }
    if (typeof callback !== "function") {
      throw new TypeError("Callback not a function");
    }
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result[i] = callback.call(thisArgs, this[i]);
    }
    return result;
  };
  
  console.log([2, 4, 6, 8, 10, 12, 14].myMap((elem) => elem / 2));
  