/**
 * Initialize the profile schema option with its default value
 */
Options.set( 'profileSchema', {
  name: {
    type: String,
    label: orion.helpers.getTranslation( 'accounts.schema.profile.name' ) // leave it like this to keep the translation
  },
  company: orion.attribute( 'hasOne', {
    label: "Company"
  }, {
    collection: Companies,
    titleField: 'name',
    // additionalFields: ['_id'],
    publicationName: 'CompanyName'
  } ),
  branch: orion.attribute( 'hasOne', {
    label: "Branch"
  }, {
    collection: Branches,
    titleField: 'branch',
    publicationName: 'BranchName'
  } ),
  products: orion.attribute( 'hasMany', {
    label: "Insurance Type",
    optional: true,
  }, {
    collection: Products,
    titleField: 'name',
    additionalFields: [ '_id' ],
    publicationName: 'insuranceType'
  } ),
  insurer: orion.attribute( 'hasMany', {
    label: "Insurer",
    optional: true,
  }, {
    collection: Companies,
    titleField: 'name',
    additionalFields: [ '_id' ],
    publicationName: 'insurers'
  } ),
  picture: orion.attribute( 'file', {
    label: "Upload Profile Picture",
    optional: true
  } )
} );

// Options.init( 'UsersEmailsSchema', {
//   emails: {
//     type: [ Object ],
//     optional: true,
//     label: orion.helpers.getTranslation( 'accounts.schema.emails.title' )
//   },
//   'emails.$.address': {
//     type: String,
//     regEx: SimpleSchema.RegEx.Email,
//     label: orion.helpers.getTranslation( 'accounts.schema.emails.address' )
//   }
// } );
