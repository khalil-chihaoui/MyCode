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

    it ('Tag catalog filter', function () {
      cy.loginSE(this.testdata.username,this.testdata.password)
      cy.get('#__tile1').click()
      cy.get('#__button2-content').click() 
      cy.get('#__xmlview3--switch-enabled-textoff').click()
      cy.get('#__xmlview3--switch-flat-file-textoff').click()
      cy.get('#__button6-inner').click()
      cy.get('#__button6-inner').should('be.visible')
      cy.get('#__xmlview3--combobox-plant-arrow').click()
      cy.get('#__list1>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview3--input-data-source-name-inner').type('Test flat fileAutomate')
      cy.get('#__xmlview3--input-description-inner').type('For test purpose only Flat file')
      cy.get('#__xmlview3--input-pco-server-url-inner').type('http://10.24.27.250:50050/PCoManagement')
      cy.get('#__xmlview3--input-pco-prefix-inner').type('SE_TEST_KBY')
      cy.get('#__xmlview3--combobox-dataserver-process-inner').type('SE_SIP_File_Transfer_Process_Events {enter}')
      cy.get('#__xmlview3--combobox-pco-credential-arrow').click()
      cy.get('#__list7>li').each(($e,index)=>{
        if ($e.text() === 'SE_PCo') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__button6-inner').click()
      cy.get('#__button0-img').click()
      cy.get('#__tile6').click()
      cy.get('#__button8-content').click()
      cy.wait(7000)
      cy.get('#__xmlview5--combobox-data-source-arrow').click()
      cy.get('#__list11>li').each(($e,index)=>{
        if ($e.text() === 'Test flat fileAutomate') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview5--input-data-flow-name-inner').type('Test Flat File Flow')
      cy.get('#__xmlview5--input-description-inner').type('Test flow')
      cy.get('#__xmlview5--input-pco-destination-id-inner').type('11ac540e-ba62-4730-abee-bdb7e70e4ce4')
      cy.get('#__xmlview5--combobox-datadestination-arrow').click()
      cy.get('#__list12>li').each(($e,index)=>{
        if ($e.text() === 'Fake Destination') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__button13-inner').click()
      cy.get('#__button0-img').click()
      cy.get('#__tile1').click()
      cy.get('#__xmlview2--combobox-plant-arrow').click()
      cy.get('#__list0>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview2--input-data-source-inner').type('Test flat fileAutomate{enter}')
      cy.wait(3000)
      cy.get('tr').eq(1).click()
      cy.get('#__xmlview3--switch-flat-file-textoff').click()
      // cy.get('#__xmlview3--combobox-dataserver-process-arrow').click()
      // cy.get('#__list0>li').each(($e,index)=>{
      //   if ($e.text() === 'UAT Test Plant') {
      //   cy.wrap($e).click({force: true})
      //   }
      // })
      cy.wait(3000)
      cy.get('#__xmlview3--combobox-dataserver-process-inner').type('SE_SIP_File_Transfer_Process_Events{enter}')
      cy.wait(3000)
      cy.get('#__button6-inner').click()
      cy.get('#__input0-table-change-messages-0-inner').type('Automate',{force: true})
      cy.get('#__input0-table-change-messages-1-inner').type('Automate',{force: true})
      cy.get('#__button15-inner').click({force: true})
      cy.get('#__button5-inner').click({force: true})
      cy.get('#__popover14-error').click({force: true})
      cy.get('#__item35-content').click({force: true})
      cy.get('#__popover14MessageDescriptionText').contains(this.testdata.ErrorMsg)

      cy.get('#__button0-img').click()
      cy.get('#__tile6').click()
      cy.get('#__xmlview4--combobox-plant-arrow').click()
      cy.get('#__list9>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__xmlview4--combobox-data-source-arrow').click()
      cy.get('#__list10>li').each(($e,index)=>{
        if ($e.text() === 'Test flat fileAutomate') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.wait(5000)
      cy.get('table[id=__xmlview4--table-File-flows-listUl]>tbody>tr').click()
      cy.wait(5000)
      cy.get('#__xmlview5--input-pco-destination-id-inner').clear()
      cy.get('#__xmlview5--combobox-datadestination-arrow').click()
      cy.get('#__list12>li').each(($e,index)=>{
        if ($e.text() === 'test local destination') {
        cy.wrap($e).click({force: true})
        }
      })
      cy.get('#__button13-inner').click()
      cy.get('#__button13-inner').should('be.visible')
      cy.get('#__xmlview5--input-pco-destination-id-inner').type('11ac540e-ba62-4730-abee-bdb7e70e4ce4')
      cy.get('#__button13-inner').click()
      cy.get('#__input1-table-change-messages-0-inner').type('Automate',{force: true})
      cy.wait(5000)
      cy.get('#__button21-content').click({force: true})
      cy.wait(2000)
      cy.get('#__xmlview4--input-data-flow-inner').type('test{enter}')
      cy.get('#__xmlview4--input-data-flow-inner').clear().type('{enter}')
      cy.get('#__button9-img').click()
      cy.get('#__dialog0-cancelbutton-inner').click({force: true})
      // cy.get('#__xmlview2--combobox-plant-arrow').click()     
      // cy.get('#__xmlview2--input-data-source-inner').type('Test flat fileAutomate{enter}')
      // cy.get('#__xmlview3--combobox-pco-credential-inner').type('SE_PCo{enter}')
      // cy.get('#__tile6').click()
      // cy.get('#__button8-inner').click()

      // cy.get('#__xmlview3--switch-enabled-handle').then(($input) => {
      //   cy.log($input.attr('data-sap-ui-swt'))
      // })
    })


})