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

    it ('Queue Monitoring', function () {
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__xmlview1--tile-jobs').click()
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.get('#__list0>li').each(($e,index)=>{
            if ($e.text() === 'UAT Test Plant') {
              cy.wrap($e).click({force: true})
            }
        })
        cy.get('#__xmlview2--button-last-status-inner').click()
        cy.get('tr').eq(1).click()
        cy.get('#__xmlview2--button-last-status-inner').click()
        cy.get('#__mbox-btn-0-inner').click({force : true})
        cy.get('#__button0-inner').should('be.visible')
    })


})