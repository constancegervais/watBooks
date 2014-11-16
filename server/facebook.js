// first, remove configuration entry in case service is already configured
if (Meteor.isServer) {
    Meteor.startup(function () {

        //Set up Facebook connection
        Accounts.loginServiceConfiguration.remove(
        {
          service: "facebook"
        }),

        Accounts.loginServiceConfiguration.insert(
        {
          service: "facebook",
          appId: "1559639774266150",
          secret: "044185daffbd7119babaa168dfff9bb6"
        })
    });

    //Get Facebook data when a user is created
        Accounts.onCreateUser(function(options, user) {
            if (options.profile) {
                options.profile.picture = "http://graph.facebook.com/" + user.services.facebook.id + "/picture?width=300&height=300";
                user.profile = options.profile;
            };

            if(options.profile){
                var fb = new Facebook(user.services.facebook.accessToken);
                var data = fb.getFriendsData();

                user.profile.friends = data.data;

            };
            return user;
        });
}


function Facebook(accessToken) {
    this.fb = Meteor.require('fbgraph');
    this.accessToken = accessToken;
    this.fb.setAccessToken(this.accessToken);
    this.options = {
        timeout: 3000,
        pool: {maxSockets: Infinity},
        headers: {connection: "keep-alive"}
    }
    this.fb.setOptions(this.options);
}

Facebook.prototype.query = function(query, method) {
    var self = this;
    var method = (typeof method === 'undefined') ? 'get' : method;
    var data = Meteor.sync(function(done) {
        self.fb[method](query, function(err, res) {
            done(null, res);
        });
    });
    return data.result;
}

Facebook.prototype.getUserData = function() {
    return this.query('me');
}

Meteor.methods({
    getUserData: function() {
        var fb = new Facebook(Meteor.user().services.facebook.accessToken);
        var data = fb.getUserData();
        return data;
    }
});


