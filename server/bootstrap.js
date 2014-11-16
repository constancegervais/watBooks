// if the database is empty on server start, create some sample data.
Meteor.startup(function () {

  if (UWBooks.find({}).count() === 0) {
    var books = [
      {
        createdAt: (new Date()),
        BookName: "Intro to Professional Engineering in Engineering",
        Author: "Andrews",
        ISBN: 978013357224,
        Price:82.65,
        Edition: "4th",
        Course: "MSCI 100"
      },
      {
        createdAt: (new Date()),
        BookName: "Concise CDN Writer's Handbook",
        Author: "Messenger",
        ISBN: 9780195447088,
        Price:60.95,
        Edition: "2nd",
        Course: "MSCI 100"
      },
      {
        createdAt: (new Date()),
        BookName: "Excel Data Analysis",
        Author: "Guerrero",
        ISBN: 9783642108341,
        Price:91.95,
        Course: "MSCI 100"
      },
      {
        createdAt: (new Date()),
        BookName: "General Chemistry",
        Author: "Petrucci",
        ISBN: 9780134033662,
        Price:158.00,
        Edition: "10th",
        Course: "CHEM 120"
      }
    ];

    for (var i=0; i<books.length; ++i) {
      UWBooks.insert(books[i]);
    };

  },

    if (Fedsbooks.find({}).count() === 0) {
    var books = [
      {
        createdAt: (new Date()),
        BookName: "Concise CDN Writer's Handbook",
        Author: "Messenger",
        ISBN: 9780195447088,
        Price:60.95,
        Edition: "2nd",
        Course: "MSCI 100"
      },
      {
        createdAt: (new Date()),
        BookName: "Excel Data Analysis",
        Author: "Guerrero",
        ISBN: 9783642108341,
        Price:91.95,
        Course: "MSCI 100"
      },
      {
        createdAt: (new Date()),
        BookName: "General Chemistry",
        Author: "Petrucci",
        ISBN: 9780134033662,
        Price:115.00,
        Edition: "10th",
        Course: "CHEM 120"
      }
    ];

    for (var i=0; i<books.length; ++i) {
      Fedsbooks.insert(books[i]);
    };

  },

});
