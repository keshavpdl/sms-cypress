import { faker } from '@faker-js/faker';
import RegisterPage from '../pages/RegisterPage';

describe('Account Creation', () => {
  const registerPage = new RegisterPage();
  const userData = {
    username: faker.internet.username(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    confirmPassword: faker.internet.password()
  };
  

  it('should create an account with valid data', () => {
    registerPage.visit();
    registerPage.fillOutRegistrationForm(
      userData.username, 
      userData.firstName, 
      userData.lastName, 
      userData.email, 
      userData.password,
    );
    registerPage.submitForm();
    registerPage.verifyRegistrationSuccess();
  });

  // it('should show error for mismatched passwords', () => {
  //   registerPage.visit();
  //   registerPage.fillOutRegistrationForm(
  //     userData.username,
  //     userData.firstName,
  //     userData.lastName,
  //     userData.email,
  //     userData.password
  //   );
  //   cy.get('input[name="confirmpassword"]').type('Password123'); // Password mismatch
  //   registerPage.submitForm();
  //   registerPage.verifyPasswordError();
  // });
});
