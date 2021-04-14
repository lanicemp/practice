// //A for loop needs and index and and array
// const each = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// };

// //using each
// each([1, 2, 3], (item, idx, array) => {
//   console.log(item);
// });

// const each2 = (arr, cb) => {
//   console.log(arr);
//   //loop index and an array
//   //takes arguments array and cb
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// };

// each2([5, 6, 7], (value, index, array) => {
//   console.log(value * 10);
// });

// const each3 = (arr, cb) => {
//   for (let i = 0; i < arr.length; i++) {
//     cb(arr[i], i, arr);
//   }
// };

// each3([7,8,9],(value, index, array)=>{
//   console.log(value * 2 )
// })

// const each4=(arr, cb)=>{
//   for(let i=0; i < arr.length; i++ ){
//     cb(arr[i], i, arr)
//   }
// }

// each4([10,11,13], (value, index, array)=>{
//   console.log(value * 2 )
// })

const each = (arr, cb) => {
  if (Array.isArray(arr)){
    for (let i = 0; i < arr.length; i++) {
      cb(arr[i], i, arr);
    }
  } else { 
    for (const i in arr ) {
      cb(arr[i], i, arr)
    }
  }
};
// each({one:1, two:2}, console.log.bind(console))
module.exports = each
