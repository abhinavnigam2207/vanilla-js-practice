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

const employee = {
    name: 'Abhinav',
    age: 33
}

const printDetails = function (city, state) {
    console.log(`${this.name} is ${this.age} years old and lives in ${city}, ${state}`);
}

printDetails.myCall(employee, 'Bangalore', 'Karnataka');