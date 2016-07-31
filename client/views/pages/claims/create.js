Template.claimsCreate.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

var selectedEnrollmentId = new ReactiveVar( null );
var selectedDependent = new ReactiveVar( null );
var selectedProduct = new ReactiveVar( null );

Template.claimsCreate.events( {
  'click .create-btn': function () {
    $( '#orionBootstrapCollectionsCreateForm' ).submit();
  },
  'change select[name=enrollmentId]': function ( event, template ) {
    selectedEnrollmentId.set( $( event.target ).val() );
    // console.log( 'Principal ID:', selectedEnrollmentId.get() );
  },
  'change select[name=clientType]': function ( event, template ) {
    selectedDependent.set( $( event.target ).val() );
    // console.log( 'Product ID:', selectedDependent.get() );
    // template.$('input[name=premium]').val(selectedProduct.get());
  }
} );

function children1( childrenName ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.childrenName;
  }
}

function children2( children2Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children2Name;
  }
}

function children3( children3Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children3Name;
  }
}

function children4( children4Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children4Name;
  }
}

function children5( children5Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children5Name;
  }
}

function children6( children6Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children6Name;
  }
}

function children7( children7Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children7Name;
  }
}

function children8( children8Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children8Name;
  }
}

function children9( children9Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children9Name;
  }
}

function children10( children10Name ) {
  var child1 = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( child1 ) {
    return child1 && child1.children10Name;
  }
}

function Parent1( parentName ) {
  var parent = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( parent ) {
    return parent && parent.parentName;
  }
}

function Parent2( parent2Name ) {
  var parent = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( parent ) {
    return parent && parent.parent2Name;
  }
}

function sibling1( siblingName ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.siblingName;
  }
}

function sibling2( sibling2Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling2Name;
  }
}

function sibling3( sibling3Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling3Name;
  }
}

function sibling4( sibling4Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling4Name;
  }
}

function sibling5( sibling5Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling5Name;
  }
}

function sibling6( sibling6Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling6Name;
  }
}

function sibling7( sibling7Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling7Name;
  }
}

function sibling8( sibling8Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling8Name;
  }
}

function sibling9( sibling9Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling9Name;
  }
}

function sibling10( sibling10Name ) {
  var sibling = Enrollments.findOne( {
    _id: selectedEnrollmentId.get()
  } );
  if ( sibling ) {
    return sibling && sibling.sibling10Name;
  }
}

function Premium( premium ) {
  var premiumProd = Products.findOne( {
    _id: selectedProduct.get()
  } );
  if ( premiumProd ) {
    return premiumProd && premiumProd.premium;
  }
}

Template.claimsCreate.helpers( {
  productOptions: function () {
    return Products.find().map( function ( c ) {
      return {
        label: c.name,
        value: c._id
      };
    } );
  },
  childrensClaimOptions: function ( childrenName ) {
    var listOfChildren = [
      children1(),
      children2(),
      children3(),
      children4(),
      children5(),
      children6(),
      children7(),
      children8(),
      children9(),
      children10(),
    ];

    return _.map( listOfChildren, function ( child ) {
      return {
        label: child,
        value: child
      };
    } );
  },
  spouseClaimOptions: function () {
    return Enrollments.find( {
      _id: selectedEnrollmentId.get()
    } ).map( function ( c ) {
      return {
        label: c.spouseName,
        value: c.spouseName
      };
    } );
  },
  parentClaimOptions: function () {
    var parentList = [ Parent1(), Parent2() ];

    return _.map( parentList, function ( myParents ) {
      return {
        label: myParents,
        value: myParents
      };
    } );
  },
  siblingClaimOptions: function () {
    var siblingsList = [
      sibling1(),
      sibling2(),
      sibling3(),
      sibling4(),
      sibling5(),
      sibling6(),
      sibling7(),
      sibling8(),
      sibling9(),
      sibling10()
    ];

    return _.map( siblingsList, function ( mySiblings ) {
      return {
        label: mySiblings,
        value: mySiblings
      };
    } );
  }
} );
