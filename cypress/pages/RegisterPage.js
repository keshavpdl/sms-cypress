class RegisterPage {
    visit() {
      cy.visit('/register/');
    }
  
    fillOutRegistrationForm(username, firstName, lastName, email,confirmEmail, password, confirmPassword) {
      cy.get('#userNameInput').type(username);
      cy.get('#firstNameInput').type(firstName);
      cy.get('#lastNameInput').type(lastName);
      cy.get('#emailAddressInput').type(email);
      cy.get('#confirmEmailAddressInput').type(confirmEmail);
      cy.get('#passwordInput').type(password);
      cy.get('#confirmPasswordInput').type(confirmPassword);
    }
  
    submitForm() {
      cy.get('button').contains('Register').click();
    }
  
    verifyRegistrationSuccess() {
      cy.url().should('include', '/login'); // Check if redirected to the login page
      cy.contains('Sign In').should('be.visible'); // Verify 'Sign In' text is displayed on login page
    }
  
    verifyPasswordError() {
      cy.contains(' Passwords should be same and not empty').should('be.visible');
    }

    verifyInvalidEmail(){
      cy.contains('ERROR: Please enter a valid confrim email.').should('be.visible')
    }

    verifyUsernameEmailError(){
      cy.contains('ERROR: Username or email already exists. Please try another one.').should('be.visible')
    }
    
  }
  
  export default RegisterPage;
  