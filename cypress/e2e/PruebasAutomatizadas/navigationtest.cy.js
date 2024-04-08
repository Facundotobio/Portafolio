/// <reference types="cypress" />

context('NavigationToMiAgenda', () => {
  it('Verifica la presencia de un elemento después de hacer clic en "Mi agenda"', () => {
    // Navega a la URL principal y espera 5 segundos para que el navegador termine de cargar
    cy.visit('https://facundo-tobio-portfolio.vercel.app/')
    cy.wait(3000)

    // Haz clic en el botón "Mi agenda" y espera 5 segundos para dar tiempo a la página de Calendly para cargar
    cy.contains('button', 'Mi agenda').click()
    cy.wait(3000)

    // Usar cy.origin() para indicar que estos comandos se ejecutarán en el nuevo origen
    cy.origin('https://calendly.com', () => {
      // Espera 10 segundos y luego verifica la presencia del elemento específico en la página de Calendly
      cy.wait(6000)
      cy.get('[id="root"] > div > div > div > div > div > div > div > div:nth-child(2) > div > div > div > div > div > h1').should('exist')
    })
  })
})
