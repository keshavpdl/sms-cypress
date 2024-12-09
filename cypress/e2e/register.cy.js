import { faker } from '@faker-js/faker';
import RegisterPage from '../pages/RegisterPage';

describe('Account Creation', () => {
  const registerPage = new RegisterPage();
    beforeEach(() => {
    registerPage.visit();
  });

  const userData = {
    username: faker.internet.username(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: `${faker.word.noun()}@mail.com`,
    confirmEmail: `${faker.word.noun()}@mail.com`,
    password: faker.internet.password(),
    confirmPassword: faker.internet.password()
  };
  

  it('should create an account with valid data', () => {
    registerPage.fillOutRegistrationForm(
      userData.username, 
      userData.firstName, 
      userData.lastName, 
      userData.email, 
      userData.email,
      userData.password,
      userData.password,
    );
    registerPage.submitForm();
    registerPage.verifyRegistrationSuccess();
  });

  it('should show error for mismatched passwords', () => {
    registerPage.fillOutRegistrationForm(
      userData.username, 
      userData.firstName, 
      userData.lastName, 
      userData.email, 
      userData.email,
      userData.password,
      userData.confirmPassword,
    );
    registerPage.submitForm();
    registerPage.verifyPasswordError();
  });

  it('Should Validate mandatory field error messages',()=>{
    registerPage.submitForm();
    registerPage.verifyPasswordError();
  });

  it('Should Validate email field with invalid data',()=>{
    registerPage.fillOutRegistrationForm(
      userData.username, 
      userData.firstName, 
      userData.lastName,
      'invalid@123',
      'invalid@123',
      userData.password,
      userData.password,
    );
    registerPage.submitForm();
    registerPage.verifyInvalidEmail();
  });

  it('Should Prevent registration with an already registered email',()=>{
    const existingEmail= 'equal@mail.com';

    registerPage.fillOutRegistrationForm(
      userData.username, 
      userData.firstName, 
      userData.lastName, 
      existingEmail,
      existingEmail,
      userData.password,
      userData.password,
    );
    registerPage.submitForm();
    registerPage.verifyUsernameEmailError();
  });

  it('Should Prevent duplicate username registration',()=>{
    const existingUsername='Reginald.Raynor';

    registerPage.fillOutRegistrationForm(
      existingUsername, 
      userData.firstName, 
      userData.lastName, 
      userData.email,
      userData.email,
      userData.password,
      userData.password,
    );
    registerPage.submitForm();
    registerPage.verifyUsernameEmailError();
  })

});
