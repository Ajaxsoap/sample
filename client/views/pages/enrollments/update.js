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

var selectedProductName = new ReactiveVar( null );
var selectedProductName1 = new ReactiveVar( null );
var selectedProductName2 = new ReactiveVar( null );
var selectedProductName3 = new ReactiveVar( null );
var selectedProductName4 = new ReactiveVar( null );
var selectedProductName5 = new ReactiveVar( null );
var selectedProductName6 = new ReactiveVar( null );
var selectedProductName7 = new ReactiveVar( null );
var selectedProductName8 = new ReactiveVar( null );
var selectedProductName9 = new ReactiveVar( null );
var selectedDependentId = new ReactiveVar();
var selectedProductId = new ReactiveVar();
var selectedRange = new ReactiveVar( 0 );
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

Template.productsAvailedUpdate.events( {
  'change select[name=productName]': function ( event, template ) {
    selectedProductName.set( $( event.target ).val() );
  },
  'change select[name=productRange]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange]' ).val( rangeValue );
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

Template.productsAvailedUpdate1.events( {
  'change select[name=productName1]': function ( event, template ) {
    selectedProductName1.set( $( event.target ).val() );
  },
  'change select[name=productRange1]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange1]' ).val( rangeValue );
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

Template.productsAvailedUpdate2.events( {
  'change select[name=productName2]': function ( event, template ) {
    selectedProductName2.set( $( event.target ).val() );
  },
  'change select[name=productRange2]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange2]' ).val( rangeValue );
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

Template.productsAvailedUpdate3.events( {
  'change select[name=productName3]': function ( event, template ) {
    selectedProductName3.set( $( event.target ).val() );
  },
  'change select[name=productRange3]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange3]' ).val( rangeValue );
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

Template.productsAvailedUpdate4.events( {
  'change select[name=productName4]': function ( event, template ) {
    selectedProductName4.set( $( event.target ).val() );
  },
  'change select[name=productRange4]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange4]' ).val( rangeValue );
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

Template.productsAvailedUpdate5.events( {
  'change select[name=productName5]': function ( event, template ) {
    selectedProductName5.set( $( event.target ).val() );
  },
  'change select[name=productRange5]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange5]' ).val( rangeValue );
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

Template.productsAvailedUpdate6.events( {
  'change select[name=productName6]': function ( event, template ) {
    selectedProductName6.set( $( event.target ).val() );
  },
  'change select[name=productRange6]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange6]' ).val( rangeValue );
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

Template.productsAvailedUpdate7.events( {
  'change select[name=productName7]': function ( event, template ) {
    selectedProductName7.set( $( event.target ).val() );
  },
  'change select[name=productRange7]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange7]' ).val( rangeValue );
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

Template.productsAvailedUpdate8.events( {
  'change select[name=productName8]': function ( event, template ) {
    selectedProductName8.set( $( event.target ).val() );
  },
  'change select[name=productRange8]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange8]' ).val( rangeValue );
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

Template.productsAvailedUpdate9.events( {
  'change select[name=productName9]': function ( event, template ) {
    selectedProductName9.set( $( event.target ).val() );
  },
  'change select[name=productRange9]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    template.$( 'input[name=productRange9]' ).val( rangeValue );
  },
  'change input[name=effectivityDate9]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var range = ( $( 'select[name=productRange9]' ).val() );
    var duration = moment.duration( parseInt( range, 10 ), 'months' );
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
  parents = [
    $( 'input[name=parentName]' ).val(),
    $( 'input[name=parent2Name]' ).val()
  ];
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
  return _.map( listOfChildren, function ( child ) {
    return {
      label: child,
      value: child
    };
  } );
} );


Template.registerHelper( "siblingsOptionUpdate", function () {
  siblings = [
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
  return _.map( siblings, function ( sibs ) {
    return {
      label: sibs,
      value: sibs
    };
  } );
} );

Template.enrollmentsUpdate.helpers( {
  enrolleePremium: function () {
    totalPremium = [
      $( 'select[name=premium]' ).val(),
      $( 'select[name=premium1]' ).val(),
      $( 'select[name=premium2]' ).val(),
      $( 'select[name=premium3]' ).val(),
      $( 'select[name=premium4]' ).val(),
      $( 'select[name=premium5]' ).val(),
      $( 'select[name=premium6]' ).val(),
      $( 'select[name=premium7]' ).val(),
      $( 'select[name=premium8]' ).val(),
      $( 'input[name=premium9]' ).val()
    ];

    return _.map( totalPremium, function ( prems ) {
      console.log( totalPremium );
      return {
        label: prems,
        value: prems
      };
    } );
  }
} );

Tracker.autorun( function () {
  function add( x, y ) {
    return x + y;
  }
} );

Template.productsAvailedUpdate.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailedUpdate1.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName1 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailedUpdate2.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName2 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }

} );
Template.productsAvailedUpdate3.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName3 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailedUpdate4.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName4 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailedUpdate5.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName5 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailedUpdate6.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName6 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailedUpdate7.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName7 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailedUpdate8.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName8 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailedUpdate9.helpers( {
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function ( productName9 ) {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOption: function () {
    return Products.find().map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRangeOption: function () {
    return Products.find().map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
