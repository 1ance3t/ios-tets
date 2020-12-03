import LoginScreen from "../../screenobjects/ios/login.screen";
import testData from "../../test.data.js"
import errorText from "../../error.messages"
import Random from "../../../../tests/screenobjects/components/random"
import constants from "../../constants"
const request = require("request-promise");
import ChatScreen from "../../screenobjects/ios/chat.screen";

export default class LoginAndReg {
    constructor() {
        this.rndName;
        this.login;
        this.password;
        this.regStatus;
        this.rndMobileNumber;
        this.pinCode;
        this.status;
    }

    static signUpRequest() {
        this.rndMobileNumber = `202112${Random.textNumbRandom(4)}`;
        console.log(`****** Phone: ${this.rndMobileNumber} ******`);
        LoginScreen.signUpPhoneInput.setValue(this.rndMobileNumber);
        LoginScreen.signUpNextBtn.click();
        LoginScreen.signUpTermsCheckbox.click();
        LoginScreen.signUpAcceptTermsBtn.click();

        browser.pause(5000);

        let smsCode = '';
        const options = {
            method: 'GET',
            uri: `${constants.verification_code}${this.rndMobileNumber}`,
        };
        request(options)
            .then(function (response) {
                const obj = JSON.parse(response);
                smsCode = obj.code;
            })
            .catch(function (err) {
                console.log(err);
            });

        browser.pause(10000);
        console.log(smsCode);
        LoginScreen.signUpCodeInput.setValue(smsCode);
        LoginScreen.signUpCodeNextBtn.click();
    }

    static signUpScreen() {
        try {
            LoginScreen.alert.pressButton("Allow")
        } catch {}

        expect(LoginScreen.signUpScreenTitle).toHaveText(testData.signUpTitle)
    }

    static signUpEmptyMobile() {
        LoginScreen.signUpBtn.click()
        LoginScreen.signUpNextBtn.click();
        expect(LoginScreen.signUpPhoneError).toHaveText(errorText.emptyPhone)
    }

    static signUpExistMobile() {
        LoginScreen.signUpPhoneInput.setValue(testData.exitNumber)
        LoginScreen.signUpNextBtn.click();
        expect(LoginScreen.signUpPhoneError).toHaveText(errorText.exitNumber)

    }

    static signUpWrongCode() {
        LoginScreen.signUpPhoneInput.setValue(Random.textNumbRandom(10))
        LoginScreen.signUpNextBtn.click();
        LoginScreen.signUpTermsCheckbox.click();
        LoginScreen.signUpAcceptTermsBtn.click();
        LoginScreen.signUpCodeInput.setValue(1111)

        LoginScreen.signUpCodeNextBtn.click();

        LoginScreen.alert.waitForIsShown();

        if (LoginScreen.alert.text() === errorText.codeInvalid) {
            LoginScreen.alert.pressButton("OK");
            return true;
        } else {
            return false;
        }
    }

    static signUpEmptyLastName() {
        LoginScreen.signUpConfirmCodeBackBtn.click();
        LoginScreen.signUpConfirmBackBtn.click();
        this.signUpRequest();
        LoginScreen.signUpSkipRefBtn.click()
        LoginScreen.signUpFirstNameInput.setValue(`Test ${Random.textNumbRandom(10)}`)
        LoginScreen.signUpNameConfirmBtn.click();
        expect(LoginScreen.signUpLastNameErrorText).toHaveText(errorText.lastNameEmpty);
    }

    static signUpEmptyFirstName() {
        LoginScreen.signUpFirstNameInput.clearValue()
        LoginScreen.signUpLastNameInput.setValue(`Test ${Random.textNumbRandom(10)}`)
        LoginScreen.signUpNameConfirmBtn.click();
        expect(LoginScreen.signUpFirstNameErrorText).toHaveText(errorText.lastNameEmpty);
    }

    static signUpEmptyPinCode() {
        LoginScreen.signUpFirstNameInput.setValue(`Test ${Random.textNumbRandom(10)}`);
        LoginScreen.signUpAccountConfirmBtn.click();
        LoginScreen.signUpPinCodeConfirmBtn.click();

        LoginScreen.alert.waitForIsShown();
        if (LoginScreen.alert.text() === errorText.emptyPinCode) {
            LoginScreen.alert.pressButton(`OK`);
            return true;
        } else {
            console.log(LoginScreen.alert.text())
            return false;
        }
    }

    static signUpWrongReenteringPinCode() {
        LoginScreen.signUpPinCodeInput.click();
        LoginScreen.signUpPinCodeInput.setValue(testData.defaultPin);
        LoginScreen.signUpPinCodeConfirmBtn.click();
        LoginScreen.signUpPinCodeInput.click();
        LoginScreen.signUpPinCodeInput.setValue("2222");
        LoginScreen.signUpPinCodeConfirmBtn.click();

        LoginScreen.alert.waitForIsShown();
        if (LoginScreen.alert.text() === errorText.emptySecondPinCode) {
            LoginScreen.alert.pressButton(`New Pin Code`);
            LoginScreen.signUpPinCodeBackBtn.click();
            LoginScreen.signUpAccoutnBackBtn.click();
            LoginScreen.signUpReferralBackBtn.click();
            LoginScreen.signUpConfirmCodeBackBtn.click();
            LoginScreen.signUpConfirmBackBtn.click();
            return true;
        } else {
            console.log(LoginScreen.alert.text())
            return false;
        }
    }

    static signUp() {
        try {
            LoginScreen.signUpBtn.click();
        } catch (error) {}

        this.signUpRequest();

        LoginScreen.signUpSkipRefBtn.click()
        LoginScreen.signUpFirstNameInput.setValue(`Test ${Random.textNumbRandom(10)}`)

        LoginScreen.signUpLastNameInput.setValue(`Test ${Random.textNumbRandom(10)}`)
        LoginScreen.signUpNameConfirmBtn.click();

        LoginScreen.signUpPinCodeInput.click();
        LoginScreen.signUpPinCodeInput.setValue(testData.defaultPin);
        LoginScreen.signUpPinCodeConfirmBtn.click();
        LoginScreen.signUpPinCodeInput.click();
        LoginScreen.signUpPinCodeInput.setValue(testData.defaultPin);
        LoginScreen.signUpPinCodeConfirmBtn.click();

        LoginScreen.signUpSkipFaceIDBtn.click();
        LoginScreen.signUpContinueProjectLinkBtn.click();

        if (LoginScreen.signUpContinueProjectLinkBtn) {
            try {
                LoginScreen.signUpContinueProjectLinkBtn.click();
            } catch {

            }
        }

        LoginScreen.signUpFinishProjectLinkBtn.click();
        LoginScreen.signUpLaterProjectLinkBtn.click();

        try {
            LoginScreen.signUpCollaborationSkipBtn.click();
        } catch {}

        ChatScreen.notificationsBtn.click();

        try {
            LoginScreen.signUpCollaborationSkipBtn.click();
        } catch {}

        expect(ChatScreen.welcomeNotificaion).toBeDisplayed()

        try {
            LoginScreen.signUpCollaborationSkipBtn.click();
        } catch {}

        ChatScreen.activityBtn.click();
    }

    static logOut() {
        ChatScreen.settingsBtn.click();
        ChatScreen.logOutBtn.click();
        ChatScreen.logOutBtn.click();
        expect(LoginScreen.signInTitle).toHaveText(testData.signInTitleText)
    }

    static signInEmptyMobilePhone() {
        LoginScreen.signInPinCodeInput.setValue(testData.defaultPin)
        LoginScreen.signInLoginBtn.click();

        expect(LoginScreen.signPhoneInputError).toHaveText(errorText.emptyPhone)
    }

    static signInEmptyPinCode() {
        LoginScreen.signInPinCodeInput.clearValue();
        LoginScreen.signInPhoneInput.setValue(testData.exitNumber)
        LoginScreen.signInLoginBtn.click();
        expect(LoginScreen.signPinCodeInputError).toHaveText(errorText.emptyPhone)
    }

    static signInNonExistNimber() {
        LoginScreen.signInPhoneInput.setValue(testData.exitNumber)
        LoginScreen.signInPinCodeInput.setValue(testData.defaultPin)
        LoginScreen.signInLoginBtn.click();

        LoginScreen.alert.waitForIsShown();
        if (LoginScreen.alert.text() === errorText.wrongPhoneOrPinCode) {
            LoginScreen.alert.pressButton(`OK`)
            return true;
        } else {
            console.log(LoginScreen.alert.text())
            return false;
        }
    }

    static signInIncorrectPinCode() {
        LoginScreen.signInPhoneInput.setValue(testData.exitNumber)
        LoginScreen.signInPinCodeInput.setValue("6969")
        LoginScreen.signInLoginBtn.click();

        LoginScreen.alert.waitForIsShown();
        if (LoginScreen.alert.text() === errorText.wrongPhoneOrPinCode) {
            LoginScreen.alert.pressButton(`OK`)
            return true;
        } else {
            console.log(LoginScreen.alert.text())
            return false;
        }
    }

    static signIn() {
        LoginScreen.signInPhoneInput.setValue(this.rndMobileNumber)
        LoginScreen.signInPinCodeInput.setValue(testData.defaultPin)
        LoginScreen.signInLoginBtn.click();
        expect(ChatScreen.activityBtn).toBeDisplayed();
    }
}
