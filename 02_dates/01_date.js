/*In JavaScript, dates are handled using the built-in Date object. This object represents a specific moment in time, measured in milliseconds since the Unix Epoch (January 1, 1970, 00:00:00 UTC). */

let mydate=new Date()
console.log(mydate.toDateString());

// date is also object in js.

let myCreatedDate=new Date(2023,0,23)
console.log(myCreatedDate.toString());

let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

// convert to seconds 
console.log(Math.floor(myCreatedDate.getTime()/1000));

