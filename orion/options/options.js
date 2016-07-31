Options.set( 'forbidClientAccountCreation', true );

Options.set( 'adminHomeRoute', 'Dashboard' );

ReactiveTemplates.set( 'layout', 'mainLayout' );
ReactiveTemplates.set( 'accounts.index', 'AccountsIndex' );
ReactiveTemplates.set( 'accounts.update', 'AccountsUpdate' );
ReactiveTemplates.set( 'accounts.create', 'AccountsCreate' );
ReactiveTemplates.set( 'myAccount.index', 'myAccountsIndex' );
ReactiveTemplates.set( 'myAccount.profile', 'AccountProfile' );
ReactiveTemplates.set( 'myAccount.password', 'AccountPassword' );

ReactiveTemplates.set( 'collections.claims.index', 'claimsIndex' );
ReactiveTemplates.set( 'collections.claims.create', 'claimsCreate' );
ReactiveTemplates.set( 'collections.claims.update', 'claimsUpdate' );

ReactiveTemplates.set( 'collections.enrollments.index', 'enrollmentsIndex' );
ReactiveTemplates.set( 'collections.enrollments.create', 'enrollmentsCreate' );
ReactiveTemplates.set( 'collections.enrollments.update', 'enrollmentsUpdate' );

ReactiveTemplates.set( 'collections.companies.index', 'companiesIndex' );
ReactiveTemplates.set( 'collections.companies.create', 'companyCreate' );
ReactiveTemplates.set( 'collections.companies.update', 'companyUpdate' );

ReactiveTemplates.set( 'collections.branches.index', 'branchIndex' );
ReactiveTemplates.set( 'collections.branches.create', 'branchCreate' );
ReactiveTemplates.set( 'collections.branches.update', 'branchUpdate' );

ReactiveTemplates.set( 'collections.products.index', 'productsIndex' );
ReactiveTemplates.set( 'collections.products.create', 'productsCreate' );
ReactiveTemplates.set( 'collections.products.update', 'productsUpdate' );

ReactiveTemplates.set( 'collections.insurers.index', 'insurerIndex' );
ReactiveTemplates.set( 'collections.insurers.create', 'insurerCreate' );
ReactiveTemplates.set( 'collections.insurers.update', 'insurerUpdate' );

AccountsTemplates.configure( {
  texts: {
    errors: {
      loginForbidden: "Wrong email or password",
      mustBeLoggedIn: "error.accounts.Must be logged in",
      pwdMismatch: "error.pwdsDontMatch",
      validationErrors: "Validation Errors",

    }
  }
} );
