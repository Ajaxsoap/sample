Meteor.methods({
  "userEnrollCount": function(doc) {
    doc.order = incrementCounter("order");
    Meteor.users.insert(doc);
    return doc.order;
  }
});
