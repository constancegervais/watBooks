//Server Side code
// if (Meteor.isClient) {

//   // results = function findBook(user, callback) {
//   //   Meteor.call('findBook', user, callback);
//   // }

//   Meteor.call('findBook', function(err, data) {
//   if (err)
//     console.log(err);

//   console.log(data);
//   });

// }

// if (Meteor.isServer) {
//   Meteor.methods({
//     findBook: function() {
//       var AWS = Npm.Require("aws-sdk");
//       var aws = new AWS({
//         version:"0.3.0"
//       });

//       var prodAdv = aws.createProdAdvClient("AKIAJ2A6PMEPXER4AXXA", "NKpv7qB6Itl4c6O9/D4Z3o5ijQMbDkob0+TqxCcb", 'watdoyounee-20');

//       var options = {SearchIndex: "Books", Keywords: "Javascript"}
//       var bookresults;

//       prodAdv.call("ItemSearch", options, function(err, result) {
//         bookresults = result;
//         console.log(result);
//       })

//       return result;
//     }
//   });
// }