Meteor.publish("insurers", function(){
  return Insurers.find();
});
