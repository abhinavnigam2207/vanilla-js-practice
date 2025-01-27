// Polyfill for apply()
// -----------------------------
// Syntax Example
// apply(thisArg, [arg1, arg2, .... , argN]);

Function.prototype.myApply = function (context = {}, arrgsArray) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a function');
    }
    context.fn = this;
    context.fn(...arrgsArray);
};


const employee = {
    name: 'Abhinav',
    age: 33
}

const printDetails = function (city, state) {
    console.log(`${this.name} is ${this.age} years old and lives in ${city}, ${state}`);
}

printDetails.myApply(employee, ['Bangalore', 'Karnataka']);