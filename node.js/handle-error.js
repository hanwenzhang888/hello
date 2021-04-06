//print error

request.on('error', error => console.error('Problem with request: ${error.message}`)); 
//a request on an event, string error means error event, call back when the error event is submitted


//try-catch - if an error occurs within the block, it throws an error in which you can catch the error, and you have the access to the error message     
// try {} - A try statement stars with the try keyword and the code wrappeed in a block you want to execute
// If an error occurs within this block, it throws an error in which you can catch the errror, and you have access to the error messgae
catch (error) { console.error(error.message); }




// //example exercise
// Create a variable request that stores the result of the get method.
// On a new line use the on method to listen for the error event. Pass in a callback function with one parameter of error.
// Finally, in the error callback, use the error method on the console to print out the error message.

const https = require("https");

const request = https.get("https://teamtreehouse.com/chalkers.json", response => {
  console.log(response.statusCode);
});

  request.on('error', error => console.error());



response.on('end', () => { 
  try {
   // Parse the data
  const profile = JSON.parse(body);                            
    // Print the data
  printMessage(username, profile.badges.length, profile.points.JavaScript);
     } catch (error) {
     console.log(error.message);
    }});
//catch (error) {printError(error); } after using the error function as below


//print error message function that we will only need one function for all
function printError(error){
  console.error(error.message);
}     // then we can update where all the console.errors are with printError(error)

request.on('error', printError);
  } catch (error) {
    printError(error);
  }
}