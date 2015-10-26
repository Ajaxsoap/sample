/**
 * Initialize the profile schema option with its default value
 */
Options.set('profileSchema', {
  name: {
    type: String,
    label: orion.helpers.getTranslation('accounts.schema.profile.name') // leave it like this to keep the translation
  },
  company: orion.attribute('hasOne',{
    label: "Company"
  },
  {
    collection: Companies,
    titleField: 'name',
    additionalFields: ['active'],
    publicationName: 'CompanyName'
  }),
  branch: orion.attribute('hasOne', {
    label: "Branch"
    },
    {
      collection: Branches,
      titleField: 'branch',
      additionalFields: ['active'],
      publicationName: 'BranchName'
    }
  ),
  insurer: orion.attribute('hasOne', {
    label: "Insurer",
    optional: true,
    blackbox:true,
    autoform: {
      afFieldInput: {
        placeholder: 'You don\'t have to do anything here, for admin only.',
      },
    }
  },
  {
    collection: Insurers,
    titleField: 'name',
    //additionalFields: ['name'],
    publicationName: 'insurerName',
    filter: function(userId) {
      var option = {'formgroup-class': 'hidden'};
      if (!Roles.userHasRole(userId, "admin") ) {        
        return option;
      } else {
        return {};
      }
    }
  }
  ),
  picture: orion.attribute('file', {
    label: "Upload Profile Picture",
    optional: true
  })

});
