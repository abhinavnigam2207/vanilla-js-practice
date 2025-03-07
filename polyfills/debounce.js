// Implement Debounce

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}


// Usage 
function saveInput(){
    console.log('Saving data');
}
const processChange = debounce(() => saveInput());