// Enrollments collection
Enrollments = new orion.collection( 'enrollments', {
  singularName: 'enrollee',
  pluralName: 'enrollments',
  sslink: {
    title: 'Enrollments'
  },
  tabular: {
    columns: [
      orion.attributeColumn( 'createdAt', 'createdAt', 'Enrolled Date' ), {
        data: "fullName",
        title: "Name"
      }, {
        data: "effectivityDate",
        title: "Effectivity Date",
        render: function ( val, type, doc ) {
          if ( val instanceof Date ) {
            return moment( val ).format( 'll' );
          } else {
            return "Never";
          }
        }
      }, {
        data: "maturityDate",
        title: "Maturity Date",
        render: function ( val, type, doc ) {
          if ( val instanceof Date ) {
            return moment( val ).format( 'll' );
          } else {
            return "Never";
          }
        }
      }, {
        data: "company",
        title: "Company",
        render: function ( val, type, doc ) {
          var company = val;
          var companyName = Companies.findOne( company );
          if ( companyName ) {
            var cmpny = companyName.name;
            return cmpny;
          }
        },
        searchable: true
      }, {
        data: 'branch',
        title: "Branch",
        render: function ( val, type, doc ) {
          var branch = val;
          var branchName = Branches.findOne( branch );
          if ( branchName ) {
            var brnch = branchName.branch;
            return brnch;
          }
        }
      }, {
        data: "monthCount()",
        title: "Month Left"
      }
    ],
    extraFields: [ 'company', 'branch' ]
  }
} );
// }).vermongo({
//   timestamps: true,
//   userId: 'modifierId',
//   ignoredFields: ['']
// });

// enrolleeVersion = Enrollments.getVersionCollection();



Enrollments.attachSchema( new SimpleSchema( {
  dateEnrolled: {
    type: Date,
    label: "Date Enrolled",
    autoform: {
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-md-2 col-lg-1'
      }
    }
  },
  centerNumber: {
    type: String,
    label: "Center Code",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  fullName: {
    type: String,
    index: true,
    unique: true,
    label: 'Full Name',
    max: 50,
    optional: true,
    autoform: {
      placeholder: "Firstname MI, LastName",
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4 col-lg-3'
      }
    }
  },
  company: {
    type: String,
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'hidden col-xs-6 col-sm-4 col-lg-2'
      }
    },
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        if ( user ) {
          return user && user.profile.company;
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
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
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        if ( user ) {
          return user && user.profile.branch;
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  insurer: {
    type: [ String ],
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        var insurerName = user.profile.insurer;
        if ( insurerName ) {
          return insurerName;
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  maritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  tin: {
    type: String,
    index: true,
    unique: true,
    optional: true,
    label: 'TIN',
    autoform: {
      'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
    }
  },
  birthDate: {
    type: Date,
    label: "Birthday",
    optional: true,
    autoform: {
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  ageOfEnrollee: {
    type: Number,
    label: "Age - (18 - 65 years old)",
    max: 65,
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  gender: {
    type: String,
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
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
  city: {
    type: String,
    label: "City",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  beneficiaryOne: {
    type: String,
    optional: true,
    label: "Name",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryOneBirthdate: {
    type: Date,
    optional: true,
    label: "Birthday",
    autoform: {
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryOneAge: {
    type: String,
    optional: true,
    label: "Age",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryOneGender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryOneMaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryOneRelationship: {
    type: String,
    label: "Relationship",
    optional: true,
    blackbox: true,
    allowedValues: [
      'Father', 'Mother', 'Brother', 'Sister', 'Brother-in-law', 'Sister-in-law', 'Spouse', 'Daughter', 'Son', 'Friend',
      'Sibling', 'Nephew', 'Niece', 'Granddaughter', 'Grandson', 'Live-In Partner',
      'Auntie', 'Uncle', 'Grandchildren', 'Grandparents',
      'Parents-in-law'
    ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'Father',
          value: 'Father',
        }, {
          label: 'Mother',
          value: 'Mother',
        }, {
          label: 'Brother',
          value: 'Brother',
        }, {
          label: 'Sister',
          value: 'Sister',
        }, {
          label: 'Sibling',
          value: 'Sibling',
        }, {
          label: 'Brother-in-law',
          value: 'Brother-in-law',
        }, {
          label: 'Sister-in-law',
          value: 'Sister-in-law',
        }, {
          label: 'Spouse',
          value: 'Spouse',
        }, {
          label: 'Daughter',
          value: 'Daughter',
        }, {
          label: 'Son',
          value: 'Son',
        }, {
          label: 'Friend',
          value: "Friend"
        }, {
          label: 'Nephew',
          value: "Nephew"
        }, {
          label: 'Niece',
          value: "Niece"
        }, {
          label: 'Auntie',
          value: "Auntie"
        }, {
          label: 'Uncle',
          value: "Uncle"
        }, {
          label: 'Granddaughter',
          value: "Granddaughter"
        }, {
          label: 'Grandson',
          value: 'Grandson'
        }, {
          label: 'Grandparents',
          value: "Grandparents"
        }, {
          label: 'Parents-in-law',
          value: "Parents-in-law"
        }, {
          label: 'Live-In Partner',
          value: "Live-In Partner"
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwo: {
    type: String,
    optional: true,
    blackbox: true,
    label: "Name",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwoBirthdate: {
    type: Date,
    optional: true,
    blackbox: true,
    label: "Birthday",
    autoform: {
      type: 'bootstrap-datepicker',
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwoAge: {
    type: String,
    optional: true,
    blackbox: true,
    label: "Age",
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwoGender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwoMaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  beneficiaryTwoRelationship: {
    type: String,
    label: "Relationship",
    optional: true,
    blackbox: true,
    allowedValues: [
      'Father', 'Mother', 'Brother', 'Sister', 'Brother-in-law', 'Sister-in-law', 'Spouse', 'Daughter', 'Son', 'Friend',
      'Sibling', 'Nephew', 'Niece', 'Granddaughter', 'Grandson', 'Live-In Partner',
      'Auntie', 'Uncle', 'Grandchildren', 'Grandparents',
      'Parents-in-law'
    ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'Father',
          value: 'Father',
        }, {
          label: 'Mother',
          value: 'Mother',
        }, {
          label: 'Brother',
          value: 'Brother',
        }, {
          label: 'Sister',
          value: 'Sister',
        }, {
          label: 'Sibling',
          value: 'Sibling',
        }, {
          label: 'Brother-in-law',
          value: 'Brother-in-law',
        }, {
          label: 'Sister-in-law',
          value: 'Sister-in-law',
        }, {
          label: 'Spouse',
          value: 'Spouse',
        }, {
          label: 'Daughter',
          value: 'Daughter',
        }, {
          label: 'Son',
          value: 'Son',
        }, {
          label: 'Friend',
          value: "Friend"
        }, {
          label: 'Nephew',
          value: "Nephew"
        }, {
          label: 'Niece',
          value: "Niece"
        }, {
          label: 'Auntie',
          value: "Auntie"
        }, {
          label: 'Uncle',
          value: "Uncle"
        }, {
          label: 'Granddaughter',
          value: "Granddaughter"
        }, {
          label: 'Grandson',
          value: 'Grandson'
        }, {
          label: 'Grandparents',
          value: "Grandparents"
        }, {
          label: 'Parents-in-law',
          value: "Parents-in-law"
        }, {
          label: 'Live-In Partner',
          value: "Live-In Partner"
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productsAvailed: {
    type: String,
    label: "Products Availed",
    optional: true,
    allowedValues: [
      'One Product', 'Two Products', 'Three Products', 'Four Products',
      'Five Products', 'Six Products', 'Seven Products',
      'Eight Products', 'Nine Products', 'Ten Products'
    ],
    autoform: {
      type: "selectize",
      firstOption: 'Select',
      options: function () {
        return [ {
          label: 'One Product',
          value: "One Product"
        }, {
          label: 'Two Products',
          value: "Two Products"
        }, {
          label: 'Three Products',
          value: "Three Products"
        }, {
          label: 'Four Products',
          value: "Four Products"
        }, {
          label: 'Five Products',
          value: "Five Products"
        }, {
          label: 'Six Products',
          value: "Six Products"
        }, {
          label: 'Seven Products',
          value: "Seven Products"
        }, {
          label: 'Eight Products',
          value: "Eight Products"
        }, {
          label: 'Nine Products',
          value: "Nine Products"
        }, {
          label: 'Ten Products',
          value: "Ten Products"
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  productOffering: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering1: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering2: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  }, 
  productOffering3: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering4: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering5: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering6: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering7: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering8: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productOffering9: {
    type: String,
    label: "Relationship",
    optional: true,
    autoform: {
      firstOption: "Select Relationship",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName1: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName2: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName3: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName4: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName5: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName6: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName7: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName8: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  productName9: {
    type: String,
    label: "Product Name",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  premium: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium1: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium2: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium3: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium4: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium5: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium6: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium7: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium8: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  premium9: {
    type: Number,
    label: "Premium",
    optional: true,
    decimal: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Premium",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    },
  },
  productRange: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange1: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange2: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange3: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange4: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange5: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange6: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange7: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange8: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  productRange9: {
    type: Number,
    label: "Product Range",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Range",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  insuredName: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName1: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName2: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName3: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName4: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName5: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName6: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName7: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName8: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  insuredName9: {
    type: String,
    label: "Name",
    optional: true,
    autoform: {
      firstOption: "Select",
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  effectivityDate: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate1: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate2: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate3: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate4: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate5: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate6: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate7: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate8: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  effectivityDate9: {
    type: Date,
    label: "Effectivity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate1: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate2: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate3: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate4: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate5: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
        forceParse: false
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate6: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate7: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate8: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  maturityDate9: {
    type: Date,
    label: "Maturity Date",
    optional: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy',
        daysOfWeekDisabled: [ 0, 6 ],
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle1: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle2: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle3: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle4: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle5: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle6: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle7: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle8: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  loanCycle9: {
    type: Number,
    label: "Loan Cycle",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-1'
      }
    }
  },
  products: {
    type: [ String ],
    label: "Products",
    optional: true,
    autoValue: function () {
      var product = this.siblingField( 'productName' ).value;
      var product1 = this.siblingField( 'productName1' ).value;
      var product2 = this.siblingField( 'productName2' ).value;
      var product3 = this.siblingField( 'productName3' ).value;
      var product4 = this.siblingField( 'productName4' ).value;
      var product5 = this.siblingField( 'productName5' ).value;
      var product6 = this.siblingField( 'productName6' ).value;
      var product7 = this.siblingField( 'productName7' ).value;
      var product8 = this.siblingField( 'productName8' ).value;
      var product9 = this.siblingField( 'productName9' ).value;
      return _.filter( [ product, product1, product2, product3, product4, product5,
        product6, product7, product8, product9
      ], Boolean );
    }
  },
  totalPremium: {
    type: Number,
    label: "Total Premium",
    optional: true,
    decimal: true,
    autoValue: function () {
      var prem = this.siblingField( 'premium' ).value;
      var prem1 = this.siblingField( 'premium1' ).value;
      var prem2 = this.siblingField( 'premium2' ).value;
      var prem3 = this.siblingField( 'premium3' ).value;
      var prem4 = this.siblingField( 'premium4' ).value;
      var prem5 = this.siblingField( 'premium5' ).value;
      var prem6 = this.siblingField( 'premium6' ).value;
      var prem7 = this.siblingField( 'premium7' ).value;
      var prem8 = this.siblingField( 'premium8' ).value;
      var prem9 = this.siblingField( 'premium9' ).value;
      var sumOfPrem = _.filter( [ prem, prem1, prem2, prem3, prem4, prem5,
        prem6, prem7, prem8, prem9
      ], Boolean );
      var sumPremium = sumOfPrem.reduce( function add( a, b ) {
        return a + b;
      }, 0 );
      return sumPremium;
    }
  },
  efffectiveDates: {
    type: [ String ],
    label: "Efffective Dates",
    optional: true,
    autoValue: function () {
      var effectiveDate = this.siblingField( 'effectiveDate' ).value;
      var effectiveDate1 = this.siblingField( 'effectiveDate1' ).value;
      var effectiveDate2 = this.siblingField( 'effectiveDate2' ).value;
      var effectiveDate3 = this.siblingField( 'effectiveDate3' ).value;
      var effectiveDate4 = this.siblingField( 'effectiveDate4' ).value;
      var effectiveDate5 = this.siblingField( 'effectiveDate5' ).value;
      var effectiveDate6 = this.siblingField( 'effectiveDate6' ).value;
      var effectiveDate7 = this.siblingField( 'effectiveDate7' ).value;
      var effectiveDate8 = this.siblingField( 'effectiveDate8' ).value;
      var effectiveDate9 = this.siblingField( 'effectiveDate9' ).value;
      return _.filter( [ effectiveDate, effectiveDate1, effectiveDate2, effectiveDate3, effectiveDate4, effectiveDate5,
        effectiveDate6, effectiveDate7, effectiveDate8, effectiveDate9
      ], Boolean );
    }
  },
  
  spouseName: {
    type: String,
    label: "Spouse Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  spouseBirthdate: {
    type: Date,
    label: "Spouse Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  spouseAge: {
    type: Number,
    label: "Spouse Age - (18 - 65 years old)",
    optional: true,
    blackbox: true,
    min: 18,
    max: 65,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  spouseMaritalStatus: {
    type: String,
    label: "Spouse Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  spouseGender: {
    type: String,
    label: "Spouse Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children: {
    type: String,
    label: "Children",
    optional: true,
    blackbox: true,
    allowedValues: [
      'One Child', 'Two Children', 'Three Children', 'Four Children',
      'Five Children', 'Six Children', 'Seven Children',
      'Eight Children', 'Nine Children', 'Ten Children'
    ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'One Child',
          value: "One Child"
        }, {
          label: 'Two Children',
          value: "Two Children"
        }, {
          label: 'Three Children',
          value: "Three Children"
        }, {
          label: 'Four Children',
          value: "Four Children"
        }, {
          label: 'Five Children',
          value: "Five Children"
        }, {
          label: 'Six Children',
          value: "Six Children"
        }, {
          label: 'Seven Children',
          value: "Seven Children"
        }, {
          label: 'Eight Children',
          value: "Eight Children"
        }, {
          label: 'Nine Children',
          value: "Nine Children"
        }, {
          label: 'Ten Children',
          value: "Ten Children"
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  childrenName: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  childrenBirthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  childrenAge: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  childrenMaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  childrenGender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  
  children2Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children2Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children2Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children2MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children2Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  
  children3Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children3Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children3Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children3MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children3Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children4Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children4Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children4Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children4MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children4Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children5Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children5Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children5Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children5MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children5Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children6Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children6Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children6Age: {
    type: Number,
    label: "Age -  (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children6MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children6Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children7Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children7Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children7Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children7MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children7Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children8Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children8Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children8Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children8MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children8Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children9Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children9Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children9Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children9MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children9Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children10Name: {
    type: String,
    label: "Children Name",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children10Birthdate: {
    type: Date,
    label: "Children Birthday",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children10Age: {
    type: Number,
    label: "Age - (1 - 22 years old)",
    optional: true,
    blackbox: true,
    min: 1,
    max: 22,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children10MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  children10Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parent: {
    type: String,
    label: "Add Parent",
    optional: true,
    allowedValues: [
      'One Parent', 'Two Parents'
    ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'One Parent',
          value: "One Parent"
        }, {
          label: 'Two Parents',
          value: "Two Parents"
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  parentName: {
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
  parentBirthdate: {
    type: Date,
    label: "Parent Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parentAge: {
    type: Number,
    label: "Parent Age - (Max of 65 years old)",
    optional: true,
    blackbox: true,
    min: 18,
    max: 65,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parentMaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parentGender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parent2Name: {
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
  parent2Birthdate: {
    type: Date,
    label: "Parent Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parent2Age: {
    type: Number,
    label: "Parent Age - (Max of 65 years old)",
    optional: true,
    blackbox: true,
    min: 18,
    max: 65,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parent2MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED'
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  parent2Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  siblings: {
    type: String,
    label: "Add Sibling",
    optional: true,
    allowedValues: [
      'One Sibling', 'Two Siblings', 'Three Siblings',
      'Four Siblings', 'Five Siblings', 'Six Siblings',
      'Seven Siblings', 'Eight Siblings', 'Nine Siblings',
      'Ten Siblings'
    ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'One Sibling',
          value: "One Sibling"
        }, {
          label: 'Two Siblings',
          value: "Two Siblings"
        }, {
          label: 'Three Siblings',
          value: "Three Siblings"
        }, {
          label: 'Four Siblings',
          value: "Four Siblings"
        }, {
          label: 'Five Siblings',
          value: "Five Siblings"
        }, {
          label: 'Six Siblings',
          value: "Six Siblings"
        }, {
          label: 'Seven Siblings',
          value: "Seven Siblings"
        }, {
          label: 'Eight Siblings',
          value: "Eight Siblings"
        }, {
          label: 'Nine Siblings',
          value: "Nine Siblings"
        }, {
          label: 'Ten Siblings',
          value: "Ten Siblings"
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  siblingName: {
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
  siblingBirthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  siblingAge: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  siblingMaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  siblingGender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling2Name: {
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
  sibling2Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling2Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling2MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling2Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling3Name: {
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
  sibling3Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling3Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling3MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling3Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling4Name: {
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
  sibling4Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling4Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling4MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling4Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling5Name: {
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
  sibling5Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling5Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling5MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling5Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling6Name: {
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
  sibling6Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling6Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling6MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling6Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling7Name: {
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
  sibling7Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling7Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling7MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling7Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling8Name: {
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
  sibling8Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling8Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling8MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling8Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling9Name: {
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
  sibling9Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling9Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling9MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling9Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling10Name: {
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
  sibling10Birthdate: {
    type: Date,
    label: "Sibling Birthdate",
    optional: true,
    blackbox: true,
    autoform: {
      type: "bootstrap-datepicker",
      datePickerOptions: {
        format: 'mm-dd-yyyy'
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling10Age: {
    type: Number,
    label: "Sibling Age",
    optional: true,
    blackbox: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling10MaritalStatus: {
    type: String,
    label: "Marital Status",
    optional: true,
    blackbox: true,
    allowedValues: [ 'SINGLE', 'MARRIED', 'WIDOWED', 'ANNULED', 'SEPARATED' ],
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'SINGLE',
          value: "SINGLE"
        }, {
          label: 'MARRIED',
          value: 'MARRIED'
        }, {
          label: 'WIDOWED',
          value: 'WIDOWED',
        }, {
          label: 'ANNULED',
          value: 'ANNULED'
        }, {
          label: 'SEPARATED',
          value: 'SEPARATED'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  sibling10Gender: {
    type: String,
    label: "Gender",
    allowedValues: [ "MALE", "FEMALE" ],
    optional: true,
    autoform: {
      type: "selectize",
      options: function () {
        return [ {
          label: 'MALE',
          value: "MALE"
        }, {
          label: 'FEMALE',
          value: 'FEMALE'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-4 col-sm-4 col-lg-2'
      }
    }
  },
  createdAt: orion.attribute( 'createdAt' ),
  createdBy: orion.attribute( 'createdBy' ),

} ) );

// Claims collection
Claim = new orion.collection( 'claims', {
  singularName: 'claim',
  pluralName: 'claims',
  link: {
    title: 'Claims'
  },
  tabular: {
    columns: [ {
        data: 'dateFiled',
        title: 'Date Filed',
        render: function ( val, type, doc ) {
          if ( val instanceof Date ) {
            return moment( val ).format( 'lll' );
          } else {
            return "Never";
          }
        }
      }, {
        data: 'daysProcessed()',
        title: 'Days Processed'
      }, {
        data: 'claimNumber',
        title: "Claim Reference Number"
      },
      orion.attributeColumn( 'hasOne', 'enrollmentId', 'Name of Insured' ), {
        data: 'clientType',
        title: 'Client Type'
      }, {
        data: "status",
        title: "Status",
        tmpl: Meteor.isClient && Template.status
      }, {
        data: 'ammountPaid',
        title: 'Amount Paid'
      }, {
        data: 'causeOfDeath',
        title: 'Cause Of Death'
      }, {
        data: 'medical',
        title: 'Medical'
      }
    ],
    additionalFields: [ 'dateFiled', 'causeOfDeath', 'medical' ]
  }
} );

Claim.attachSchema( new SimpleSchema( {
  dateFiled: {
    type: Date,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function () {
      if ( this.isInsert ) {
        return new Date();
      } else if ( this.isUpsert ) {
        return {
          $setOnInsert: new Date()
        };
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    },

  },
  company: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        if ( user ) {
          return user && user.profile.company;
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  branch: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        if ( user ) {
          return user && user.profile.branch;
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  insurer: {
    type: String,
    optional: true,
    autoform: {
      'formgroup-class': 'hidden col-xs-6 col-sm-4'
    },
    autoValue: function () {
      if ( this.isInsert ) {
        var user = Meteor.users.findOne( {
          "_id": this.userId
        }, {
          fields: {
            "profile": 1
          }
        } );
        var insurerName = user.profile.insurer;
        if ( insurerName ) {
          return insurerName[ 0 ];
        }
      } else {
        this.unset(); // Prevent user from supplying their own value
      }
    }
  },
  enrollmentId: {
    type: String,
    label: "Principal Name",
    autoform: {
      type: "selectize",
      firstOption: 'Select Principal Name',
      options: function () {
        return Enrollments.find( {}, {
          sort: {
            fullName: 1
          }
        } ).map( function ( enrollmentId ) {
          return {
            label: enrollmentId.fullName,
            value: enrollmentId._id
          };
        } );
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
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
      type: "selectize",
      firstOption: 'Select Product Type',
      options: function () {
        return [ {
          label: 'Principal',
          value: "Principal"
        }, {
          label: 'Dependent-Children',
          value: 'Dependent-Children'
        }, {
          label: 'Dependent-Spouse',
          value: 'Dependent-Spouse'
        }, {
          label: 'Dependent-Sibling',
          value: 'Dependent-Sibling'
        }, {
          label: 'Dependent-Parent',
          value: 'Dependent-Parent'
        } ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  products: {
    type: String,
    label: "Product Type",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: 'Select Product Type',
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  children: {
    type: String,
    label: "Dependent-Children",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: "Select Dependent",
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    },
  },
  spouseName: {
    type: String,
    label: "Dependent-Spouse",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: 'Select Spouse',
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  parentName: {
    type: String,
    label: "Dependent-Parent",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: 'Select Parent',
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  siblingName: {
    type: String,
    label: "Dependent-Sibling",
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: 'Select Sibling',
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  status: {
    type: String,
    allowedValues: [ 'Pending', 'Approved', 'ApprovedRB', 'Denied', 'DeniedRB' ],
    defaultValue: 'Pending',
    autoform: {
      type: "selectize",
      firstOption: 'Select Status',
      options: function () {
        return [ {
          label: 'Pending',
          value: "Pending"
        }, {
          label: 'Approved',
          value: 'Approved'
        }, {
          label: 'ApprovedRB',
          value: 'ApprovedRB'
        }, {
          label: 'Denied',
          value: 'Denied'
        }, {
          label: 'DeniedRB',
          value: 'DeniedRB'
        }, ];
      },
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  amountPaid: {
    type: Number,
    label: 'Amount Paid',
    optional: true,
    decimal: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-6 col-sm-4'
      }
    }
  },
  partialPayment: {
    type: Number,
    optional: true,
    decimal: true,
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
      'Anima/Insect bite',
      'Liver illness',
      'others'
    ],
    optional: true,
    autoform: {
      type: "selectize",
      firstOption: 'Select Cause of Death',
      options: function () {
        return [ {
          label: 'Cardiovascular',
          value: 'Cardiovascular'
        }, {
          label: 'Respiratory',
          value: 'Respiratory'
        }, {
          label: 'Renal failure',
          value: 'Renal failure'
        }, {
          label: 'Cancer',
          value: 'Cancer'
        }, {
          label: 'Accident',
          value: 'Accident'
        }, {
          label: 'Diabetes',
          value: 'Diabetes'
        }, {
          label: 'Anima/Insect bite',
          value: 'Anima/Insect bite'
        }, {
          label: 'Liver illness',
          value: 'Liver illness'
        }, {
          label: 'others',
          value: 'others'
        }, ];
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
      type: "selectize",
      firstOption: 'Select Medical Claim',
      options: function () {
        return [ {
          label: 'Animal/Insect bite',
          value: "Animal/Insect bite"
        }, {
          label: 'Hypertension',
          value: 'Hypertension'
        }, {
          label: 'Diabetes',
          value: 'Diabetes'
        }, {
          label: 'CVA,Chronic Kidney disease',
          value: 'CVA,Chronic Kidney disease'
        }, {
          label: 'Abration',
          value: 'Abration'
        }, {
          label: 'Hypersensitivity',
          value: 'Hypersensitivity'
        }, {
          label: 'Community acquired pneumonia',
          value: 'Community acquired pneumonia'
        }, {
          label: 'others',
          value: 'others'
        }, ];
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
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  remarksCompany: {
    type: String,
    label: "Remarks - (For Company and Branch)",
    optional: true,
    autoform: {
      afFormGroup: {
        'formgroup-class': 'col-xs-12 col-sm-12'
      }
    }
  },
  file: orion.attribute( 'file', {
    label: "Upload File Attachments",
    optional: true,
    autoform: {
      'formgroup-class': 'col-xs-4 col-sm-4'
    }
  } ),
  createdBy: orion.attribute( 'createdBy' )
} ) );


// Enrollments.allow( {
//   insert: function () {
//     return true;
//   },
//   update: function () {
//     return true;
//   },
//   remove: function () {
//     return true;
//   }
// } );
//
// Claim.allow( {
//   insert: function () {
//     return true;
//   },
//   update: function () {
//     return true;
//   },
//   remove: function () {
//     return true;
//   }
// } );

// Helpers

// Enrollments.helpers( {
//   totalPremium: function () {
//     var premiumsEnrollee = this.totalPremium;
//     var totalPremium = premiumsEnrollee.reduce( add, 0 );
//     console.log( 'Total Premium:', totalPremium );
//   },
// } );

// Claim.helpers( {
//   daysProcessed: function () {
//     var days = null;
//     var filedDate = this.dateFiled;
//     var daysCount = countdown( days, filedDate, countdown.MONTHS |
//       countdown.DAYS, 2 ).toHTML( "label" );
//     //console.log(daysCount);
//     return daysCount;
//   },
//   enrollmentId: function () {
//     return Enrollments.find( {
//       fullName: this._id
//     } );
//   },
//   children: function () {
//     return Enrollments.find( {
//       childrenName: this._id
//     } );
//   }
// } );

Enrollments.before.insert( function ( userId, doc ) {
  var date = moment().toDate();
  doc.dateEnrolled = date;
} );

Claim.before.insert( function ( userId, doc ) {
  doc.createdAt = moment().toDate();
} );
