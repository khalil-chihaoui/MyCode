describe('Header And User', () => {
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

    it ('Header and user', function ()  {
        cy.loginSEError(this.testdata.Fakeusername,this.testdata.Fakepassword)
        cy.get('.urTxtMsg').contains('User authentication failed')
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__xmlview0--button-name-content').click()
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.get('#__xmlview2--combobox-language-arrow').click()
        cy.get('#__list1>li').each(($e,index)=>{
          if ($e.text() === 'Français') {
          cy.wrap($e).click({force: true})
          }
        })
        cy.get('#__button2-img').click()
        
    })
        
    it ('Header and user2', function ()  {    
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__title0-inner').contains('Moteur de Streaming')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#/ProfilePage')
        cy.wait(5000)
        cy.get('#__xmlview2--combobox-language-arrow').click()
        cy.get('#__list0>li').each(($e,index)=>{
          if ($e.text() === 'English') {
          cy.wrap($e).click({force: true})
          }
        })
        cy.get('#__button2-img').click()
        cy.get('#__button0-img').click()
        cy.wait(5000)
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#')
        cy.visit('https://sapwdawsemea.pharma.aventis.com:9102/XMII/CM/StreamingEngine/StreamingEngine/index.irpt#')
        
    })
    it ('Header and user3', function ()  { 
        cy.loginSE(this.testdata.username,this.testdata.password)
        cy.get('#__title0-inner').contains('Streaming Engine')
        cy.get('#__xmlview0--button-name-content').click()
        cy.get('#__item8').click({force: true})
        cy.get('#__text4').contains('Are you sure you want to logout?')

    })

})