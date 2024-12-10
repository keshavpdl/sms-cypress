import LoginPage from '../pages/LoginPage';
import { faker } from '@faker-js/faker';


describe('Login and Account Access', () => {
  const loginPage = new LoginPage();
  beforeEach(() => {
    loginPage.visit();
  });
  const userData = {
    username: 'testme123',
    password: 'Test@123',
    invalidUsername: faker.internet.username(),
    invalidPassword: 'Passw@rd',
    email: 'testme123@tafmail.com'
  };

  it('Should Validate mandatory field error messages', () => {
    loginPage.submitLogin();
    loginPage.verifyEmptyCredentialsError();
  });

  it('Should log in with valid credentials', () => {
    loginPage.fillOutLoginForm(
      userData.username,
      userData.password
    );
    loginPage.submitLogin();
    loginPage.verifyLoginSuccess();
  });

  it('should Validate username field with invalid data', () => {
    loginPage.fillOutLoginForm(
      userData.invalidUsername,
      userData.password,
    );
    loginPage.submitLogin();
    loginPage.verifyInvalidUsernameError(userData.invalidUsername);
  });

  it('should Validate password field with invalid data', () => {
    loginPage.fillOutLoginForm(
      userData.username,
      userData.invalidPassword,
    );
    loginPage.submitLogin();
    loginPage.verifyInvalidPasswordError(userData.username);
  });
  
  it('Should Sign in with valid Email',()=>{
    loginPage.fillOutLoginForm(
      userData.email,
      userData.password
    );
    loginPage.submitLogin();
    loginPage.verifyLoginSuccess();
  })
});
