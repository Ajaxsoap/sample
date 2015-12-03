// Enrollments collection
Enrollments = new orion.collection('enrollments', {
  singularName: 'enrollee',
  pluralName: 'enrollments',
  pub: 'tabular_enrollee',
  link: {
    title: 'Enrollments'
  },
  tabular: {
    columns: [
      orion.attributeColumn('createdAt','createdAt','Enrolled Date'),
      {data: "fullName", title: "Name"},
      {
        data: "effectivityDate",
        title:"Effectivity Date",
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('ll');
          } else {
            return "Never";
          }
        }
      },
      {
        data: "maturityDate",
        title:"Maturity Date",
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('ll');
          } else {
            return "Never";
          }
        }
      },
      {data:"company", title:"Company",
      render: function(val, type, doc){
        var company = val;
        var companyName = Companies.findOne(company);
        if (companyName) {
          var cmpny = companyName.name;
          return cmpny;
        }
      }
      },
      {data:'branch', title:"Branch",
      render: function(val, type, doc){
        var branch = val;
        var branchName = Branches.findOne(branch);
        if (branchName) {
          var brnch = branchName.branch;
          return brnch;
          }
        }
      },
      {data:"monthCount()", title: "Month Left"},
      {data:"loanCycle()", title: "Loan Cycle" }
  ],
  extraFields: ['company','branch','_version']
  }
}).vermongo({timestamps: true, userId: 'modifierId', ignoredFields: ['']});

enrolleeVersion = Enrollments.getVersionCollection();

Enrollments.attachSchema(new SimpleSchema({
    fullName: {
      type: String,
      label: 'Fullname - (First Name Middle Initial, Last Name )',
      max: 50,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-10 col-sm-6'
        }
      }
    },
    company: {
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4'
        }
      },
      autoValue: function() {
      if (this.isInsert) {
        var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
        if (user) {
          return user && user.profile.company;
        }
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
    },
    branch: {
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4'
        }
      },
      autoValue: function() {
      if (this.isInsert) {
        var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
        if (user) {
          return user && user.profile.branch;
        }
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    }
    },
    insurer: {
      type: String,
      optional: true,
      autoform: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4'
      },
      autoValue: function() {
        if (this.isInsert) {
          var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
          var insurerName = user.profile.insurer;
          if ( insurerName ) {
            return insurerName[0];
          }
        } else {
          this.unset();  // Prevent user from supplying their own value
        }
      }
    },
    productId: orion.attribute('hasMany', {
      label: 'Insurance Type',
      autoform: {
        'formgroup-class': 'col-xs-8 col-sm-6'
      },
    },
    {
      collection: Products,
      titleField: 'name',
      publicationName: 'userProducts',
      // filter: function(userId) {
      //   var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      //   var profile = user.profile.name;
      //   if ( Roles.userHasRole(userId, "admin") ) {
      //     console.log("Admin");
      //     return {};
      //   } else if ( Roles.userHasRole(userId, "HQ") ) {
      //     console.log();
      //     return {};
      //   } else if ( Roles.userHasRole(userId, "Branch") ) {
      //     return { productId: user.profile.productId };
      //   }
      // }
    }),
    tin: {
      type: String,
      label: 'Tax Identification Number',
      autoform: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    },
    birthdate: {
      type: Date,
      label: "Birthday",
      optional: true,
      autoform: {
        type: 'bootstrap-datepicker',
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    ageOfEnrollee: {
      type: Number,
      label: "Age - (Between 18 - 65 years old)",
      max: 65,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    gender: {
      type: String,
      allowedValues: ["Male","Female"],
      optional: true,
      autoform: {
        type: "select",
        options: function(){
          return [
            {label:'Male', value: "Male"},
            {label:'Female', value: 'Female'},
          ];
        },
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    phone: {
      type: String,
      label: "Phone",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    address: {
      type: String,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    city:{
      type: String,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    beneficiary: {
      type: Array,
      optional: true,
      blackbox: true,
      autoform: {
        group: "3. Beneficiary",
      }
    },
    'beneficiary.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'beneficiary.$.name': {
      type: String,
      label: "Name",
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    effectivityDate: {
      type: Date,
      label: "Effectivity Date",
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-9 col-sm-6'
        }
      }
    },
    maturityDate: {
      type: Date,
      label: "Maturity Date",
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-9 col-sm-6'
        }
      }
    },

    maritalStatus: {
      type: String,
      label: "Marital Status",
      optional: true,
      blackbox: true,
      allowedValues:['Single','Married','Widow','Annuled'],
      autoform: {
        type: "select",
        options: function(){
          return [
            {label:'Single', value: "Single"},
            {label:'Married', value: 'Married'},
            {label:'Widow', value:'Widow'},
            {label:'Annuled', value: 'Annuled'}
          ];
        },
        afFormGroup: {
          'formgroup-class': 'col-xs-12'
        }
      }
    },
    spouseName: {
      type: String,
      label: "Spouse Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    spouseDateOfBirth: {
      type: Date,
      label: "Spouse Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    spouseAge: {
      type: Number,
      label: "Spouse Age - (Between 18 - 65 years old)",
      optional: true,
      blackbox: true,
      min:18,
      max:65,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    children: {
      type: Array,
      optional: true,
      blackbox: true,
      minCount: 0,
      maxCount: 10,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'children.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.name': {
      type: String,
      label: "Child Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.birthdate': {
      type: Date,
      label: "Child Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.age': {
      type: Number,
      label: "Age of Child - (Between 1 - 22 years old)",
      optional: true,
      blackbox: true,
      min: 1,
      max: 22,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    parent: {
      type: Array,
      optional: true,
      minCount: 0,
      maxCount: 2,
      autoform: {
        group: "6. Parents",
      }
    },
    'parent.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'parent.$.name': {
      type: String,
      label: "Parent Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'parent.$.dateOfBirth': {
      type: Date,
      label: "Parent Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'parent.$.age': {
      type: Number,
      label: "Age of Parent - (Maximum of 65 years old)",
      optional: true,
      blackbox: true,
      min: 18,
      max: 65,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    sibling: {
      type: Array,
      optional: true,
      blackbox: true,
      minCount: 0,
      maxCount: 10,
    },
    'sibling.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'sibling.$.name': {
      type: String,
      label: "Sibling Name",
      optional: true,
      blackbox: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'sibling.$.birthdate': {
      type: Date,
      label: "Sibling Birthdate",
      optional: true,
      blackbox: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'sibling.$.age': {
      type: Number,
      label: "Sibling Age - (Between 18 - 22 years old)",
      optional: true,
      blackbox: true,
      min: 1,
      max: 22,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },

    createdAt: orion.attribute('createdAt'),
    createdBy: orion.attribute('createdBy'),

}));

// Claims collection
Claim = new orion.collection('claims', {
  singularName: 'claim',
  pluralName: 'claims',
  link: {
    title: 'Claims'
  },
  tabular: {
    columns: [
      {
        data: 'dateFiled',
        title:'Date Filed',
        render: function (val, type, doc) {
          if (val instanceof Date) {
            return moment(val).format('lll');
          } else {
            return "Never";
          }
        }
      },
      {data:'daysProcessed()', title: 'Days Processed'},
      {data: 'claimNumber', title: "Claim Reference Number"},
      orion.attributeColumn('hasOne', 'enrollmentId', 'Name of Insured'),
      {data: 'clientType', title: 'Client Type' },
      {data:"status", title: "Status",
        tmpl: Meteor.isClient && Template.status
      },
      {data:'ammountPaid', title:'Amount Paid'},
      {data:'causeOfDeath', title:'Cause Of Death'},
      {data:'medical', title:'Medical'}
    ],
    additionalFields:['dateFiled','causeOfDeath','medical']
  }
});

Claim.attachSchema(new SimpleSchema ({
  dateFiled: {
    type: Date,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
      if (this.isInsert) {
        return new Date();
      } else if (this.isUpsert) {
        return {$setOnInsert: new Date()};
      } else {
        this.unset();  // Prevent user from supplying their own value
      }
    },

  },
  company: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
    if (this.isInsert) {
      var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      if (user) {
        return user && user.profile.company;
      }
    } else {
      this.unset();  // Prevent user from supplying their own value
    }
  }
  },
  branch: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function() {
    if (this.isInsert) {
      var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      if (user) {
        return user && user.profile.branch;
      }
    } else {
      this.unset();  // Prevent user from supplying their own value
    }
  }
},
insurer: {
  type: String,
  optional: true,
  autoform: {
    'formgroup-class': 'hidden col-xs-6 col-sm-4'
  },
  autoValue: function() {
    if (this.isInsert) {
      var user = Meteor.users.findOne({ "_id": this.userId }, { fields: { "profile": 1 } });
      var insurerName = user.profile.insurer;
      if ( insurerName ) {
        return insurerName[0];
    } else {
      this.unset();  // Prevent user from supplying their own value
    }
  }
}
},

enrollmentId: orion.attribute('hasOne', {
    label: "Principal Name",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  {
    collection: Enrollments,
    titleField: 'fullName',
    additionalFields:['_id'],
    publicationName: 'enrolledClaim',
    filter: function(userId) {
      var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
      if ( Roles.userHasRole(userId, "admin") ) {
        // console.log( "Hello Admin" );
        return {};
      } else if ( Roles.userHasRole(userId, 'HQ') ) {
        // console.log( "Hello HQ" );
        return { company: user.profile.company };
      } else if ( Roles.userHasRole(userId, 'Branch') ) {
        // console.log( "Hello Branch" );
        return { createdBy: userId };
      } else if ( Roles.userHasRole(userId, 'insurer') ) {
        // console.log( "Hello Insurer" );
        return {};
      }
    }
  }),
  clientType: {
    type: String,
    label: "Client Type",
    optional: true,
    allowedValues: [
      'Principal',
      'Dependent-Children',
      'Dependent-Spouse',
      'Dependent-Sibling',
      'Dependent-Parent'
    ],
    autoform: {
      type: "select",
      options: function(){
        return [
          {label:'Principal', value: "Principal"},
          {label:'Dependent-Children', value: 'Dependent-Children'},
          {label:'Dependent-Spouse', value:'Dependent-Spouse'},
          {label:'Dependent-Parent', value: 'Dependent-Parent'}
        ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  childrenId: orion.attribute('hasMany', {
      label: "Dependent-Children",
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      },
      // autoValue:function(){
      //   if (this.insert) {
      //     var enrollee = this.siblingField("_id").value;
      //     if ( enrollee ) {
      //       return { children: enrollee };
      //     }
      //   }
      // }
    },
    {
      collection: Enrollments,
      titleField: 'children.name',
      additionalFields:['fullName'],
      publicationName: 'childrenClaim',
      filter: function(userId) {
        var enrollee = Enrollments.findOne({fullName: 1, children: 1});
        return { children: enrollee };
        // var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
        // if ( Roles.userHasRole(userId, "admin" ) ) {
        //   return {};
        // } else if ( Roles.userHasRole(userId, 'HQ' ) ) {
        //   return { company: user.profile.company };
        // } else if ( Roles.userHasRole(userId, 'Branch' ) ) {
        //   return { createdBy: userId };
        // } else if ( Roles.userHasRole(userId, 'insurer' ) ) {
        //   return "No Data";
        // }
      }
    }),
    spouseId: orion.attribute('hasOne', {
        label: "Dependent-Spouse",
        optional: true,
        autoform: {
          afFormGroup: {
            'formgroup-class': 'col-xs-6 col-sm-4'
          }
        }
      },
      {
        collection: Enrollments,
        titleField: 'spouseName',
        additionalFields:['_id'],
        publicationName: 'spouseClaim',
        filter: function(userId) {
          var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
          if ( Roles.userHasRole(userId, "admin") ) {
            console.log( "Hello Admin" );
            return {};
          } else if ( Roles.userHasRole(userId, 'HQ') ) {
            console.log( "Hello HQ" );
            return { company: user.profile.company };
          } else if ( Roles.userHasRole(userId, 'Branch') ) {
            console.log( "Hello Branch" );
            return { createdBy: userId };
          } else if ( Roles.userHasRole(userId, 'insurer') ) {
            console.log( "Hello Insurer" );
            return {};
          }
        }
      }),
    parentId: orion.attribute('hasMany', {
        label: "Dependent-Parent",
        optional: true,
        autoform: {
          afFormGroup: {
            'formgroup-class': 'col-xs-6 col-sm-4'
          }
        }
      },
      {
        collection: Enrollments,
        titleField: 'parent.name',
        additionalFields:['_id'],
        publicationName: 'parentClaim',
        filter: function(userId) {
          var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
          if ( Roles.userHasRole(userId, "admin") ) {
            console.log( "Hello Admin" );
            return {};
          } else if ( Roles.userHasRole(userId, 'HQ') ) {
            console.log( "Hello HQ" );
            return { company: user.profile.company };
          } else if ( Roles.userHasRole(userId, 'Branch') ) {
            console.log( "Hello Branch" );
            return { createdBy: userId };
          } else if ( Roles.userHasRole(userId, 'insurer') ) {
            console.log( "Hello Insurer" );
            return {};
          }
        }
      }),
      siblingId: orion.attribute('hasMany', {
          label: "Dependent-Sibling",
          optional: true,
          autoform: {
            afFormGroup: {
              'formgroup-class': 'col-xs-6 col-sm-4'
            }
          }
        },
        {
          collection: Enrollments,
          titleField: 'sibling.name',
          additionalFields:['_id'],
          publicationName: 'siblingClaim',
          filter: function(userId) {
            var user = Meteor.users.findOne({"_id": userId},{fields: {profile: 1}});
            if ( Roles.userHasRole(userId, "admin") ) {
              console.log( "Hello Admin" );
              return {};
            } else if ( Roles.userHasRole(userId, 'HQ') ) {
              console.log( "Hello HQ" );
              return { company: user.profile.company };
            } else if ( Roles.userHasRole(userId, 'Branch') ) {
              console.log( "Hello Branch" );
              return { createdBy: userId };
            } else if ( Roles.userHasRole(userId, 'insurer') ) {
              console.log( "Hello Insurer" );
              return {};
            }
          }
        }),
  status: {
    type: String,
    allowedValues: ['Pending','Approved','Denied'],
    defaultValue: 'Pending',
    autoform: {
      type: "select",
      options: function(){
        return [
          {label:'Pending', value: "Pending"},
          {label:'Approved', value: 'Approved'},
          {label:'Denied', value:'Denied'},
        ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  amountPaid: {
    type: String,
    label: 'Amount Paid',
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  partialPayment: {
    type: String,
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  causeOfDeath: {
    type: String,
    label: "Life - Cause of Death",
    allowedValues: [
      'Cardiovascular',
      'Respiratory',
      'Renal failure',
      'Cancer',
      'Accident',
      'Diabetes',
      'Animal/Insect bite',
      'Liver illness',
      'others'
    ],
    optional: true,
    autoform: {
      type: "select",
      options: function(){
        return [
          {label:'Cardiovascular', value: "Cardiovascular"},
          {label:'Respiratory', value: 'Respiratory'},
          {label:'Renal failure', value:'Renal failure'},
          {label:'Cancer', value:'Cancer'},
          {label:'Accident', value:'Accident'},
          {label:'Diabetes', value:'Diabetes'},
          {label:'Liver illness', value:'Liver illness'},
          {label:'others', value:'others'},
        ];
      },
      'formgroup-class': 'col-xs-6 col-sm-4',

    }
  },
  medical: {
    type: String,
    label: "Non-life - Medical",
    allowedValues: [
      'Animal/Insect bite',
      'Hypertension',
      'Diabetes',
      'CVA,Chronic Kidney disease',
      'Abration',
      'Hypersensitivity',
      'Community acquired pneumonia',
      'others'
    ],
    optional: true,
    autoform: {
      type: "select",
      options: function(){
        return [
          {label:'Animal/Insect bite', value: "Animal/Insect bite"},
          {label:'Hypertension', value: 'Hypertension'},
          {label:'Diabetes', value:'Diabetes'},
          {label:'Cancer', value:'Cancer'},
          {label:'CVA,Chronic Kidney disease', value:'CVA,Chronic Kidney disease'},
          {label:'Abration', value:'Abration'},
          {label:'Hypersensitivity', value:'Hypersensitivity'},
          {label:'Community acquired pneumonia', value:'Community acquired pneumonia'},
          {label:'others', value:'others'},
        ];
      },
      'formgroup-class': 'col-xs-6 col-sm-4',
    }
  },
  claimNumber: {
    type: String,
    label: "Claim Number",
    optional: true,
    autoform: {
      afFieldInput: {
        placeholder: 'CompanyName-ProductType-Year-XXXX',
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  remarks: {
    type: String,
    label: "Remarks - (For Insurer)",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-12 col-sm-12'
    }
  },
  remarksCompany: {
    type: String,
    label: "Remarks - (Company)",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-12 col-sm-12'
    }
  },

  file: orion.attribute('file',{
    label: "Upload File Attachments",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-4 col-sm-4'
    }
  }),
  createdBy: orion.attribute('createdBy')
}));


Enrollments.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

Claim.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

// Helpers

Enrollments.helpers({
  monthCount: function() {
    var self = this;
    var dateNow = null;
    var dateMaturity = this.maturityDate;
    var monthLeft = countdown(dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2);
    var message = monthLeft.toHTML("label");
    return message;
  },
  loanCycle: function() {
    var version = (this._version);
  //console.log(version);
    return version;
  }
});

Claim.helpers({
  daysProcessed: function(){
    var days = null;
    var filedDate = this.dateFiled;
    var daysCount = countdown(days,filedDate, countdown.MONTHS | countdown.DAYS, 2).toHTML("label");
    //console.log(daysCount);
    return daysCount;
  }
});

Enrollments.before.insert(function(userId, doc){
  doc.createdAt = moment().toDate();
});

Claim.before.insert(function(userId, doc){
  doc.createdAt = moment().toDate();
});
