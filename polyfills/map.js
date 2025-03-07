// Polyfill for map()
// -----------------------------
// Syntax Example
// arr.map((elem) => elem/2);

Array.prototype.myMap = function (callback, thisArgs) {
  if (!Array.isArray(this)) {
    throw new TypeError("Not an array");
  }
  if (typeof callback !== "function") {
    throw new TypeError("Callback not a function");
  }
  const result = [];
  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }
  return result;
};

console.log([2, 4, 6, 8, 10, 12, 14].myMap((elem) => elem / 2));
