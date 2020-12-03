import LoginAndReg from '../lib/ios/logininAndRegistration';
import LoginScreen from '../screenobjects/ios/login.screen';

describe('WebdriverIO and Appium, when interacting with a full test,', () => {
    it('The first screen should be Sign Up', () => {
        console.log('START: The first screen should be Sign Up');
        LoginAndReg.signUpScreen();
        console.log('END: The first screen should be Sign Up');
    });

    it('Sign Up don’t continue  with empty Mobile Number', () => {
        console.log('START: Sign Up don’t continue  with empty Mobile Number');
        LoginAndReg.signUpEmptyMobile();
        console.log('END: Sign Up don’t continue  with empty Mobile Number');
    });

    it('Sign Up don’t continue with exist phone number', () => {
        console.log('START: Sign Up don’t continue with exist phone number');
        LoginAndReg.signUpExistMobile();
        console.log('END: Sign Up don’t continue with exist phone number');
    });

    it('Sign Up don’t continue with incorrect Confirmation Code', () => {
        console.log('START: Sign Up don’t continue with incorrect Confirmation Code');
        LoginAndReg.signUpWrongCode();
        console.log('END: Sign Up don’t continue with incorrect Confirmation Code');
    });

    it('Sign Up don’t continue with empty Last name', () => {
        console.log('START: Sign Up don’t continue  with empty Last name');
        LoginAndReg.signUpEmptyLastName();
        console.log('END: Sign Up don’t continue  with empty Last name');
    });

    it('Sign Up don’t continue with empty First name', () => {
        console.log('START: Sign Up don’t continue  with empty First name');
        LoginAndReg.signUpEmptyFirstName();
        console.log('END: Sign Up don’t continue  with empty First name');
    });

    it('Sign Up don’t continue with empty PIN code', () => {
        console.log('START: Sign Up don’t continue  with empty PIN code');
        LoginAndReg.signUpEmptyPinCode();
        console.log('END: Sign Up don’t continue  with empty PIN code');
    });

    it('Sign Up don’t continue with empty PIN code', () => {
        console.log('START: Sign Up don’t continue  with empty PIN code');
        LoginAndReg.signUpWrongReenteringPinCode();
        console.log('END: Sign Up don’t continue  with empty PIN code');
    });

    it('Sign Up', () => {
        console.log('START: Sign Up');
        LoginAndReg.signUp();
        console.log('END: Sign Up');
    });

    it('On first launch the app, a screen appears with the choice of Sign In or Sign Up', () => {
        console.log('START: On first launch the app, a screen appears with the choice of Sign In or Sign Up');
        try {
            LoginScreen.loginSignUpBtn.click();
        } catch {}
        LoginAndReg.logOut();
        console.log('END: On first launch the app, a screen appears with the choice of Sign In or Sign Up');
    });

    it('Sign In don’t continue  with empty Mobile Number', () => {
        console.log('START: Sign In don’t continue  with empty Mobile Number');
        LoginAndReg.signInEmptyMobilePhone();
        console.log('END: Sign In don’t continue  with empty Mobile Number');
    });

    it('Sign In don’t continue with empty Pin code', () => {
        console.log('START: Sign In don’t continue with empty Pin code');
        LoginAndReg.signInEmptyPinCode();
        console.log('END: Sign In don’t continue with empty Pin code');
    });

    it('Sign In don’t continue with non-existent phone number', () => {
        console.log('START: Sign In don’t continue with non-existent phone number');
        LoginAndReg.signInNonExistNimber();
        console.log('END: Sign In don’t continue with non-existent phone number');
    });

    it('Sign In don’t continue with incorrect Pin Code', () => {
        console.log('START: Sign In don’t continue with incorrect Pin Code');
        LoginAndReg.signInIncorrectPinCode();
        console.log('END: Sign In don’t continue with incorrect Pin Code');
    });

    it('Sign In successfully', () => {
        console.log('START: Sign In successfully');
        LoginAndReg.signIn();
        console.log('END: Sign In successfully');
    });
});
