/// <reference types="cypress" />

context('Cypress APIs', () => {

    context('Cypress.Commands', () => {
      beforeEach(() => {
        cy.visit('https://example.cypress.io/cypress-api')
      })
  
      // Crear un nuevo comando personalizado para hacer log con un mensaje específico
      Cypress.Commands.add('customLog', {
        prevSubject: false,
      }, (message) => {
        // Loguea el mensaje personalizado
        cy.log('Realizando pruebas de comandos personalizados con Cypress: ' + message);
      })
  
      // Prueba que utiliza el nuevo comando personalizado
      it('.customLog() - create a custom log command', () => {
        // Utiliza el nuevo comando personalizado para hacer log
        cy.customLog("Realizando pruebas de comandos personalizados con Cypress");
      })
    })
  })
  
  