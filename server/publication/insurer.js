Meteor.publish("insurers", function(argument){
  return Insurers.find();
});
