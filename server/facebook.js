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
}




