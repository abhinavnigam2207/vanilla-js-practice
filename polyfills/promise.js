// Polyfill for call()
// -----------------------------
// Syntax Example
// const p = new myPromise(resolve, reject);

const myPromise = function (executer) {
    let onResolve, onReject,
        isFulfilled = false, 
        isCalled = false, 
        value;

    function resolve(val) {
        isFulfilled = true;
        value = val
        if (typeof onResolve === 'function') {
            onResolve(val);
            isCalled = true;
        }
    }
    function reject(value) {
        onReject(value);
    }
    
    this.then = function(callback) {
        onResolve = callback;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onResolve(value);
        }
        return this;
    },
    this.catch = function(callback) {
        onReject = callback;
        if (isFulfilled && !isCalled) {
            isCalled = true;
            onReject(value);
        }
        return this;
    }
    try {
        executer(resolve, reject);
    } catch (error) {
        reject(error);
    }
};


const promise1 = new myPromise((resolve, reject) => {
    setTimeout(() => {
        resolve('success');
    }, 4000);
});

promise1.then((resp)=> {
    console.log(resp);
}).catch((err)=> {
    console.log(err);
})