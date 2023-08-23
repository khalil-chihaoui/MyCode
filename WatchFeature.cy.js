describe('Assign tag', () => {
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

    it ('Watch feature', function () {
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__tile8').click()
        cy.wait(15000)
        cy.get('#__xmlview2--combobox-watch-inner').type('n')
        cy.wait(15000)
        cy.get('#__xmlview2--combobox-archive-inner').type('y')
        cy.wait(15000)
        cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr').eq(1).click()
        cy.get('#__xmlview3--switch-watch-textoff').then(($input) => {
            if (cy.log($input.attr('class')==='no')){
                cy.get('#__xmlview3--switch-watch-textoff').click()
                cy.get('#__button22-inner').click({force: true})
            }
        })
        cy.get('#__button17-inner').click()
        cy.get('#__input0-table-change-messages-0-inner').type('Automate',{force: true})
        cy.get('#__input0-table-change-messages-1-inner').type('Automate',{force: true})
        cy.get('#__button24-inner').click()
    })
})