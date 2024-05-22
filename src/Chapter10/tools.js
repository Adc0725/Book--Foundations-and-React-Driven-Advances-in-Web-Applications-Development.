

const log = output => { 
    document.getElementById("output").innerHTML = output; 
   } 
   export const appName = "Chapter 10 Code Illustrations"; 
   
   export const dummyFunction = () => { 
    return "I am a dummy function"; 
   } 
   export const weatherTag = (string, temperature) =>{ 
    //Let us assume that the Template literal to be passed has two string parts separating the embedded expressions. 
    //We can capture these two parts as array elements 
    let substring0 = string[0]; 
    let substring1 = string[1]; 
    let weatherCondition; 
    //Let us use the embedded expressions for some logic 
    if (temperature > 26){ 
    weatherCondition = "hot!" 
    }else{ 
    weatherCondition = "cool!" 
    } 
    return `${substring0}${temperature}${substring1}${weatherCondition}` 
   } 
   export default log; 

   export const genericFunction = (m, c, ...x) => { 
    //This function returns an array of {x,y} objects for all the x arguments passed. 
    //Map the array of x into an array of {x,y} object, with the y value calculated each time. 
    let coordinates = x.map((x) => { 
    return {'x': x, 'y' : (m*x) + c}; 
    }) 
    //loop through our array of {x,y} and prepare the output string to be returned. We can do this with the forEach() method of array object or use the for…of loop introduced in ES6 as shown below 
    let output = 'The (x,y) values are as follows: ' 
    for (let coordinate of coordinates){ 
    let xy = `(${coordinate.x},${coordinate.y})` 
    output+=xy; 
    } 
    //Previous style…(Going forward, we shall only be using the new for…of loop in such scenario) 
    //coordinates.forEach((coordinate)=>{ 
    // let xy = `(${coordinate.x},${coordinate.y})`; 
    // output+=xy; 
    //}) 
    return output; 
   }