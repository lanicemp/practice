const map = (collection, cb) => {
  let result = [];
  for (let i = 0; i < collection.length; i++) {
      let element = collection[i]; 
      result.push(cb(element))
  }
  return result 
};

const numbers = [1, 2, 3];
 let numarray = map(numbers, function (number) {
 return number * 2;
});
console.log(numarray)


