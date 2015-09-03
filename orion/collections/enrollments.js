// Enrollments collection
Enrollments = new orion.collection('enrollments', {
  singularName: 'enrollee',
  pluralName: 'enrollments',
  pub: 'tabular_enrollments',
  link: {
    title: 'Enrollments'
  },
  tabular: {
    columns: [
      {data: "fullName()", title: "Name"},
      orion.attributeColumn('createdAt','policyDetails.effectivityDate', 'Effectivity Date'),
      orion.attributeColumn('createdAt','policyDetails.maturityDate', 'Maturity Date'),
      orion.attributeColumn('hasOne','companyId','Company'),
      orion.attributeColumn('hasOne','branchId','Branch'),
      {data:"monthCount()", title: "Month Left"},
      {data:"loanCycle()", title: "Loan Cycle" }
  ],
  extraFields: ['firstName','lastName','_version']
  }
}).vermongo({timestamps: true, userId: 'modifierId', ignoredFields: ['']});

Enrollments.attachSchema(new SimpleSchema({
    firstName: {
      type: String,
      max: 50,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    lastName: {
      type: String,
      max: 50,
      optional: true,
      autoform: {
          afFormGroup: {
            'formgroup-class': 'col-xs-6 col-sm-4'
          }
      }
    },
    middleName: {
      type: String,
      max: 50,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
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
      label: "Age",
      max: 65,
      optional: true,
      // autoValue:function(){
      //   var dayBirth = this.birthdate.value("");
      //   // var age = moment().diff(moment(dayBirth, 'MM/DD/YYYY'), 'years');
      //   //   console.log(age);
      //     return dayBirth;
      // },
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
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },

    address: {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'address.phone': {
      type: Number,
      label: "Phone",
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'address.address': {
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'address.city':{
      type: String,
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    beneficiary: {
      type: Array,
      optional: true,
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
        afObjectField: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    policyDetails: {
      type:Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'container-fluid row'
        }
      }
    },
    'policyDetails.effectivityDate': {
      type: Date,
      label: "Effectivity Date",
      optional: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'policyDetails.maturityDate': {
      type: Date,
      label: "Maturity Date",
      optional: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    civilStatus :{
      type: Object,
      optional: true,
    },
    'civilStatus.maritalStatus': {
      type: String,
      label: "Marital Status",
      optional: true,
      allowedValues:['Single','Married','Widow','Annuled'],
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-12'
        }
      }
    },
    'civilStatus.spouseName': {
    type: String,
      label: "Spouse Name",
      optional: true,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'civilStatus.spouseDateOfBirth': {
      type: Date,
      label: "Spouse Birthdate",
      optional: true,
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'civilStatus.spouseAge': {
      type: Number,
      label: "Spouse Age",
      min:18,
      max:65,
      optional: true,
      autoform: {
          'formgroup-class': 'col-xs-6 col-sm-4'
      }
    },
    children: {
      type: Array,
      optional: true,
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
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'children.$.age': {
      type: Number,
      label: "Age of Child",
      optional: true,
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
    },
    'parent.$': {
      type: Object,
      optional: true,
      blackbox: true,
      autoform: {
        afObjectField: {
          bodyClass: 'row'
        }
      }
    },
    'parent.$.name': {
      type: String,
      label: "Parent Name",
      optional: true,
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
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'parent.$.age': {
      type: Number,
      label: "Age of Parent",
      optional: true,
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
      autoform: {
        type: "bootstrap-datepicker",
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    'sibling.$.age': {
      type: Number,
      label: "Sibling Age",
      optional: true,
      min: 1,
      max: 22,
      autoform: {
        afFormGroup: {
          'formgroup-class': 'col-xs-6 col-sm-4'
        }
      }
    },
    companyId: orion.attribute('hasOne',{
      label: "Company",
      optional: true,
    },
    {
      collection: Companies,
      titleField: 'name',
      additionalFields: ['active'],
      publicationName: 'CompanyCol'
    }),
    branchId: orion.attribute('hasOne', {
      label: "Branch",
      optional: true,
    },
    {
      collection: Branches,
      titleField: 'branch',
      additionalFields: ['active'],
      publicationName: 'BranchCol'
    }
    ),
    productId: orion.attribute('hasOne', {
      label: "Insurance Type",
      optional: true,
    },
    {
      collection: Products,
      titleField: 'name',
      additionalFields: ['active'],
      publicationName: 'prodInsurance'
    }
    ),
    createdBy: orion.attribute('createdBy'),
    createdAt: orion.attribute('createdAt')
}));

Claim = new orion.collection('claims', {
  singularName: 'claim',
  pluralName: 'claims',
  link: {
    title: 'Claims'
  },
  tabular: {
    columns: [
      orion.attributeColumn('createdAt', 'dateFiled', 'Date Filed'),
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
  dateFiled: orion.attribute('createdAt'),
  claimNumber: {
    type: String,
    label: "Claim Number",
    autoform: {
      afFieldInput: {
        //type: 'autocomplete-input',
        placeholder: 'CompanyName-ProductType-Year-XXXX'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6'
      }
    }
  },
  enrollmentId: orion.attribute('hasOne', {
    label: "Insured Name",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6'
      }
    }
  },
  {
    collection: Enrollments,
    titleField: 'firstName',
    additionalFields:['lastName'],
    publicationName: 'enrollledPub'
  }
  ),
  clientType: {
    type: String,
    label: "Client Type",
    allowedValues: ['Principal','Dependent-Children','Dependent-Spouse','Dependent-Sibling','Dependent-Parent'],
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  status: {
    type: String,
    allowedValues: ['Pending','Approved','Denied'],
    defaultValue: 'Pending',
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  ammountPaid: {
    type: Number,
    label: "Amount Paid",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  causeOfDeath: {
    type: String,
    label: "life - Cause of Death",
    allowedValues: [
      'Cardiovascular',
      'Respiratory',
      'Renal failure',
      'Cancer',
      'Accident',
      'Diabetes',
      'Animal/Insect bite',
      'liver illness',
      'others'
    ],
    optional: true,
    autoform: {
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
      'community acquired pneumonia',
      'others'
    ],
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-6 col-sm-4',

    }
  },
  file: orion.attribute('file',{
    label: "Attachments",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-6 col-sm-4'
    }
  }),
  createdBy: orion.attribute('createdBy'),
  createdAt: orion.attribute('createdAt')
}));

// Helpers

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

Enrollments.helpers({
  fullName: function() {
    return this.firstName + ' ' + this.lastName;
  },
  monthCount: function() {
    var dateNow = null;
    var dateMaturity = this.policyDetails.maturityDate;
    var monthLeft = countdown(dateNow, dateMaturity, countdown.MONTHS | countdown.DAYS, 2).toHTML("label");
    //console.log(monthLeft);
    return monthLeft;
  },
  loanCycle: function() {
    var version = (this._version);
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
