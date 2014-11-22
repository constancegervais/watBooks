if (Meteor.isClient) {

  // counter starts at 0
  Session.setDefault("counter", 0);

  Template.hello.helpers({
    counter: function () {
      return Session.get("counter");
    }
  });

  Template.hello.events({
    'click button': function () {
      // increment the counter when button is clicked
      Session.set("counter", Session.get("counter") + 1);
      console.log("hello");

      Meteor.call('findBook', function(err, data) {
        debugger;
        if (err)
          console.log(err);

        console.log(data);
        });

      // var aws = Meteor.npmRequire("aws-lib");

      // var prodAdv = aws.createProdAdvClient("AKIAJ2A6PMEPXER4AXXA", "NKpv7qB6Itl4c6O9/D4Z3o5ijQMbDkob0+TqxCcb", 'watdoyounee-20');

      // var options = {SearchIndex: "Books", Keywords: "Javascript"}

      // prodAdv.call("ItemSearch", options, function(err, result) {
      //   console.log(result);
      // })
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

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

if (Meteor.isServer) {
  Meteor.methods({
    findBook: function() {
      var AWS = Meteor.npmRequire("aws-lib");
      var aws = new AWS({
        version:"0.3.0"
      });

      var prodAdv = aws.createProdAdvClient("AKIAJ2A6PMEPXER4AXXA", "NKpv7qB6Itl4c6O9/D4Z3o5ijQMbDkob0+TqxCcb", 'watdoyounee-20');

      var options = {SearchIndex: "Books", Keywords: "Javascript"}
      var bookresults;

      prodAdv.call("ItemSearch", options, function(err, result) {
        bookresults = result;
        console.log(result);
      })

      return result;
    }
  });
}