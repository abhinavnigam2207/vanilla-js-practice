// Currying is a useful technique used in JavaScript applications.
// Please implement a curry() function, which accepts a function and return a curried one.
// Here is an example

// const join = (a, b, c) => {
//    return `${a}_${b}_${c}`
// }

// const curriedJoin = curry(join)
// curriedJoin(1, 2, 3) // '1_2_3'
// curriedJoin(1)(2, 3) // '1_2_3'
// curriedJoin(1, 2)(3) // '1_2_3'



// Regular Function 

// function curry(fn) {
//     return function curried(...args) {
//         // 1. if enough args, call func
//         // 2. if not enough, bind the args and wait for new one

//         if (args.length >= fn.length) {
//             // 'this' is pointing to Window, apply is used to call the function fn
//             //console.log(this)
//             return fn.apply(this, args)
//         } else {
//             // 'this' is pointing to Window
//             //console.log(this)
//             return curried.bind(this, ...args)

//         }
//     }
// }





// Using arrow function, this is no need to apply or bind, since 'this' in arrow function inherited from the parent scope

function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
         return fn(...args);
       } else {
         return (...args2) => curried(...args, ...args2);
       }
    }
}