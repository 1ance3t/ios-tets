import AppScreen from "../../../../tests/screenobjects/app.screen";
import NativeAlert from "../../helpers/NativeAlert"

const SELECTORS = {
    SIGN_UP_SCREEN: "//XCUIElementTypeStaticText[@name='Guaranteed Funds, Guaranteed Pay Days']",
    SIGN_UP_BTN: "//XCUIElementTypeButton[@name='Sign Up']",
    SIGN_UP_PHONE_FILED: "//XCUIElementTypeTextField[@name='signUpPhoneNumberPhone']",
    SIGN_UP_NEXT_BTN: "//XCUIElementTypeButton[@name='Stage']",
    SIGN_UP_PHONE_ERROR_TEXT: "//XCUIElementTypeStaticText[@name='signUpPhoneNumberErrorLabel']",
    SIGN_UP_TERMS_CHECKBOX: "//XCUIElementTypeOther[@name='termsContainerForCheckBox']",
    SIGN_UP_CODE_INPUT: "//XCUIElementTypeTextField[@name='confirmCodeConfirmCodeField']",
    SIGN_UP_CODE_NEXT_BTN: "//XCUIElementTypeButton[@name='confirmCodeNextButton']",
    SIGN_UP_CODE_WARNING_ALERT: "//XCUIElementTypeStaticText[@name='Verification code is invalid']",
    SIGN_UP_CODE_WARNING_ALERT_OK_BTN: '//XCUIElementTypeButton[@name=\"OK\"]',
    SIGN_UP_ACCEPT_TERMS_BTN: "//XCUIElementTypeButton[@name='termsAcceptButton']",
    SIGN_UP_SKIP_REFERRAL_BTN: `~Skip`,
    SIGN_UP_FIRST_NAME_INPUT: "//XCUIElementTypeTextField[@name='accountSignUpFirstName']",
    SIGN_UP_LAST_NAME_INPUT: "//XCUIElementTypeTextField[@name='accountSignUpLastName']",
    SIGN_UP_NAME_CONFIRM_BTN: "//XCUIElementTypeButton[@name='accountSignUpNextButton']",
    SIGN_UP_FIRST_NAME_ERROR: "//XCUIElementTypeStaticText[@name='accountSignUpFirstNameErrorLabel']",
    SIGN_UP_LAST_NAME_ERROR: "//XCUIElementTypeStaticText[@name='accountSignUpLastNameErrorLabel']",
    SIGN_UP_CONFIRM_BACK_BTN: "//XCUIElementTypeButton[@name='backButton']",
    SIGN_UP_CONFIRM_CODE_BACK_BTN: "//XCUIElementTypeButton[@name='confirmCodeBackButton']",
    SIGN_UP_REFERRAL_INPUT: "//XCUIElementTypeTextField[@name='referalReferalCode']",
    SIGN_UP_ACCOUNT_BACK_BUTTON: "//XCUIElementTypeButton[@name='accountSignUpBackButton']",
    SIGN_UP_ACCOUNT_CONFIRM_BTN: "//XCUIElementTypeButton[@name='accountSignUpNextButton']",
    SIGN_UP_PIN_CODE_CONFIRM_BTN: "//XCUIElementTypeButton[@name='pinCodeConfirmButton']",
    SIGN_UP_PIN_CODE_WARNING_ALERT: `~Enter full Pin Code`,
    SIGN_UP_PIN_CODE_WARNING_ALERT_ACCEPT_BTN: `~OK`,
    SIGN_UP_PIN_CODE_INPUT: "//XCUIElementTypeSecureTextField",
    SIGN_UP_SKIP_FACE_ID_BTN: `~No, thanks`,
    SIGN_UP_CONTINUE_PROJECT_LINK_BTN: `~Continue`,
    SIGN_UP_FINISH_PROJECT_LINK_BTN: `~Finish`,
    SIGN_UP_LATER_PROJECT_LINK_BTN: `~I will do it later.`,
    SIGN_UP_COLLABORATIONS_SKIP_BTN: "//XCUIElementTypeImage[@name='onboardingViewSkipIcon']",
    SIGN_UP_PIN_CODE_BACK_BTN: "//XCUIElementTypeButton[@name='pinCodeBackButton']",
    SIGN_UP_REFERRAL_BACK_BTN: "//XCUIElementTypeButton[@name='referalBackButton']",
    SIGN_IN_TITLE: `//XCUIElementTypeStaticText[@name='loginTitileLabel']`,
    SIGN_IN_PHONE_INPUT: `~Mobile number`,
    SIGN_IN_PIN_CODE_INPUT: `~loginPinCode`,
    SIGN_IN_LOGIN_BTN: `~Log in`,
    SIGN_IN_PHONE_INPUT_ERROR: `~loginPhoneErrorLabel`,
    SIGN_IN_PIN_CODE_INPUT_ERROR: `~loginPinCodeErrorLabel`,
    SIGN_IN_FORGOT_PIN_BTN: `~Forgot your PIN?`,
    RECOVER_PIN_CODE_PHONE_FIELD: `~recoverPincodePhoneField`,
    RECOVER_PIN_CODE_BTN: `~Recover my PIN`,
    RECOVER_PIN_CODE_INPUT: `~receiveSmsConfirmationCode`,
    RECOVER_PIN_CODE_CONFIRM_BTN: `~Confirm`,
    RECOVER_PIN_CODE_CONFIRM_CODE_BTN: `~Confirm`,
    RECOVER_PIN_CODE_PIN_CODE_INPUT: "//XCUIElementTypeSecureTextField",
    RECOVER_PIN_CODE_CONFIRM_PIN_CODE_BTN: `~Confirm`,
    RECOVER_PIN_CODE_BACK_BTN: "~blackBackButton",
    LOGOUT_CANCEL_BTN: `//XCUIElementTypeApplication[@name="Stage"]/XCUIElementTypeWindow[1]/XCUIElementTypeOther/XCUIElementTypeAlert/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]/XCUIElementTypeScrollView[2]/XCUIElementTypeOther[1]/XCUIElementTypeOther/XCUIElementTypeOther[1]`,
    LOGIN_SIGNUP_BTN: `//*[contains(text(), ‘Sing up!’)]`,
    SIGN_IN_BUTTON: `//XCUIElementTypeStaticText[@name='Sign In']`,


};

class LoginScreen extends AppScreen {
    constructor() {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get alert() {
        return NativeAlert;
    }

    get signUpScreenTitle() {
        return $(SELECTORS.SIGN_UP_SCREEN);
    }

    get signUpBtn() {
        return $(SELECTORS.SIGN_UP_BTN);
    }

    get signUpPhoneInput() {
        return $(SELECTORS.SIGN_UP_PHONE_FILED);
    }

    get signUpNextBtn() {
        return $(SELECTORS.SIGN_UP_NEXT_BTN);
    }

    get signUpPhoneError() {
        return $(SELECTORS.SIGN_UP_PHONE_ERROR_TEXT);
    }

    get signUpTermsCheckbox() {
        return $(SELECTORS.SIGN_UP_TERMS_CHECKBOX);
    }

    get signUpCodeInput() {
        return $(SELECTORS.SIGN_UP_CODE_INPUT);
    }

    get signUpCodeNextBtn() {
        return $(SELECTORS.SIGN_UP_CODE_NEXT_BTN);
    }

    get signUpCodeWarningAlert() {
        return $(SELECTORS.SIGN_UP_CODE_WARNING_ALERT);
    }

    get signUpCodeWarningAlertOkBtn() {
        return $(SELECTORS.SIGN_UP_CODE_WARNING_ALERT_OK_BTN);
    }

    get signUpAcceptTermsBtn() {
        return $(SELECTORS.SIGN_UP_ACCEPT_TERMS_BTN);
    }

    get signUpSkipRefBtn() {
        return $(SELECTORS.SIGN_UP_SKIP_REFERRAL_BTN);
    }

    get signUpFirstNameInput() {
        return $(SELECTORS.SIGN_UP_FIRST_NAME_INPUT);
    }

    get signUpLastNameInput() {
        return $(SELECTORS.SIGN_UP_LAST_NAME_INPUT);
    }

    get signUpNameConfirmBtn() {
        return $(SELECTORS.SIGN_UP_NAME_CONFIRM_BTN);
    }

    get signUpFirstNameErrorText() {
        return $(SELECTORS.SIGN_UP_FIRST_NAME_ERROR);
    }

    get signUpLastNameErrorText() {
        return $(SELECTORS.SIGN_UP_LAST_NAME_ERROR);
    }

    get signUpConfirmBackBtn() {
        return $(SELECTORS.SIGN_UP_CONFIRM_BACK_BTN);
    }

    get signUpConfirmCodeBackBtn() {
        return $(SELECTORS.SIGN_UP_CONFIRM_CODE_BACK_BTN);
    }

    get signUpReferralCodeInputy() {
        return $(SELECTORS.SIGN_UP_REFERRAL_INPUT);
    }

    get signUpAccoutnBackBtn() {
        return $(SELECTORS.SIGN_UP_ACCOUNT_BACK_BUTTON);
    }

    get signUpAccountConfirmBtn() {
        return $(SELECTORS.SIGN_UP_ACCOUNT_CONFIRM_BTN);
    }

    get signUpPinCodeConfirmBtn() {
        return $(SELECTORS.SIGN_UP_PIN_CODE_CONFIRM_BTN);
    }

    get signUpPinCodeWarningAlert() {
        return $(SELECTORS.SIGN_UP_PIN_CODE_WARNING_ALERT);
    }

    get signUpPinCodeWarningAlertOkBtn() {
        return SELECTORS.SIGN_UP_PIN_CODE_WARNING_ALERT_ACCEPT_BTN;
    }

    get signUpPinCodeInput() {
        return $(SELECTORS.SIGN_UP_PIN_CODE_INPUT);
    }

    get signUpPinCodeConfirmBtn() {
        return $(SELECTORS.SIGN_UP_PIN_CODE_CONFIRM_BTN);
    }

    get signUpSkipFaceIDBtn() {
        return $(SELECTORS.SIGN_UP_SKIP_FACE_ID_BTN);
    }

    get signUpContinueProjectLinkBtn() {
        return $(SELECTORS.SIGN_UP_CONTINUE_PROJECT_LINK_BTN);
    }

    get signUpFinishProjectLinkBtn() {
        return $(SELECTORS.SIGN_UP_FINISH_PROJECT_LINK_BTN);
    }

    get signUpLaterProjectLinkBtn() {
        return $(SELECTORS.SIGN_UP_LATER_PROJECT_LINK_BTN);
    }

    get signUpCollaborationSkipBtn() {
        return $(SELECTORS.SIGN_UP_COLLABORATIONS_SKIP_BTN);
    }

    get signUpPinCodeBackBtn() {
        return $(SELECTORS.SIGN_UP_PIN_CODE_BACK_BTN);
    }

    get signUpReferralBackBtn() {
        return $(SELECTORS.SIGN_UP_REFERRAL_BACK_BTN);
    }

    get signInTitle() {
        return $(SELECTORS.SIGN_IN_TITLE);
    }

    get signInPhoneInput() {
        return $(SELECTORS.SIGN_IN_PHONE_INPUT)
    }

    get signInPinCodeInput() {
        return $(SELECTORS.SIGN_IN_PIN_CODE_INPUT)
    }

    get signInLoginBtn() {
        return $(SELECTORS.SIGN_IN_LOGIN_BTN)
    }

    get signPhoneInputError() {
        return $(SELECTORS.SIGN_IN_PHONE_INPUT_ERROR)
    }

    get signPinCodeInputError() {
        return $(SELECTORS.SIGN_IN_PIN_CODE_INPUT_ERROR)
    }

    get singInForgotPinBtn() {
        return $(SELECTORS.SIGN_IN_FORGOT_PIN_BTN)
    }

    get recoverPinCodePhoneField() {
        return $(SELECTORS.RECOVER_PIN_CODE_PHONE_FIELD)
    }

    get recoverPinCodeBtn() {
        return $(SELECTORS.RECOVER_PIN_CODE_BTN)
    }

    get recoverPinCodeInput() {
        return $(SELECTORS.RECOVER_PIN_CODE_INPUT)
    }

    get recoverPinCodeConfirmBtn() {
        return $(SELECTORS.RECOVER_PIN_CODE_CONFIRM_BTN)
    }

    get recoverPinCodeConfirmCodeBtn() {
        return $(SELECTORS.RECOVER_PIN_CODE_CONFIRM_CODE_BTN)
    }

    get recoverPinCodePinCodeInput() {
        return $(SELECTORS.RECOVER_PIN_CODE_PIN_CODE_INPUT)
    }

    get recoverPinCodePinCodeConfirmBtn() {
        return $(SELECTORS.RECOVER_PIN_CODE_CONFIRM_PIN_CODE_BTN)
    }

    get recoverPinCodeBackBtn() {
        return $(SELECTORS.RECOVER_PIN_CODE_BACK_BTN)
    }

    get logoutCancelBtn() {
        return $(SELECTORS.LOGOUT_CANCEL_BTN)
    }

    get loginSignUpBtn() {
        return $(SELECTORS.LOGIN_SIGNUP_BTN)
    }

    get signInButton() {
        return $(SELECTORS.SIGN_IN_BUTTON)
    }
}

export default new LoginScreen();
