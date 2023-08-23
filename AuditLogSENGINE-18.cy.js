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

    it ('Audit Log', function () {
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__tile0').click()
        cy.get('#__xmlview2--input-plant-id-inner').type('UAT{enter}')
        cy.get('td').eq(4).click()
        cy.wait(2000)
        cy.get('#__xmlview3--button-restore-job-duration-img').click()
        cy.wait(1000)
        cy.get('#table-select-restore-value-cancel-inner').click({force: true})
        cy.wait(1000)
        cy.get('#__button0-inner').click()
        cy.get('#__tile1').click()
        cy.wait(4000)
        cy.get('tr').eq(3).find('td').eq(4).click()
        cy.get('#__xmlview5--button-restore-data-server-contextual-img').click()
        cy.get('#table-select-restore-value-cancel-inner').click({force: true})
        cy.get('#__button0-inner').click()
        cy.get('#__tile5').click()
        cy.wait(2000)
        cy.get('#__xmlview6--combobox-plant-arrow').click()
        cy.get('#__list9>li').each(($e,index)=>{
            if ($e.text() === 'UAT Test Plant') {
              cy.wrap($e).click({force: true})
            }
        })
        cy.get('tbody[id=__xmlview6--table-contextual-flows-tblBody]>tr').eq(1).click()
        cy.get('#__xmlview7--button-restore-flow-name-inner').click()
        cy.wait(1000)
        cy.get('#table-select-restore-value-cancel-inner').click({force: true})
        cy.wait(1000)
        cy.get('#__button0-inner').click()
        cy.wait(1000)
        cy.get('#__tile8').click()
        cy.wait(15000)
        cy.get('tbody[id=__xmlview8--table-tag-catalog-tblBody]>tr').eq(1).click()
        cy.wait(1000)
        cy.get('#__xmlview9--button-restore-uom-inner').click()
        cy.get('#table-select-restore-value-cancel-inner').click({force: true})
        cy.wait(1000)
        cy.get('#__button0-inner').click()
        cy.wait(2000)
        cy.get('#__tile12').click()
        cy.get('#__xmlview10--combobox-plant-arrow').click()
        cy.get('#__list28>li').each(($e,index)=>{
            if ($e.text() === 'UAT Test Plant') {
              cy.wrap($e).click({force: true})
            }
        })
        cy.get('#__xmlview10--input-user-inner').type(this.testdata.username +'{enter}')
        cy.get('#__xmlview10--filterbar-audit-log-btnGo-inner').click()
        cy.get('#__xmlview10--datetime-from-inner').type('08/21/2023 10:20:32')
        cy.get('#__xmlview10--datetime-to-inner').type('08/21/2023 10:30:32')
        cy.get('#__button40-inner').click()
    })

})