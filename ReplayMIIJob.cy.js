describe('Replay MII Job', () => {
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

    it ('Replay MII Job', function ()  {
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__xmlview1--tile-jobs').click()
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.get('#__list0>li').each(($e,index)=>{
          if ($e.text() === 'UAT Test Plant') {
          cy.wrap($e).click({force: true})
          }
        })
        cy.get('tr').eq(2).find('td').eq(4).click()
        cy.get('#__xmlview2--button-update-end-date-content').click()
        cy.get('#date-time-icon').click({force: true})
        cy.get('#date-time-OK-content').click({force: true})
        cy.get('#ds-button-save-content').click({force: true})
        cy.get('#__button16-inner').click({force: true})
    })

})