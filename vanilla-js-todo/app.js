
const extend = (src, ...props)=>{

    //copies  every property off of the props and add it to the src object 
    //for in loop is when you loop over an object.  
    for(let key in props){
        let val = props[key]
        src[key]= val
    }
    return src
    //mutate the src object and only reads the props object
    //the src object is mutable. 
    //the properties object can override the src object. 
    //return the src object

}
let o = {white : " two", blue:"six"}

extend(o, {red:"three", white:"four"} )
console.log(o)