import LoginPage from '../pages/LoginPage';

describe('Login and Account Access', () => {
  const loginPage = new LoginPage();
  const userData = {
    username: 'testme123',
    password: 'Test@123'
  };

  it('should log in with valid credentials', () => {
    loginPage.visit();
    loginPage.fillOutLoginForm(userData.username, userData.password);
    loginPage.submitLogin();
    // loginPage.verifyLoginSuccess('John Doe');
  });

  // it('should show error for invalid credentials', () => {
  //   loginPage.visit();
  //   loginPage.fillOutLoginForm('wronguser', 'wrongpassword');
  //   loginPage.submitLogin();
  //   loginPage.verifyInvalidCredentialsError();
  // });
});
