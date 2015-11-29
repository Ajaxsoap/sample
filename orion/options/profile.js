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
    // additionalFields: ['_id'],
    publicationName: 'CompanyName'
  }),
  branch: orion.attribute('hasOne', {
    label: "Branch"
    },
    {
      collection: Branches,
      titleField: 'branch',
      publicationName: 'BranchName'
    }
  ),
  insurer: orion.attribute('hasMany', {
    label: "Insurer",
    optional: true,
  },
  {
    collection: Companies,
    titleField: 'name',
    // additionalFields: ['_id'],
    publicationName: 'insurerName'
  }
  ),
  picture: orion.attribute('file', {
    label: "Upload Profile Picture",
    optional: true
  })
});
