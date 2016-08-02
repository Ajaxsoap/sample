Template.enrollmentsCreate.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

Template.productsAvailed.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle', 1 );
} );

Template.productsAvailed1.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle1', 1 );
} );

Template.productsAvailed2.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle2', 1 );
} );

Template.productsAvailed3.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle3', 1 );
} );

Template.productsAvailed4.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle4', 1 );
} );

Template.productsAvailed5.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle5', 1 );
} );

Template.productsAvailed6.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle6', 1 );
} );

Template.productsAvailed7.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle7', 1 );
} );

Template.productsAvailed8.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle8', 1 );
} );

Template.productsAvailed9.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.loancycle = new ReactiveDict();
  this.loancycle.set( 'cycle9', 1 );
} );


var selectedPrincipal = new ReactiveVar( null );
var selectedSpouse = new ReactiveVar( null );
// var effectiveDate = new ReactiveVar( null );
var range = new ReactiveVar( 0 );
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
var selectedChildren = new ReactiveVar( null );
var selectedChildren1 = new ReactiveVar( null );
var selectedChildren2 = new ReactiveVar( null );
var selectedChildren3 = new ReactiveVar( null );
var selectedChildren4 = new ReactiveVar( null );
var selectedChildren5 = new ReactiveVar( null );
var selectedChildren6 = new ReactiveVar( null );
var selectedChildren7 = new ReactiveVar( null );
var selectedChildren8 = new ReactiveVar( null );
var selectedChildren9 = new ReactiveVar( null );
var selectedParent = new ReactiveVar( null );
var selectedParent1 = new ReactiveVar( null );
var selectedSibling = new ReactiveVar( null );
var selectedSibling1 = new ReactiveVar( null );
var selectedSibling2 = new ReactiveVar( null );
var selectedSibling3 = new ReactiveVar( null );
var selectedSibling4 = new ReactiveVar( null );
var selectedSibling5 = new ReactiveVar( null );
var selectedSibling6 = new ReactiveVar( null );
var selectedSibling7 = new ReactiveVar( null );
var selectedSibling8 = new ReactiveVar( null );
var selectedSibling9 = new ReactiveVar( null );
var selectedDependentId = new ReactiveVar( null );
var selectedProductId = new ReactiveVar( "Principal" );
var selectedRange = new ReactiveVar( 0 );
var selectedRange1 = new ReactiveVar( 0 );
var selectedRange2 = new ReactiveVar( 0 );
var selectedRange3 = new ReactiveVar( 0 );
var selectedRange4 = new ReactiveVar( 0 );
var selectedRange5 = new ReactiveVar( 0 );
var selectedRange6 = new ReactiveVar( 0 );
var selectedRange7 = new ReactiveVar( 0 );
var selectedRange8 = new ReactiveVar( 0 );
var selectedRange9 = new ReactiveVar( 0 );

Template.enrollmentsCreate.events( {
  'click .create-btn': function () {
    $( '#orionBootstrapCollectionsCreateForm' ).submit();
  },
  'change input[name=fullName]': function ( event, template ) {
    var name = $( event.target ).val();
    selectedPrincipal.set( name );
    // console.log( selectedPrincipal.get() );
  },
  'change input[name=spouseName]': function ( event, template ) {
    var spouse = $( event.target ).val();
    selectedSpouse.set( spouse );
    console.log( "Spouse Name:", selectedSpouse.get() );
  },
  'change input[name=birthDate]': function ( event, template ) {
    var birthday = $( event.target ).val();
    var age = moment( birthday, 'MM-DD-YYYY' );
    if ( birthday ) {
      template.$( 'input[name=ageOfEnrollee]' ).val( moment().diff( age, 'years' ) || " " );
    }
  },
  'change input[name=spouseBirthdate]': function ( event, template ) {
    var spouseDateOfBirth = $( event.target ).val();
    template.$( 'input[name=spouseAge]' ).val( moment().diff( moment(
      spouseDateOfBirth, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=beneficiaryOneBirthdate]': function ( event, template ) {
    var beneficiaryOneDateOfBirth = $( event.target ).val();
    template.$( 'input[name=beneficiaryOneAge]' ).val( moment().diff( moment(
      beneficiaryOneDateOfBirth, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=beneficiaryTwoBirthdate]': function ( event, template ) {
    var beneficiaryTwoDateOfBirth = $( event.target ).val();
    template.$( 'input[name=beneficiaryTwoAge]' ).val( moment().diff( moment(
      beneficiaryTwoDateOfBirth, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=childrenBirthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name="childrenAge"]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children2Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children2Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children3Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children3Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children4Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children4Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children5Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children5Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name="children6Birthdate"]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children6Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children7Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children7Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children8Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name="children8Age"]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children9Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children9Age]' ).val( moment().diff( moment(
      childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=children10Birthdate]': function ( event, template ) {
    var childbirthdate = $( event.target ).val();
    template.$( 'input[name=children10Age]' ).val( moment().diff(
      moment(
        childbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=siblingBirthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=siblingAge]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling2Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling2Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || "" );
  },
  'change input[name=sibling3Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling3Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling4Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling4Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling5Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling5Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling6Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling6Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling7Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling7Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || "" );
  },
  'change input[name=sibling8Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling8Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling9Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling9Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=sibling10Birthdate]': function ( event, template ) {
    var siblingbirthdate = $( event.target ).val();
    template.$( 'input[name=sibling10Age]' ).val( moment().diff( moment(
      siblingbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=parentBirthdate]': function ( event, template ) {
    var parentbirthdate = $( event.target ).val();
    template.$( 'input[name=parentAge]' ).val( moment().diff( moment(
      parentbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=parent2Birthdate]': function ( event, template ) {
    var parentbirthdate = $( event.target ).val();
    template.$( 'input[name=parent2Age]' ).val( moment().diff( moment(
      parentbirthdate, 'MM-DD-YYYY' ), 'years' ) || " " );
  },
  'change input[name=parentName]': function ( event, template ) {
    var parent = $( event.target ).val();
    selectedParent.set( parent );
    console.log( "Parent 1:", selectedParent.get() );
  },
  'change input[name=parent2Name]': function ( event, template ) {
    var parent1 = $( event.target ).val();
    selectedParent1.set( parent1 );
    console.log( "Parent 2:", selectedParent1.get() );
  },
  'change input[name=childrenName]': function ( event, template ) {
    var child = $( event.target ).val();
    selectedChildren.set( child );
    console.log( "Child 1:", selectedChildren.get() );
  },
  'change input[name=children2Name]': function ( event, template ) {
    var child1 = $( event.target ).val();
    selectedChildren1.set( child1 );
    console.log( "Child 2:", selectedChildren1.get() );
  },
  'change input[name=children3Name]': function ( event, template ) {
    var child2 = $( event.target ).val();
    selectedChildren2.set( child2 );
    console.log( "Child 3:", selectedChildren.get() );
  },
  'change input[name=children4Name]': function ( event, template ) {
    var child3 = $( event.target ).val();
    selectedChildren3.set( child3 );
    console.log( "Child 4:", selectedChildren3.get() );
  },
  'change input[name=children5Name]': function ( event, template ) {
    var child4 = $( event.target ).val();
    selectedChildren4.set( child4 );
    console.log( "Child 5:", selectedChildren4.get() );
  },
  'change input[name=children6Name]': function ( event, template ) {
    var child5 = $( event.target ).val();
    selectedChildren5.set( child5 );
    console.log( "Child 6:", selectedChildren5.get() );
  },
  'change input[name=children7Name]': function ( event, template ) {
    var child6 = $( event.target ).val();
    selectedChildren6.set( child6 );
    console.log( "Child 7:", selectedChildren6.get() );
  },
  'change input[name=children8Name]': function ( event, template ) {
    var child7 = $( event.target ).val();
    selectedChildren7.set( child7 );
    console.log( "Child 8:", selectedChildren7.get() );
  },
  'change input[name=children9Name]': function ( event, template ) {
    var child8 = $( event.target ).val();
    selectedChildren8.set( child8 );
    console.log( "Child 9:", selectedChildren8.get() );
  },
  'change input[name=children10Name]': function ( event, template ) {
    var child9 = $( event.target ).val();
    selectedChildren9.set( child9 );
    console.log( "Child 10:", selectedChildren9.get() );
  },
  'change input[name=siblingName]': function ( event, template ) {
    var sibling = $( event.target ).val();
    selectedSibling.set( sibling );
    console.log( "Sibling 1:", selectedSibling.get() );
  },
  'change input[name=sibling2Name]': function ( event, template ) {
    var sibling1 = $( event.target ).val();
    selectedSibling1.set( sibling1 );
    console.log( "Sibling 2:", selectedSibling1.get() );
  },
  'change input[name=sibling3Name]': function ( event, template ) {
    var sibling2 = $( event.target ).val();
    selectedSibling2.set( sibling2 );
    console.log( "Sibling 3:", selectedSibling2.get() );
  },
  'change input[name=sibling4Name]': function ( event, template ) {
    var sibling3 = $( event.target ).val();
    selectedSibling3.set( sibling3 );
    console.log( "Sibling 4:", selectedSibling3.get() );
  },
  'change input[name=sibling5Name]': function ( event, template ) {
    var sibling4 = $( event.target ).val();
    selectedSibling4.set( sibling4 );
    console.log( "Sibling 5:", selectedSibling4.get() );
  },
  'change input[name=sibling6Name]': function ( event, template ) {
    var sibling5 = $( event.target ).val();
    selectedSibling5.set( sibling5 );
    console.log( "Sibling 6:", selectedSibling5.get() );
  },
  'change input[name=sibling7Name]': function ( event, template ) {
    var sibling6 = $( event.target ).val();
    selectedSibling6.set( sibling6 );
    console.log( "Sibling 7:", selectedSibling6.get() );
  },
  'change input[name=sibling8Name]': function ( event, template ) {
    var sibling7 = $( event.target ).val();
    selectedSibling7.set( sibling7 );
    console.log( "Sibling 8:", selectedSibling7.get() );
  },
  'change input[name=sibling9Name]': function ( event, template ) {
    var sibling8 = $( event.target ).val();
    selectedSibling8.set( sibling8 );
    console.log( "Sibling 9:", selectedSibling8.get() );
  },
  'change input[name=sibling10Name]': function ( event, template ) {
    var sibling9 = $( event.target ).val();
    selectedSibling9.set( sibling9 );
    console.log( "Sibling 10:", selectedSibling9.get() );
  },
} );

Template.productsAvailed.events( {
  'change select[name=productName]': function ( event, template ) {
    selectedProductName.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName.get() );
  },
  'change select[name=productOffering]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    // template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange.set( rangeValue );
    template.$( 'input[name=productRange]' ).val( rangeValue );
  },
  'change input[name=effectivityDate]': function ( event, template ) {
    var effective = $( event.target ).val();
    var range = moment.duration( parseInt( selectedRange.get(), 10 ), 'months' );
    var value = moment( new Date( effective ) ).add( range ).format( 'MM-DD-YYYY' );
    if ( effective ) {
      $( 'input[name=maturityDate]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate]' ).val( value );
    }
  }
} );

Template.productsAvailed1.events( {
  'change select[name=productName1]': function ( event, template ) {
    selectedProductName1.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName1.get() );
  },
  'change select[name=productOffering1]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange1]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange1.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange1.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate1]': function ( event, template ) {
    var effective = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange1.get(), 10 ), 'months' );
    var value = moment( new Date( effective ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effective ) {
      $( 'input[name=maturityDate1]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate1]' ).val( value );
    }
  }
} );

Template.productsAvailed2.events( {
  'change select[name=productName2]': function ( event, template ) {
    selectedProductName2.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName2.get() );
  },
  'change select[name=productOffering2]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange2]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange2.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange2.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate2]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange2.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate2]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate2]' ).val( value );
    }
  }
} );

Template.productsAvailed3.events( {
  'change select[name=productName3]': function ( event, template ) {
    selectedProductName3.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName3.get() );
  },
  'change select[name=productOffering3]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange3]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange3.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange3.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate3]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange3.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate3]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate3]' ).val( value );
    }
  }
} );

Template.productsAvailed4.events( {
  'change select[name=productName4]': function ( event, template ) {
    selectedProductName4.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName4.get() );
  },
  'change select[name=productOffering4]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange4]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange4.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange4.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate4]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange4.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate4]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate4]' ).val( value );
    }
  }
} );

Template.productsAvailed5.events( {
  'change select[name=productName5]': function ( event, template ) {
    selectedProductName5.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName5.get() );
  },
  'change select[name=productOffering5]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange5]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange5.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange5.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate5]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange5.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate5]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate5]' ).val( value );
    }
  }
} );

Template.productsAvailed6.events( {
  'change select[name=productName6]': function ( event, template ) {
    selectedProductName6.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName6.get() );
  },
  'change select[name=productOffering6]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange6]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange6.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange6.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate6]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange6.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate6]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate6]' ).val( value );
    }
  }
} );

Template.productsAvailed7.events( {
  'change select[name=productName7]': function ( event, template ) {
    selectedProductName7.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName7.get() );
  },
  'change select[name=productOffering7]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange7]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange7.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange7.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate7]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange7.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate7]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate7]' ).val( value );
    }
  }
} );

Template.productsAvailed8.events( {
  'change select[name=productName8]': function ( event, template ) {
    selectedProductName8.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName8.get() );
  },
  'change select[name=productOffering8]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange8]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange8.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange8.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate8]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange8.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate8]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate8]' ).val( value );
    }
  },

} );

Template.productsAvailed9.events( {
  'change select[name=productName9]': function ( event, template ) {
    selectedProductName9.set( $( event.target ).val() );
    // console.log( 'Product Name ID:', selectedProductName9.get() );
  },
  'change select[name=productOffering9]': function ( event, template ) {
    selectedDependentId.set( $( event.target ).val() );
    // console.log( 'Product Offering:', selectedDependentId.get() );
    template.$( 'input[name=productRange]' ).val( selectedProductId.get() );
  },
  'change select[name=productRange9]': function ( event, template ) {
    var currentTarget = event.currentTarget;
    var rangeValue = currentTarget.options[ currentTarget.selectedIndex ].value;
    selectedRange9.set( rangeValue );
    // console.log( 'Product Range:', parseInt( selectedRange9.get() ) );
    // template.$( 'input[name=productRange]' ).val( selectedProduct.get() );
  },
  'change input[name=effectivityDate9]': function ( event, template ) {
    var effectivity = $( event.target ).val();
    var duration = moment.duration( parseInt( selectedRange9.get(), 10 ), 'months' );
    var value = moment( new Date( effectivity ) ).add( duration ).format(
      'MM-DD-YYYY' );
    if ( effectivity ) {
      $( 'input[name=maturityDate9]' ).datepicker( 'setDate', new Date( value ) );
      template.$( 'input[name=maturityDate9]' ).val( value );
    }
  }
} );

Template.registerHelper( "principalOption", function ( principal ) {
  principal = [ selectedPrincipal.get() ];
  if ( principal === null ) {
    console.log( "No Principal Enrolled" );
    return null;
  } else
    return _.map( principal, function ( fullname ) {
      return {
        label: fullname,
        value: fullname
      };
    } );
} );

Template.registerHelper( "spouseOption", function ( spouse ) {
  spouse = [ selectedSpouse.get() ];
  if ( spouse === null ) {
    console.log( "No Spouse Enrolled" );
    return "No Spouse Enrolled";
  } else
    return _.map( spouse, function ( spousename ) {
      return {
        label: spousename,
        value: spousename
      };
    } );
} );

Template.registerHelper( "childrenOption", function ( children ) {
  listOfChildren = [
    selectedChildren.get(),
    selectedChildren1.get(),
    selectedChildren2.get(),
    selectedChildren3.get(),
    selectedChildren4.get(),
    selectedChildren5.get(),
    selectedChildren6.get(),
    selectedChildren7.get(),
    selectedChildren8.get(),
    selectedChildren9.get()
  ];
  return _.map( listOfChildren, function ( c ) {
    return {
      label: c,
      value: c
    };
  } );
} );

Template.registerHelper( "parentsOption", function ( parents ) {
  parents = [
    selectedParent.get(),
    selectedParent1.get()
  ];
  if ( parents === undefined ) {
    console.log( "No Parent enrolled" );
    return "No Parent enrolled";
  } else
    return _.map( parents, function ( parentsname ) {
      return {
        label: parentsname,
        value: parentsname
      };
    } );
} );

Template.registerHelper( "siblingsOption", function ( siblings ) {
  siblings = [
    selectedSibling.get(),
    selectedSibling1.get(),
    selectedSibling2.get(),
    selectedSibling3.get(),
    selectedSibling4.get(),
    selectedSibling5.get(),
    selectedSibling6.get(),
    selectedSibling7.get(),
    selectedSibling8.get(),
    selectedSibling9.get()
  ];
  if ( siblings === null ) {
    console.log( "No Sibling enrolled" );
    return "No Sibling enrolled";
  } else
    return _.map( siblings, function ( sibs ) {
      return {
        label: sibs,
        value: sibs
      };
    } );
} );

Template.productsAvailed.helpers( {
  cycle: function () {
    return Template.instance().loancycle.get( 'cycle' );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName.get()
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailed1.helpers( {
  cycle1: function () {
    return Template.instance().loancycle.get( 'cycle1' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName1.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName1.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailed2.helpers( {
  cycle2: function () {
    return Template.instance().loancycle.get( 'cycle2' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName2.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName2.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailed3.helpers( {
  cycle3: function () {
    return Template.instance().loancycle.get( 'cycle3' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName3.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName3.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailed4.helpers( {
  cycle4: function () {
    return Template.instance().loancycle.get( 'cycle4' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName4.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName4.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailed5.helpers( {
  cycle5: function () {
    return Template.instance().loancycle.get( 'cycle5' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName5.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName5.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );
Template.productsAvailed6.helpers( {
  cycle6: function () {
    return Template.instance().loancycle.get( 'cycle6' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName6.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName6.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailed7.helpers( {
  cycle7: function () {
    return Template.instance().loancycle.get( 'cycle7' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName7.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName7.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailed8.helpers( {
  cycle8: function () {
    return Template.instance().loancycle.get( 'cycle8' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName8.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName8.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

Template.productsAvailed9.helpers( {
  cycle9: function () {
    return Template.instance().loancycle.get( 'cycle9' );
  },
  productOption: function () {
    return Products.find().map( function ( offer ) {
      return {
        label: offer.productOffering,
        value: offer.productOffering
      };
    } );
  },
  productNameOption: function () {
    return Products.find().map( function ( product ) {
      return {
        label: product.name,
        value: product._id
      };
    } );
  },
  premiumOptions: function () {
    return Products.find( {
      _id: selectedProductName9.get()
    }, {
      fields: {
        "premium": 1
      }
    } ).map( function ( prem ) {
      return {
        label: prem.premium,
        value: prem.premium
      };
    } );
  },
  productRange: function () {
    return Products.find( {
      _id: selectedProductName9.get()
    } ).map( function ( range ) {
      return {
        label: range.productRange,
        value: range.productRange
      };
    } );
  }
} );

AutoForm.addHooks( 'orionBootstrapCollectionsCreateForm', {
  onSuccess: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
      toastr.success(
        'Successfully Created' );
    }, 1300 );
    RouterLayer.go( this.collection.indexPath() );
  },
  onError: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: false,
        showMethod: 'slideDown',
        timeOut: 10000
      };
      toastr.error(
        'Please review the form if you have left something empty',
        'Ooops! Something is missing.' );
    }, 1300 );
  }
} );
