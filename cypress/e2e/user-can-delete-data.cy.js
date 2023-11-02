describe('template spec', () => {
  // before each test case
  beforeEach(() => {
    //reset database using cypress command
    cy.exec("cd ../clone/demo-app-cypress-automation && php artisan migrate:fresh --seed")
    //arrange
    cy.visit('http://localhost:8000/')
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
  });

  // positive test case
  it('User can delete data', () => {
    cy.get('.table td')
    .contains('user')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
    // .and('have.text', 'User Deleted Successfully')
      .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user');
  });

  // positive test case
  it('User can cancel delete data', () => {
    //arrange
    //act
    cy.get('.table td')
      .contains('user')
      .parent()
      .find('button')
      .contains('Delete')
      .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('Cancel').click();
    //assert
    cy.get('.table td').contains('user').should('be.visible');
  });

  //negative test case
  it('dummy test', () => {
    //arrange
    //act
    //assert
  });

  //challenge 3
  it.only('User can delete data (user)', () => {
    cy.get('.table td')
    .contains('user')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
    // .and('have.text', 'User Deleted Successfully')
      .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'user');
  });

  it.only('User can delete data (Another Admin)', () => {
    cy.get('.table td')
    .contains('Another Admin')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
    // .and('have.text', 'User Deleted Successfully')
      .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'Another Admin');
  });

  it.only('User can delete data (User Baru)', () => {
    cy.get('.table td')
    .contains('User Baru')
    .parent()
    .find('button')
    .contains('Delete')
    .click();
    // make sure sweet alert visible
    cy.get('.swal-button-container').find('button').contains('OK').click();
    cy.get('.alert')
      .should('be.visible')
      .and('have.class', 'alert-success')
    // .and('have.text', 'User Deleted Successfully')
      .contains('User Deleted Successfully');
    cy.get('.table').should('not.contain', 'User Baru');
  });
});