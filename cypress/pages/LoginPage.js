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
  
    verifyLoginSuccess(username) {
      cy.contains(`Welcome, ${username}`).should('be.visible');
    }
  
    verifyInvalidCredentialsError() {
      cy.contains('Invalid username or password').should('be.visible');
    }
  }
  
  export default LoginPage;
  