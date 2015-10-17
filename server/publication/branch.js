Meteor.publish("branch", function(){
  return Branches.find();
});
