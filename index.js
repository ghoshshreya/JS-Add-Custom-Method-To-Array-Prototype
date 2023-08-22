// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;

// Custom array function to change null/undefined with 0
Object.defineProperty(Array.prototype, 'format', {
  value: function () {
    console.log(this);
    let obj = this;
    obj = this.map((x) => (x === null ? 0 : x));
    return obj;
  },
});

let arr = new Array(10);
arr.fill(1);
arr[3] = null;
arr[4] = null;
console.log(arr.format());
