describe('Pruebas en el portfolio de Facundo Tobio', () => {
    beforeEach(() => {
      cy.visit('https://facundo-tobio-portfolio.vercel.app/')
    })
  
    it('Carga de la página', () => {
        // Verificar que la página no tiene errores de carga
        cy.get('body').should('not.contain', 'Error')
        // Verificar que la página es visible
        cy.get('body').should('be.visible')
        // Verificar que el elemento h1 está presente
        cy.get('h1').should('exist')
      })
      
    it('Contiene el elemento con el texto adecuado', () => {
    cy.visit('https://facundo-tobio-portfolio.vercel.app/')
    // Verificar que el elemento h1 existe y contiene el texto esperado
    cy.get('h1').should('contain.text', 'Hola, soy Facundo Tobio')
    })
  
  
    it('Interacción con elementos', () => {
      cy.get('a[href="#contacto"]').click()
      cy.url().should('include', '#contacto')
    })
  })
  