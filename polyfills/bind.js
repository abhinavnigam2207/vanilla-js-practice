// Polyfill for bind()
// -----------------------------
// Syntax Example
// const bindedFunc = bind(thisArg, arg1, arg2, ..., argN)

Function.prototype.myBind = function (context = {}, ...args) {
    if (typeof this !== 'function') {
        throw new TypeError('Not a function');
    }
    let self = this;
    return function(...innerArgs) {
        context.fn = self;
        const result = context.fn(...args, ...innerArgs);
        delete context.fn; // Clean up
        return result;
    }
};

const employee = {
    name: 'Abhinav',
    age: 33
}

const printDetails = function (city, state) {
    console.log(`${this.name} is ${this.age} years old and lives in ${city}, ${state}`);
}

const bindedFunc = printDetails.myBind(employee, 'Bangalore', 'Karnataka');
bindedFunc();