SSR.compileTemplate('emailClaim', Assets.getText('emailClaim.html'));

Meteor.methods({
  sendClaimsEmail: function(message) {
    // check(message, Object);

    Meteor.defer( function(){
      Email.send({
        to: "villanueva.marvin@gmail.com",
        cc: "jonjayagbuya.pinoyako@gmail.com",
        from: "Claims <claims@app.pais.com.ph>",
        subject: "New Claim",
        html: SSR.render('emailClaim')
      });
    })
  }
})
