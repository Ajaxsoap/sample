Template.claimsUpdate.onCreated( function () {
  Package[ "observe-sequence" ].ObserveSequence._suppressWarnings = Infinity;
  this.subscribe( 'claims' );
  this.subscribe( 'enrollments' );
  this.subscribe( 'products' );
} );

var selectedEnrollmentId = new ReactiveVar();

Template.claimsUpdate.events( {
  'click .update-btn': function () {
    $( '#claimsUpdateForm' ).submit();
  },
  'change select[name=enrollmentId]': function ( event, template ) {
    selectedEnrollmentId.set( $( event.target ).val() );
    console.log( 'Principal ID:', selectedEnrollmentId.get() );
  }
} );

Template.claimsUpdate.helpers( {
  premiumOptions: function () {
    return Products.find( {}, {
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
  productOptions: function () {
    return Products.find().map( function ( c ) {
      return {
        label: c.name,
        value: c._id
      };
    } );
  },
  childrenOptions: function ( children ) {
    return Claim.find( {}, {
      fields: {
        "children": 1
      }
    } ).map( function ( s ) {
      return {
        label: s.children,
        value: s.children
      };
    } );
  },
  spouseOptions: function ( spouseName ) {
    return Claim.find( {}, {
      fields: {
        "spouseName": 1
      }
    } ).map( function ( spouse ) {
      return {
        label: spouse.spouseName,
        value: spouse.spouseName
      };
    } );
  },
  parentOptions: function ( parentName ) {
    return Claim.find( {}, {
      fields: {
        "parentName": 1
      }
    } ).map( function ( p ) {
      return {
        label: p.parentName,
        value: p.parentName
      };
    } );
  },
  siblingOptions: function ( siblingName ) {
    return Claim.find( {}, {
      fields: {
        "siblingName": 1,
        "sibling2Name": 1,
        "sibling3Name": 1,
        "sibling4Name": 1,
        "sibling5Name": 1,
        "sibling6Name": 1,
        "sibling7Name": 1,
        "sibling8Name": 1,
        "sibling9Name": 1,
        "sibling10Name": 1,
      }
    } ).map( function ( sib ) {
      return {
        label: sib.siblingName,
        value: sib.siblingName
      };
    } );

  }
} );

AutoForm.addHooks( 'claimsUpdateForm', {
  onSuccess: function () {
    setTimeout( function () {
      toastr.options = {
        closeButton: true,
        progressBar: true,
        showMethod: 'slideDown',
        timeOut: 2000
      };
      toastr.success(
        'Updated Successfully ' );
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
