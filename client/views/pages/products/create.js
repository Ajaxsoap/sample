Template.productsCreate.events({
  'click .create-btn': function () {
    $('#orionBootstrapCollectionsCreateForm').submit();
  }
  // 'change input[name=grossProfit]': function(event, template){
  //   var gross = $(event.target).val();
  //   var netPremium = $('input[name=netPremium]');
  //   var grossPremium = $('input[name=grossPremium]');
  //   template.grossPremium.val(netPremium + gross);
  // },
});


AutoForm.addHooks('orionBootstrapCollectionsCreateForm', {
  onSuccess: function() {
    RouterLayer.go(this.collection.indexPath());
  }
});
