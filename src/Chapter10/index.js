



/* 
log("Welcome to Chapter 10! The application name is \'" + appName + "\'. There is a function that returns \'" + dummyFunction() + "\'."); 
*/ 
//Rewrite the log() statement above passing Template literal 
//log(`Welcome to Chapter 10! The application name is "${appName}". 
//There is a function that returns "${dummyFunction()}".`) 
 
//leave the previous log() statements intact for reference.


//Output Tagged template 


import log, {genericFunction} from './tools'; 
log(genericFunction(2,3,4,6,8,9,10.5,12));