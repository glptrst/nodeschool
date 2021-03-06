/*
 *   Write a program that performs an HTTP GET request to a URL provided to you  
 *   as the first command-line argument. Collect all data from the server (not  
 *   just the first "data" event) and then write two lines to the console  
 *   (stdout).  
 *            
 *   The first line you write should just be an integer representing the number  
 *   of characters received from the server. The second line should contain the  
 *   complete String of characters sent by the server. 
 */


var hyperquest = require('hyperquest');
var bl = require('bl');

var url = process.argv[2];

hyperquest(url).pipe(bl(function (err, data) {
      console.log(data.toString().length);
      console.log(data.toString());
}));



/* official solution:
 
var http = require('http');
var bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
        if (err) {
            return console.error(err);
        }
    data = data.toString();
    console.log(data.length);
    console.log(data);
    }));
});

*/
