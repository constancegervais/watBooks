////////// Shared code (client and server) //////////

UWBooks = new Meteor.Collection('uwBooks');
FedBooks = new Meteor.Collection('fedsBooks');


Meteor.methods({
  createClub: function (clubName, clubDescription, clubCategory, clubTag) {
    var club = FedsClubs.findOne({clubName: clubName});

    if (club) {
      return club._id;
    }
    else {
      return Clubs.insert({
        createdAt: (new Date()),
        clubName: clubName,
        members: [this.userId],
        clubDescription: clubDescription,
        clubCategory: clubCategory,
        clubTag: clubTag,
        PersonalityTest: PersonalityTest
      })
    }
  },

  joinClub: function (clubName) {
    var club = FedsClubs.findOne({clubName: clubName});

    if (!club) {
      return 'group doesn\'t exist';
    }

    if (_(club.members).contains(this.userId)) {
      return 'already in group';
    }

    return FedsClubs.update(club, {$push: {members: this.userId}});
  }

});