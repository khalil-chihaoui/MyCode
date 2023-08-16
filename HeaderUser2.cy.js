describe('Header And User2', () => {
    beforeEach (() => {
      cy.fixture('testdata').then(function (testdata) {
        this.testdata = testdata
      })
  
    })
      
    
    Cypress.on('uncaught:exception', (err, runnable) => {
      // returning false here prevents Cypress from
      // failing the test
      return false
    })


    it ('Header and user', function ()  {
        cy.loginSE(this.testdata.username1,this.testdata.password1)
    })
})