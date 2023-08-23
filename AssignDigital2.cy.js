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


    it ('Assign Dilgital App 2', function () {
    cy.loginSE(this.testdata.username,this.testdata.password)
    cy.get('#__tile9-hdr-text').click()
    cy.wait(3000)
    cy.get('#table-select-digital-app-searchField-I').type('DSW',{force: true})
    cy.get('#table-select-digital-app-searchField-search').click({force: true})
    cy.get('tr').eq(1).click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview2--combobox-assigned-inner').type('N',{force: true})
    cy.wait(3000)
    cy.get('#__item10-__clone26-selectMulti-CbBg').click({force: true})
    cy.get('#__item10-__clone27-selectMulti-CbBg').click({force: true})
    cy.get('#__xmlview2--combobox-transformation-arrow').click({force: true})
    cy.get('#__item11-__xmlview2--combobox-transformation-0').click({force: true})
    cy.get('#__xmlview2--button-assign-tags').click({force: true})
    cy.get('#__input0-table-change-messages-0-inner').type('Automate',{force: true})
    cy.get('#__input0-table-change-messages-1-inner').type('Automate',{force: true})
    cy.get('#__input0-table-change-messages-0-inner').clear({force: true})
    cy.get('#__input0-table-change-messages-0-inner').type('Automate',{force: true})
    cy.wait(2000)
    cy.get('#__button4-inner').click({force: true})
    cy.wait(5000)
  })
})