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


  it ('External flow engie', function () { 
    cy.loginSE(this.testdata.username,this.testdata.password)
    cy.get('#__tile1').click()
    cy.get('#__button2-inner').click()
    cy.get('#__xmlview3--combobox-plant-arrow').click()
    cy.get('#__list1>li').each(($e,index)=>{
        if ($e.text() === 'UAT Test Plant') {
        cy.wrap($e).click({force: true})
        }
    })
    cy.get('#__xmlview3--switch-enabled-textoff').click()
    cy.get('#__xmlview3--switch-engie-textoff').click()
    cy.get('#__xmlview3--input-data-source-name-inner').type('Test Data Source EngieAu')
    cy.get('#__xmlview3--input-description-inner').type('Test Data Source Engie for UAT')
    cy.get('#__button6-inner').click()
    cy.get('#__button0-img').click()
    cy.get('#__tile7').click()
    cy.wait(5000)
    cy.get('#__button8-inner').click()
    cy.wait(20000)
    cy.get('#__xmlview5--combobox-data-source-arrow').click()
    cy.get('#__list11>li').each(($e,index)=>{
      if ($e.text() === 'Test Data Source EngieAu') {
        cy.wrap($e).click({force: true})
        }
      })
    cy.get('#__xmlview5--input-data-flow-name-inner').type('Engie WattsOn test FlowAU')
    cy.get('#__xmlview5--input-description-inner').type('Engie WattsOn test Flow')
    cy.get('#__xmlview5--combobox-flow-type-arrow').click()
    cy.get('#__list12>li').each(($e,index)=>{
      if ($e.text() === 'WattsOn - Engie') {
        cy.wrap($e).click({force: true})
        }
      })
    cy.get('#__xmlview5--switch-stream-gas-textoff').click()
    cy.get('#__xmlview5--input-gas-operator-code-vhi').click()
    cy.wait(20000)   
    cy.get('#energySelectFragment-searchField-I').type('SNAM',{force: true})
    cy.get('#energySelectFragment-searchField-search').click({force: true})
    cy.get('#energySelectFragment-list-listUl>li').click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview5--input-gas-code-vhi').click({force: true})
    cy.get('#energySelectFragment-searchField-I').type('32854101',{force: true})
    cy.get('#energySelectFragment-searchField-search').click({force: true})
    cy.get('#energySelectFragment-list-listUl>li').click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview5--combobox-refCondition-arrow').click({force: true})
    cy.get('#__list13>li').each(($e,index)=>{
      if ($e.text() === 'IT_METERING') {
      cy.wrap($e).click({force: true})
      }
    })
    cy.get('#__xmlview5--switch-stream-power-textoff').click({force: true})
    cy.get('#__xmlview5--input-pwr-operator-code-vhi').click({force: true})
    cy.get('#energySelectFragment-searchField-I').type('RTE',{force: true})
    cy.get('#energySelectFragment-searchField-search').click({force: true})
    cy.get('#energySelectFragment-list-listUl>li').click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview5--input-pwr-code-vhi').click({force: true})
    cy.get('#energySelectFragment-searchField-I').type('3700',{force: true})
    cy.get('#energySelectFragment-searchField-search').click({force: true})
    cy.get('#energySelectFragment-list-listUl>li').click({force: true})
    cy.wait(3000)
    cy.get('#__xmlview5--combobox-datadestination-arrow').click({force: true})
    cy.get('#__list14>li').each(($e,index)=>{
      if ($e.text() === 'Sanofi UAT Data Lake Archive') {
        cy.wrap($e).click({force: true})
      }
    })
    cy.get('#__xmlview5--switch-enabled-textoff').click({force: true})
    cy.get('#__button12-inner').click()
    cy.get('#__title0').should('be.visible')

    cy.get('#__xmlview4--combobox-plant-arrow').click()
    cy.get('#__list9>li').each(($e,index)=>{
      if ($e.text() === 'UAT Test Plant') {
        cy.wrap($e).click({force: true})
      }
    })
    cy.get('#__xmlview4--combobox-data-source-arrow').click()
    cy.get('#__list10>li').each(($e,index)=>{
      if ($e.text() === 'Test Data Source EngieAu') {
        cy.wrap($e).click({force: true})
      }
    })
    cy.get('#__xmlview4--input-data-flow-inner').type('Engie WattsOn test FlowAU{enter}')
    cy.get('#__item19-__clone26-selectSingle-Button').click()
    // cy.get('td').eq(1).click()
    cy.get('#__xmlview4--button-run-flow-manually-inner').click()
    cy.get('#__xmlview4--messagestrip-run-flow-manually').should('be.visible')

    // cy.get('#__button0-img').click()
    // cy.get('#__xmlview1--tile-queue').click()
    // cy.get('#__xmlview6--combobox-plant-arrow').click()
    // cy.get('#__list15>li').each(($e,index)=>{
    //   if ($e.text() === 'UAT Test Plant') {
    //     cy.wrap($e).click({force: true})
    //   }
    // })
  })


})