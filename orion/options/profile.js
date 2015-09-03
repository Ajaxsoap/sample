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
  picture: orion.attribute('file', {
    label: orion.helpers.getTranslation('accountsPictureLabel'),
    optional: true
  })

});
