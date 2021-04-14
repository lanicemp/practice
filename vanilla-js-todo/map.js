const each = require("./each")




const map = (collection, cb) => {
  let result = [];
  each(collection, (value, index)=>{
    result.push(cb(value, index, collection))
  })
  // for (let i = 0; i < collection.length; i++) {
  //     let element = collection[i]; 
  //     result.push(cb(element))
  
  return result 
};

const numbers = [1, 2, 3];
 let numarray = map(numbers, function (number) {
 return number * 2;
});
console.log(numarray)


const map2 =(arr, cb)=>{
    let array = []
    for(let i = 0 ; i<arr.length; i++){
        
    }
}
























