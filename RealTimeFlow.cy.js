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

    it ('Real time flow', function () {
      cy.loginSE(this.testdata.username,this.testdata.password)
      cy.get('#__tile3').click()
      cy.get('#__filter0').should('be.visible')
      cy.get('#__filter1').should('be.visible')
      cy.get('#__xmlview2--combobox-plant-arrow').click()
      cy.get('#__list0>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview2--combobox-data-source-arrow').click()
      cy.get('#__button2-inner').click()
      cy.get('#combobox-plant-popup-arrow').click({force: true})
      cy.get('#__list2>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.wait(3000)
      cy.get('#combobox-data-source-popup-arrow').click({force: true})
      cy.get('#__list3>li').each(($e,index)=>{
        if ($e.text() === 'UAT_Test_Source') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.wait(3000)
      cy.get('#agent-button-save-inner').click({force: true})
      cy.get('#__text12').contains('Process running in background, this action can take several minutes')
      cy.get('#__filter1').click()
      cy.get('#__button4-inner').click()
      cy.wait(3000)
      cy.get('#__xmlview3--input-description-inner').type('Testing Flow')
      cy.get('#__button8-inner').click()
      cy.get('#__xmlview3--object-header-pco-destination-titleText-inner').should('be.visible')
      cy.get('#__xmlview3--combobox-plant-arrow').click()
      cy.get('#__list4>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview3--input-pco-destination-inner').type('StreamingEngine_DataPlatform_AWS_UAT')
      cy.get('#__xmlview3--switch-default').click()
      cy.get('#__button8-inner').click()
      cy.get('tbody[id=__xmlview2--table-pco-destinations-tblBody]>tr').eq(2).click()
      cy.get('#__button1-img').click()
      cy.get('#__xmlview2--combobox-plant-arrow').click()
      cy.get('#__list0>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview2--combobox-data-source-arrow').click()
      cy.get('#__list1>li').each(($e,index)=>{
        if ($e.text() === 'UAT_Test_Source') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.get('tr').find('td').each(($e,index)=>{
        if ($e.text() === 'Testing Flow') {
          cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview3--button-delete-inner').click()
      cy.get('#__button10-inner').click({force: true})
      
    })
})