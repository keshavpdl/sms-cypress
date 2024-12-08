class RegisterPage {
    visit() {
      cy.visit('/register/');
    }
  
    fillOutRegistrationForm(username, firstName, lastName, email, password, confirmpassword) {
      cy.get('#userNameInput').type(username);
      cy.get('#firstNameInput').type(firstName);
      cy.get('#lastNameInput').type(lastName);
      cy.get('#emailAddressInput').type(email);
      cy.get('#confirmEmailAddressInput').type(email);
      cy.get('#passwordInput').type(password);
      cy.get('#confirmPasswordInput').type(confirmpassword);
    }
  
    submitForm() {
      cy.get('button').contains('Register').click();
    }
  
    verifyRegistrationSuccess() {
      cy.contains('Account successfully created').should('be.visible');
    }
  
    verifyPasswordError() {
      cy.contains(' Passwords should be same and not empty').should('be.visible');
    }
  }
  
  export default RegisterPage;
  