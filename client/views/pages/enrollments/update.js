Template.enrollmentsUpdate.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate1.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate2.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate3.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate4.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate5.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate6.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate7.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate8.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailedUpdate9.onCreated( function () {
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

var selectedProductNameUpdate = new ReactiveVar( null );
var selectedProductNameUpdate1 = new ReactiveVar( null );
var selectedProductNameUpdate2 = new ReactiveVar( null );
var selectedProductNameUpdate3 = new ReactiveVar( null );
var selectedProductNameUpdate4 = new ReactiveVar( null );
var selectedProductNameUpdate5 = new ReactiveVar( null );
var selectedProductNameUpdate6 = new ReactiveVar( null );
var selectedProductNameUpdate7 = new ReactiveVar( null );
var selectedProductNameUpdate8 = new ReactiveVar( null );
var selectedProductNameUpdate9 = new ReactiveVar( null );
var selectedDependentId = new ReactiveVar();
var selectedProductId = new ReactiveVar();
var selectedPremiumUpdate = new ReactiveVar( 0 );
var selectedPremiumUpdate1 = new ReactiveVar( 0 );
var selectedPremiumUpdate2 = new ReactiveVar( 0 );
var selectedPremiumUpdate3 = new ReactiveVar( 0 );
var selectedPremiumUpdate4 = new ReactiveVar( 0 );
var selectedPremiumUpdate5 = new ReactiveVar( 0 );
var selectedPremiumUpdate6 = new ReactiveVar( 0 );
var selectedPremiumUpdate7 = new ReactiveVar( 0 );
var selectedPremiumUpdate8 = new ReactiveVar( 0 );
var selectedPremiumUpdate9 = new ReactiveVar( 0 );
var selectedRangeUpdate = new ReactiveVar( 0 );
var selectedRangeUpdate1 = new ReactiveVar( 0 );
var selectedRangeUpdate2 = new ReactiveVar( 0 );
var selectedRangeUpdate3 = new ReactiveVar( 0 );
var selectedRangeUpdate4 = new ReactiveVar( 0 );
var selectedRangeUpdate5 = new ReactiveVar( 0 );
var selectedRangeUpdate6 = new ReactiveVar( 0 );
var selectedRangeUpdate7 = new ReactiveVar( 0 );
var selectedRangeUpdate8 = new ReactiveVar( 0 );
var selectedRangeUpdate9 = new ReactiveVar( 0 );
var loancycle = new ReactiveVar( 1 );

Template.enrollmentsUpdate.events( {
  'click #updateBtn': function () {
    $( '#orionBootstrapCollectionsUpdateForm' ).submit();
  },
  'change input[name=birthDate]': function ( event, template ) {
    var birthdate = $( event.target ).val();
    var birth = moment( new Date( birthdate ) );
    template.$( 'input[name=ageOfEnrollee]' ).val( moment().diff( birth, 'years' ) || "" );
  },
  'change input[name=beneficiaryOneBirthdate]': function ( event, template ) {
    var birthdate = $( event.target ).val();
    var birth = moment( new Date( birthdate ) );
    template.$( 'input[name=beneficiaryOneAge]' ).val( moment().diff( birth, 'years' ) || "" );
  },
  'change input[name=beneficiaryTwoBirthdate]': function ( event, template ) {
    var birthdate = $( event.target ).val();
    var birth = moment( new Date( birthdate ) );
    template.$( 'input[name=beneficiaryTwoAge]' ).val( moment().diff( birth, 'years' ) || "" );
  },
  'change input[name=spouseBirthdate]': function ( event, template ) {
    var spouseDateOfBirth = $( event.target ).val();
    var birth = moment( new Date( spouseDateOfBirth ) );
    template.$( 'input[name=spouseAge]' ).val( moment().diff( birth, 'years' ) || "" );
  },
  'change input[name=childrenBirthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=childrenAge]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children2Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children2Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children3Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children3Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children4Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children4Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children5Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children5Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children6Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children6Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children7Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children7Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children8Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children8Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children9Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children9Age]' ).val( moment().diff( moment(
      new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=children10Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children10Age]' ).val( moment().diff(
      moment(
        new Date( childbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=siblingBirthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=siblingAge]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling2Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling2Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling3Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling3Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling4Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling4Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling5Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling5Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling6Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling6Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling7Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling7Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling8Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling8Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling9Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling9Age]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=sibling10Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name="sibling10Age"]' ).val( moment().diff( moment(
      new Date( siblingbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=parentBirthdate]': function ( event, template ) {
    var parentbirthdate = $( event.target ).val();
    template.$( 'input[name="parentAge"]' ).val( moment().diff( moment(
      new Date( parentbirthdate ) ), 'years' ) || "" );
  },
  'change input[name=parent2Birthdate]': function ( event, template ) {
    var parentbirthdate = $( event.target ).val();
    template.$( 'input[name="parent2Age"]' ).val( moment().diff( moment(
      new Date( parentbirthdate ) ), 'years' ) || "" );
  },
} );

Template.registerHelper('productNameOption', function(){ 
  return Products.find({},{sort:{"name":1}}).map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
});

Template.productsAvailedUpdate.helpers( {
  productOfferingOptionUpdate: function(template){
    return Enrollments.findOne( {_id: this._id
    }, {
      fields: {
        "productOffering": 1
      }
    })
  },
  premiumOptionUpdate: function () {
    return Enrollments.findOne({_id: this._id
    }, {
      fields: {
        "premium": 1
      }
    })
  },
  parentsOptionUpdate: function(){
    return Enrollments.findOne({_id: this._id
    }, {
      fields: {
        "parentName": 1,
        "parent2Name": 1
      }
    })
  }
} );

Template.productsAvailedUpdate.events( {
  'change select[name=productName]': function ( event, template ) {
    selectedProductNameUpdate.set( $( event.target ).val() );
  },
  'change select[name=premium]': function( event ) {
    selectedPremiumUpdate.set( $( event.target).val() );
  },
  'change select[name=productRange]': function ( event, template ) {
    var premiumVal = template.$('input[name="premium"]').val();
    var selectRange = selectedRangeUpdate.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate.get(), 10) * parseFloat(selectedProducNameUpdate.get(), 10);
      template.$('input[name=computedPremium]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( effectivity ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate]' ).val( value );
    }
  },
  'click .renew-btn': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle]' ).val( value );
  }
} );

Template.productsAvailedUpdate1.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {
    }).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({
    }).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate1.events( {
  'change select[name=productName1]': function ( event, template ) {
    selectedProductNameUpdate1.set( $( event.target ).val() );
  },
  'change select[name=premium1]': function( event ) {
    selectedPremiumUpdate1.set( $( event.target).val() );
  },
  'change select[name=productRange1]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium1"]').val();
    var selectRange = selectedRangeUpdate1.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate1.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate1.get(), 10) * parseFloat(selectedPremiumUpdate1.get(), 10);
      template.$('input[name=computedPremium1]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium1]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate1]': function ( event, template ) {
    var effectivity1 = $( event.target ).val();
    var range = ( $( 'select[name=productRange1]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity1 ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity1 ) {
      $( 'input[name=maturityDate1]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate1]' ).val( value );
    }
  },
  'click .renew-btn1': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle1' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle1]' ).val( value );
  }
} );

Template.productsAvailedUpdate2.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {
    }).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );

  },
  premiumOptionUpdate: function () {
    return Products.find({
    }).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }

} );

Template.productsAvailedUpdate2.events( {
  'change select[name=productName2]': function ( event, template ) {
    selectedProductNameUpdate2.set( $( event.target ).val() );
  },
  'change select[name=premium2]': function( event ) {
    selectedPremiumUpdate2.set( $( event.target).val() );
  },
  'change select[name=productRange2]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium2"]').val();
    var selectRange = selectedRangeUpdate2.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate2.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate2.get(), 10) * parseFloat(selectedPremiumUpdate2.get(), 10);
      template.$('input[name=computedPremium2]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium2]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate2]': function ( event, template ) {
    var effectivity2 = $( event.target ).val();
    var range = ( $( 'select[name=productRange2]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity2 ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity2 ) {
      $( 'input[name=maturityDate2]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate2]' ).val( value );
    }
  },
  'click .renew-btn2': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle2' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle2]' ).val( value );
  }
} );

Template.productsAvailedUpdate3.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate3.events( {
  'change select[name=productName3]': function ( event, template ) {
    selectedProductNameUpdate3.set( $( event.target ).val() );
  },
  'change select[name=premium3]': function( event ) {
    selectedPremiumUpdate3.set( $( event.target).val() );
  },
   'change select[name=productOffering3]': function( event, template ){
    var childrenVal = template.$('input[name="children"]').val();
    if ( childrenVal === '' || childrenVal === null ) {
      alert("No Children enrolled");
    }
  },
  'change select[name=productRange3]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium3"]').val();
    var selectRange = selectedRangeUpdate3.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate3.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate3.get(), 10) * parseFloat(selectedPremiumUpdate3.get(), 10);
      template.$('input[name=computedPremium3]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium3]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate3]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange3]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate3]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate3]' ).val( value );
    }
  },
  'click .renew-btn3': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle3' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle3]' ).val( value );
  }
} );

Template.productsAvailedUpdate4.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate4.events( {
  'change select[name=productName4]': function ( event, template ) {
    selectedProductNameUpdate4.set( $( event.target ).val() );
  },
  'change select[name=premium4]': function( event ) {
    selectedPremiumUpdate4.set( $( event.target).val() );
  },
  'change select[name=productRange4]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium4"]').val();
    var selectRange = selectedRangeUpdate4.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate4.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate4.get(), 10) * parseFloat(selectedPremiumUpdate4.get(), 10);
      template.$('input[name=computedPremium4]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium4]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate4]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange4]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate4]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate4]' ).val( value );
    }
  },
  'click .renew-btn4': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle4' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle4]' ).val( value );
  }
} );

Template.productsAvailedUpdate5.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate5.events( {
  'change select[name=productName5]': function ( event, template ) {
    selectedProductNameUpdate5.set( $( event.target ).val() );
  },
  'change select[name=premium5]': function( event ) {
    selectedPremiumUpdate5.set( $( event.target).val() );
  },
  'change select[name=productRange5]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium5"]').val();
    var selectRange = selectedRangeUpdate5.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate5.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate5.get(), 10) * parseFloat(selectedPremiumUpdate5.get(), 10);
      template.$('input[name=computedPremium5]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium5]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate5]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange5]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate5]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate5]' ).val( value );
    }
  },
  'click .renew-btn5': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle5' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle5]' ).val( value );
  }
} );

Template.productsAvailedUpdate6.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate6.events( {
  'change select[name=productName6]': function ( event, template ) {
    selectedProductNameUpdate6.set( $( event.target ).val() );
  },
  'change select[name=premium6]': function( event ) {
    selectedPremiumUpdate6.set( $( event.target).val() );
  },
  'change select[name=productRange6]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium6"]').val();
    var selectRange = selectedRangeUpdate6.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate6.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate6.get(), 10) * parseFloat(selectedPremiumUpdate6.get(), 10);
      template.$('input[name=computedPremium6]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium6]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate6]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange6]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate6]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate6]' ).val( value );
    }
  },
  'click .renew-btn6': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle6' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle6]' ).val( value );
  }
} );

Template.productsAvailedUpdate7.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate7.events( {
  'change select[name=productName7]': function ( event, template ) {
    selectedProductNameUpdate7.set( $( event.target ).val() );
  },
  'change select[name=premium7]': function( event ) {
    selectedPremiumUpdate7.set( $( event.target).val() );
  },
  'change select[name=productRange7]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium7"]').val();
    var selectRange = selectedRangeUpdate7.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate7.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate7.get(), 10) * parseFloat(selectedPremiumUpdate7.get(), 10);
      template.$('input[name=computedPremium7]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium7]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate7]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange7]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate7]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate7]' ).val( value );
    }
  },
  'click .renew-btn7': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle7' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle7]' ).val( value );
  }
} );

Template.productsAvailedUpdate8.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate8.events( {
  'change select[name=productName8]': function ( event, template ) {
    selectedProductNameUpdate8.set( $( event.target ).val() );
  },
  'change select[name=premium8]': function( event ) {
    selectedPremiumUpdate8.set( $( event.target).val() );
  },
  'change select[name=productRange8]': function ( event, template ) {
    var premiumVal = template.$('select[name="premium8"]').val();
    var selectRange = selectedRangeUpdate8.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate8.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate8.get(), 10) * parseFloat(selectedPremiumUpdate8.get(), 10);
      template.$('input[name=computedPremium8]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium8]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate8]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange8]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate8]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate8]' ).val( value );
    }
  },
  'click .renew-btn8': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle8' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle8]' ).val( value );
  }
} );

Template.productsAvailedUpdate9.helpers( {
  productOfferingOptionUpdate: function(){
    return Products.find( {}).map( function ( name ) {
      return {
        label: name.productOffering,
        value: name.productOffering
      };
    } );
  },
  premiumOptionUpdate: function () {
    return Products.find({}).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  }
} );

Template.productsAvailedUpdate9.events( {
  'change select[name=productName9]': function ( event, template ) {
    selectedProductNameUpdate9.set( $( event.target ).val() );
  },
  'change select[name=premium9]': function( event ) {
    selectedPremiumUpdate9.set( $( event.target).val() );
  },
  'change select[name=productRange9]': function ( event, template ) {
    var premiumVal = $( 'select[name="premium9"]' ).val();
    var selectRange = selectedRangeUpdate9.set( $(event.target).val());
    var setPremium = parseInt(selectedRangeUpdate9.get(), 10) * parseFloat(premiumVal, 10);
    if ( premiumVal === "" || premiumVal === null ) {
      var nullPremium = parseInt(selectedRangeUpdate9.get(), 10) * parseFloat(selectedPremiumUpdate9.get(), 10);
      template.$('input[name=computedPremium9]').val(nullPremium.toFixed(2),10);
    } else {
      template.$('input[name=computedPremium9]').val(setPremium.toFixed(2),10);
    }
  },
  'change input[name=effectivityDate9]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange9]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format( 'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate9]' ).datepicker( 'update', new Date( value ) );
      template.$( 'input[name=maturityDate9]' ).val( value );
    }
  },
  'click .renew-btn9': function ( event, template ) {
    event.preventDefault();
    var cycle = template.$( '#loanCycle9' ).val();
    var value = parseInt( cycle, 10 );
    console.log( "Loan Cycle:", value++ );
    template.$( 'input[name=loanCycle9]' ).val( value );
  }
} );


Template.registerHelper( "principalOptionUpdate", function () {
  principalName = [ $( 'input[name=fullName]' ).val() ];
  return _.map( principalName, function ( fullname ) {
    return {
      label: fullname,
      value: fullname
    };
  } );
} );

Template.registerHelper( "spouseOptionUpdate", function () {
  spouse = [ $( 'input[name=spouseName]' ).val() ];
  return _.map( spouse, function ( spousename ) {
    return {
      label: spousename,
      value: spousename
    };
  } );
} );

Template.registerHelper( "parentsOptionUpdate", function () {
  var parents = [
    $( 'input[name=parentName]' ).val(),
    $( 'input[name=parent2Name]' ).val()
  ];
  console.log("list of parents", parents);
  return _.map( parents, function ( parentsname ) {
    return {
      label: parentsname,
      value: parentsname
    };
  } );
} );

Template.registerHelper( "childrenOptionUpdate", function () {
  listOfChildren = [
    $( 'input[name=childrenName]' ).val(),
    $( 'input[name=children2Name]' ).val(),
    $( 'input[name=children3Name]' ).val(),
    $( 'input[name=children4Name]' ).val(),
    $( 'input[name=children5Name]' ).val(),
    $( 'input[name=children6Name]' ).val(),
    $( 'input[name=children7Name]' ).val(),
    $( 'input[name=children8Name]' ).val(),
    $( 'input[name=children9Name]' ).val(),
    $( 'input[name=children10Name]' ).val()
  ];
  console.log(listOfChildren);
  return _.map( listOfChildren, function ( child ) {
    return {
      label: child,
      value: child
    };
  } );
} );


Template.registerHelper( "siblingsOptionUpdate", function () {
  var siblings = [
    $( 'input[name=siblingName]' ).val(),
    $( 'input[name=sibling2Name]' ).val(),
    $( 'input[name=sibling3Name]' ).val(),
    $( 'input[name=sibling4Name]' ).val(),
    $( 'input[name=sibling5Name]' ).val(),
    $( 'input[name=sibling6Name]' ).val(),
    $( 'input[name=sibling7Name]' ).val(),
    $( 'input[name=sibling8Name]' ).val(),
    $( 'input[name=sibling9Name]' ).val(),
    $( 'input[name=sibling10Name]' ).val()
  ];
  console.log("List of siblings", siblings);
  return _.map( siblings, function ( sibs ) {
    return {
      label: sibs,
      value: sibs
    };
  } );
} );

Tracker.autorun( function () {
  function add( x, y ) {
    return x + y;
  }
} );

// Template.registerHelper('productsAvailed', function(){
//   return Products.find({},{sort:{"productOffering": 1}}).map( function ( offer ) {
//       return {
//         label: offer.productOffering,
//         value: offer.productOffering
//       };
//     } );
// });

// Template.registerHelper('premiumOption', function(){
//   return Products.find({},{sort:{"premium":1}}).map( function ( prem ) {
//       return {
//         label: prem.premium,
//         value: prem.premium
//       };
//     } );
// });

// Template.registerHelper('productRangeOption', function(){
//   return Products.find({},{sort:{"productRange":1}}).map( function ( range ) {
//       return {
//         label: range.productRange,
//         value: range.productRange
//       };
//     } );
// });




