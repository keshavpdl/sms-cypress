class LoginPage {
    visit() {
      cy.visit('/login/');
    }
  
    fillOutLoginForm(username, password) {
      cy.get('input[name="log"]').type(username);
      cy.get('input[name="pwd"]').type(password);
    }
  
    submitLogin() {
      cy.get('button').contains('Sign In Now').click();
    }
  
    verifyLoginSuccess() {
      cy.get('a.nav-link[href*="logout"]')
      .should('be.visible')
      .and('contain', 'Logout');
    }
  
    verifyEmptyCredentialsError() {
        cy.contains('Error: The username field is empty.').should('be.visible');
        cy.contains('Error: The password field is empty.').should('be.visible');
      }  

      verifyInvalidPasswordError(username) {
        const errorMessage = `Error: The password you entered for the username ${username} is incorrect. Lost your password?`;
        cy.contains(errorMessage).should('be.visible');
      }
      verifyInvalidUsernameError(username) {
        const errorMessage = `Error: The username ${username} is not registered on this site. If you are unsure of your username, try your email address instead.`;
        cy.contains(errorMessage).should('be.visible');
      }
  }


  
  export default LoginPage;
  