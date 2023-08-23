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

    it ('Initial Data Upload', function () {
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__tile8').click()
        cy.wait(15000)
        cy.get('#__xmlview2--button-enable-data-load-inner').click()
        cy.get('#__button7-inner').click()
        cy.get('#__item25-content').click({force: true})
        cy.get('#__popover6MessageDescriptionText').contains('Please select one or more tags, please.')
        cy.get('#__button10-img').click({force: true})
        cy.get('#__xmlview2--combobox-plant-arrow').click()
        cy.get('#__list0>li').each(($e,index)=>{
            if ($e.text() === 'UAT Test Plant') {
              cy.wrap($e).click({force: true})
            }
        })
        cy.wait(3000)
        // cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').each(($el, $index) => {
            
        // })
        cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr').eq(1).find('td').eq(1).click()
        cy.get('#__xmlview2--button-enable-data-load-inner').click()
        cy.get('#initial-load-date-time-from-inner').type('01/31/2022 13:55:54',{force: true})
        cy.get('#initial-load-date-time-to-inner').type('03/02/2022 11:55:54',{force: true})
        cy.get('#initial-load-button-save-simple-inner').click({force: true})
        cy.get('tbody[id=initial-load-report-tblBody]>tr>td').eq(4).contains('TagCatalogTransaction / Throw_Validation / Plant Hierarchy, Tag Naming Convention and Unit of Measure are required')
        cy.get('#initial-load-close-inner').click({force: true})
        cy.get('#initial-load-close-inner').click({force: true})
        cy.get('#__xmlview2--combobox-archive-inner').type('y')
        cy.wait(3000)
        var textValue 
        cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').eq(4).then($value => {
          textValue = $value.text()
          cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').eq(1).click()
          cy.get('#__xmlview2--button-enable-data-load-inner').click()
          cy.get('#initial-load-button-save-simple-inner').click({force: true})
          cy.get('#initial-load-close-inner').click({force: true})
          cy.get('#__xmlview2--input-original-tag-inner').type(textValue+'{enter}')
        })
        cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').eq(1).click()
        cy.get('#__xmlview2--button-enable-data-load-inner').click()
        cy.get('#initial-load-button-save-simple-inner').click({force: true})
        cy.get('tbody[id=initial-load-report-tblBody]>tr>td').eq(4).contains('Initial Data Load already enabled for this tag')
        cy.get('#initial-load-close-inner').click({force: true})
        cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').eq(1).click()
        cy.get('#__toolbar0-overflowButton-img').click()
        cy.get('#__xmlview2--button-disable-data-load-content').click({force: true})
        cy.get('#__button12-inner').click({force: true})
        cy.wait(4000)
        cy.get('tbody[id=initial-load-report-tblBody]>tr>td').eq(4).contains('nitial Data Load disabled successfully')
        cy.get('#initial-load-close-inner').click({force: true})
        

        // cy.get('tbody[id=__xmlview2--table-tag-catalog-tblBody]>tr>td').eq(1).click()
        // cy.get('#__xmlview2--button-enable-data-load-inner').click()

    })


})