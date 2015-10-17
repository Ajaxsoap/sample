Meteor.publish("company", function(){
  return Companies.find();
});
