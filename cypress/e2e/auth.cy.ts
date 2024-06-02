/**
 * Auth test e2e
 * Test the authentication process
 */

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('[name="login button"]').click()
    cy.get('[data-testid="login-modal"]').as('loginModal')
  })

  describe('Login modal', () => {
    it('There should be a button to open the login modal', () => {
      cy.get('[name="login button"]').should('exist')
    })

    it('The login modal should open when the button is clicked', () => {
      cy.get('@loginModal').should('exist')
    })

    it('The login modal should have the correct structure', () => {
      cy.get('@loginModal').find('h2').should('have.text', 'Iniciar Sesión')
      cy.get('@loginModal').find('input').should('have.length', 2)
      cy.get('@loginModal').find('input').eq(0).should('have.attr', 'type', 'email')
      cy.get('@loginModal').find('input').eq(1).should('have.attr', 'type', 'password')
      cy.get('@loginModal').find('button[type="submit"]').should('have.text', 'Ingresar')
    })

    it('should have a close button that closes the modal', () => {
      cy.get('@loginModal').find('button[type="button"]').should('have.text', 'Cerrar').click()
      cy.get('@loginModal').should('not.exist')
    })
  })

  describe('Form validation', () => {
    describe('Email field', () => {
      it('should be required', () => {
        cy.get('@loginModal').find('button[type="submit"]').click()
        cy.get('@loginModal').find('input[type="email"]').should('have.attr', 'aria-invalid', 'true')
        cy.get('@loginModal').find('span').contains('El correo electrónico es requerido')
      })

      it('should show an error for invalid email format', () => {
        cy.get('@loginModal').find('input[type="email"]').type('test')
        cy.get('@loginModal').find('button[type="submit"]').click()
        cy.get('@loginModal').find('input[type="email"]').should('have.attr', 'aria-invalid', 'true')
        cy.get('@loginModal').find('span').contains('El formato del correo electrónico es inválido')
      })

      it('should accept a valid email', () => {
        cy.get('@loginModal').find('input[type="email"]').type('example@gmail.com')
        cy.get('@loginModal').find('button[type="submit"]').click()
        cy.get('@loginModal').find('input[type="email"]').should('have.attr', 'aria-invalid', 'false')
        cy.get('@loginModal').find('[aria-describedby="email-error"]').should('not.exist')
      })
    })

    describe('Password field', () => {
      it('Password field should be required', () => {
        cy.get('@loginModal').find('button[type="submit"]').click()
        cy.get('@loginModal').find('input[type="password"]').should('have.attr', 'aria-invalid', 'true')
        cy.get('@loginModal').find('span').contains('La contraseña es requerida')
      })

      it('Password field should accept a valid password', () => {
        cy.get('@loginModal').find('input[type="password"]').type('test')
        cy.get('@loginModal').find('button[type="submit"]').click()
        cy.get('@loginModal').find('input[type="password"]').should('have.attr', 'aria-invalid', 'false')
        cy.get('@loginModal').find('span').contains('La contraseña es requerida').should('not.exist')
      })
    })
  })

  describe('Login process', () => {
    // TODO: Add test for the login process
    // it should check if the credentials are correct
    // it should check if the credentials are incorrect
  })
})
