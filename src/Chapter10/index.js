



/* 
log("Welcome to Chapter 10! The application name is \'" + appName + "\'. There is a function that returns \'" + dummyFunction() + "\'."); 
*/ 
//Rewrite the log() statement above passing Template literal 
//log(`Welcome to Chapter 10! The application name is "${appName}". 
//There is a function that returns "${dummyFunction()}".`) 
 
//leave the previous log() statements intact for reference.


//Output Tagged template 


//import log, {genericFunction} from './tools'; 
//log(genericFunction(2,3,4,6,8,9,10.5,12)); 

/* import log, {Person} from './tools'; 
let person1 = new Person("Pius", "Onobhayedo", "Male",1.7); 
let person2 = new Person("Mary", "Joseph", "Female", undefined); 
person1.firstName = "peter"; //here we have deliberately used lowercase for first letter 
person2.firstName = "maria"; //here we have deliberately used lowercase for first letter 
log(`Person 1 is ${person1.getFirstName()} whose height is ${person1.height}. Person 2 is $ {person2.getFirstName()} whose height is ${person2.height}`); //using getFirstName() to get firstName. */  

/* import log, {User} from './tools'; 
let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
log(`The username of ${user1.firstName} is ${user1.username}`)
   
 */


new Promise((resolve, reject) => { 
    setTimeout(()=>{ 
    resolve("Timeout is over"); //send out a success feedback with data using resolve 
    }, 1000) //set timeout for 1000ms i.e. 1second. 
    }).then((data) => { 
    log(`${data}`);//This should output "Timeout is over" 
    }).catch((error) => {//This will only be reached it the asynchronous function returned a reject statement. 
    log(`${error}`); 
    }); 
   //Let us still maintain the last log statement so that we can illustrate better how the asynchronous call that returns after the timeout does not stop the main execution thread. 
   let user1 = new User("myusername","mypassword","Pius","Onobhayedo","Male",undefined); 
   log(`The username of ${user1.firstName} is ${user1.username}`)