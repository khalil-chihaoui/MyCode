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


  it ('Assign Dilgital App 1', function ()  {
    cy.loginSE(this.testdata.username,this.testdata.password)
    cy.XMIIRole(this.testdata.role)
    cy.get('#__button0').click() 
    // cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#')
    cy.wait(5000)
    cy.get('#__tile9-hdr-text').click()
    cy.wait(5000)
    cy.get('#table-select-digital-app-cancel-content').click({force: true})
    cy.wait(4000)
    cy.get('#__xmlview3--link-change-digital-app').click({force: true})
    cy.get('#table-select-digital-app-dialog').find('#table-select-digital-app-searchField-I').type('DSW',{force: true})
    cy.get('#table-select-digital-app-searchField-search').click({force: true})
    cy.wait(10000)
    cy.get('tr').eq(1).click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview3--combobox-assigned-inner').type('Y')
    cy.wait(3000)
    cy.get('tr').eq(1).click()
    cy.wait(3000)
    var textValue 
    cy.get('tr').eq(1).find('td').eq(4).then($value => {
     textValue = $value.text()
     cy.get('#__button0').click()
     //   cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#')
     cy.wait(4000)
     cy.get('#__tile8').click({force: true}) 
     cy.wait(9000)
     // cy.get('#__xmlview3--input-original-tag-inner').type(textValue+'{enter}', {force: true})
     // cy.wait(4000)
     // cy.get('#table-select-digital-app-cancel-content').click({force: true})
     cy.get('#__xmlview4--input-original-tag-inner').type(textValue+'{enter}', {force: true})
     cy.wait(4000)
     cy.get('table[id=__xmlview4--table-tag-catalog-listUl]>tbody>tr>td').eq(2).click({force: true})
     cy.wait(4000)
     // __xmlview4--table-tag-catalog-tblBody
     //  cy.get('tr').eq(1).find('td').eq(4).click({force: true})
     //  cy.get('#__item59-__clone152_cell2').find("td").eq(2).click()
     cy.get('#__xmlview5--switch-archive-handle').then(($input) => {
        if ($input.attr('data-sap-ui-swt') === 'Yes' ) {
        cy.get('#__xmlview5--switch-archive-textoff').click()
      }
      })
     
     cy.wait(4000)
     cy.get('#__button21-inner').click() 
     cy.get('#__input0-table-change-messages-0-inner').type('Automate', {force: true}) 
     cy.get('#__button21-inner').click({force: true}) 
     cy.get('#__button0-img').click({force: true}) 
     cy.wait(2000)
     cy.get('#__tile9-hdr-text').click({force: true})
     cy.wait(2000)
     cy.get('#__xmlview3--input-original-tag-inner').type(textValue+'{enter}', {force: true})
     cy.get('#table-select-digital-app-cancel-content').click({force: true})
     cy.get('#__xmlview3--link-change-digital-app').click({force: true})
     cy.wait(3000)
     cy.get('#table-select-digital-app-searchField-I').type('ICMC', {force: true})
     cy.wait(3000)
     cy.get('#table-select-digital-app-searchField-search').click({force: true})
     cy.wait(3000)
     cy.get('tr').eq(1).click({force: true})     
     cy.wait(3000)
     cy.get('#__xmlview3--link-change-digital-app').click({force: true})
     cy.wait(3000)
     cy.get('#table-select-digital-app-searchField-I').type('DSW', {force: true})
     cy.get('#table-select-digital-app-searchField-search').click({force: true})
     cy.get('tr').eq(1).click({force: true})
    })
    // cy.get('table[id=__xmlview2--table-digital-apps-listUl]>tbody>tr td').each(($e,index)=>{
    //  const text = $e.text()
    //  cy.log($e.text())
    // })
  })

  // it ('Assign Dilgital App 2', function () {
  //   cy.loginSE(this.testdata.username,this.testdata.password)
  //   cy.get('#__tile9-hdr-text').click()
  //   cy.wait(3000)
  //   cy.get('#table-select-digital-app-searchField-I').type('DSW',{force: true})
  //   cy.get('#table-select-digital-app-searchField-search').click({force: true})
  //   cy.get('tr').eq(1).click({force: true})
  //   cy.wait(3000)
  //   cy.get('#__xmlview2--combobox-assigned-inner').type('N',{force: true})
  //   cy.wait(3000)
  //   cy.get('#__item10-__clone26-selectMulti-CbBg').click({force: true})
  //   cy.get('#__item10-__clone27-selectMulti-CbBg').click({force: true})
  //   cy.get('#__xmlview2--combobox-transformation-arrow').click({force: true})
  //   cy.get('#__item11-__xmlview2--combobox-transformation-0').click({force: true})
  //   cy.get('#__xmlview2--button-assign-tags').click({force: true})
  //   cy.get('#__input0-table-change-messages-0-inner').type('Automate',{force: true})
  //   cy.get('#__input0-table-change-messages-1-inner').type('Automate',{force: true})
  //   cy.get('#__button4-inner').click({force: true})

  // })

  // it ('Assign Dilgital App 2', function () {
  //   cy.loginSE(this.testdata.username,this.testdata.password)
  //   cy.get('#__tile9-hdr-text').click()
  //   cy.wait(3000)
  //   cy.get('#table-select-digital-app-searchField-I').type('DSW',{force: true})
  //   cy.get('#table-select-digital-app-searchField-search').click({force: true})
  //   cy.get('tr').eq(1).click({force: true})
  //   cy.wait(3000)
  //   cy.get('#__xmlview2--combobox-assigned-inner').type('N',{force: true})
  //   cy.wait(3000)
  //   cy.get('#__item10-__clone26-selectMulti-CbBg').click({force: true})
  //   cy.get('#__item10-__clone27-selectMulti-CbBg').click({force: true})
  //   cy.get('#__xmlview2--button-assign-tags').click({force: true})
  //   cy.get('#__button3-inner').click({force: true})
  //   cy.get('#__item14-content').click({force: true})
  //   cy.get('#__popover4MessageDescriptionText').contains('Please select a Transformation')
  // })

})