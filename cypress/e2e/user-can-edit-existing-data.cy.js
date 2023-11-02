describe('User Can Edit Existing Data', () => {
  afterEach(() => {
    cy.log('runs after each test in the block');
  });
  // before each test case
  beforeEach(() => {
    //arrange
    cy.visit('http://localhost:8000/')
    //reset database using cypress command
    cy.exec("cd ../clone/demo-app-cypress-automation && php artisan migrate:fresh --seed")
    //act
    cy.get(':nth-child(2) > .form-control').type('superadmin@gmail.com');
    cy.get(':nth-child(3) > .form-control').type('password');
    cy.get('.btn').click();
    cy.visit('http://localhost:8000/user-management/user');
  });

  //positive test case
  it('User can edit existing data', () => {
    cy.get('.table td')
      .contains('user')
      .parent()
      .find('a')
      .contains('Edit')
      .click();
    cy.get('#name').clear('user ');
    cy.get('#name').type('user edited');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('user').should('have.text', 'user edited');
    cy.get('.alert').should('be.visible').and('have.class', 'alert-success').and('contain', 'User Berhasil Diupdate');
  })

  //negative test case
  it('negative test case', () => {
  })

  //challenge 1
  it.only('User can edit existing data user baru', () => {
    cy.get('.table td').contains('User Baru').parent().find('a').contains('Edit').click();
    cy.get('#name').clear('User bar');
    cy.get('#name').type('User new');
    cy.get('.btn-primary').contains('Submit').click();
    cy.get('.table td').contains('User').should('have.text', 'User new');
    cy.get(".alert")
      .should("be.visible")
      .and("have.class", "alert-success")
      .and("contain", "User Berhasil Diupdate")
    ;
  })

//challenge 2
it.only('User can edit existing data user', () => {
  cy.get('.table td').contains('user').parent().find('a').contains('Edit').click();
  //make sure swett alert visible
  cy.get('#name').clear('user ');
  cy.get('#name').type('user edited');
  cy.get('.btn-primary').contains('Submit').click();
  cy.get('.table td').contains('user').should('have.text', 'user edited');
  cy.get(".alert")
    .should("be.visible")
    .and("have.class", "alert-success")
    .and("contain", "User Berhasil Diupdate")
    ;
  })
})