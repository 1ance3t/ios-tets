import AppScreen from "../../../../tests/screenobjects/app.screen";

const SELECTORS = {
    NOTIFICATIONS_BTN: "//XCUIElementTypeButton[@name='Notifications']",
    ACTIVITY_BTN: "//XCUIElementTypeButton[@name='Activity']",
    WELCOME_NOTIFICATION: `~Welcome!`,
    SETTINGS_BTN: "//XCUIElementTypeButton[@name='Settings']",
    LOGOUT_BTN: `~Log out`,
    REQUEST_MONEY_BTN: `~Request money`,
    GO_TO_PROFILE_BTN: `~Go to Profile`,
    AGREEMENT_TABLE_VIEW: `~createAgreementTableView`,
    SEND_MONEY_BTN: `~chatHeaderViewRedUpButton`,
    FILTER_AGREEMENTS_BTN: "~icon filter",
    FILTER_NEW_CHECKBOX: "//XCUIElementTypeTable[@name=\"filterTableView\"]/XCUIElementTypeCell[1]",
    FILTER_DENIED_CHECKBOX: "//XCUIElementTypeTable[@name=\"filterTableView\"]/XCUIElementTypeCell[6]",
    FILTER_APPLY_BTN: "~Apply",
    CHAT_BTN: `~Chat`,
    CHAT_FIRST_FRIEND: "//XCUIElementTypeTable[@name=\"chatTableView\"]/XCUIElementTypeCell",
    CHAT_REQUEST_MONEY_BTN: "~chatHeaderViewGreenDownButton",
    CHAT_SEND_MONEY_BTN: "~chatHeaderViewRedUpButton",
    CHAT_SKIP_LABEL: `~onboardingChatViewSkipLabel`

};

class ChatScreen extends AppScreen {
    constructor() {
        super(SELECTORS.LOGIN_SCREEN);
    }

    get notificationsBtn() {
        return $(SELECTORS.NOTIFICATIONS_BTN);
    }

    get activityBtn() {
        return $(SELECTORS.ACTIVITY_BTN);
    }

    get settingsBtn() {
        return $(SELECTORS.SETTINGS_BTN);
    }

    get welcomeNotificaion() {
        return $(SELECTORS.WELCOME_NOTIFICATION);
    }

    get logOutBtn() {
        return $(SELECTORS.LOGOUT_BTN);
    }

    get requestMoneyBtn() {
        return $(SELECTORS.REQUEST_MONEY_BTN);
    }

    get goToProfileBtn() {
        return $(SELECTORS.GO_TO_PROFILE_BTN);
    }

    get createAgreementTableView() {
        return $(SELECTORS.AGREEMENT_TABLE_VIEW);
    }

    get sendMoneyBtn() {
        return $(SELECTORS.SEND_MONEY_BTN);
    }

    get filterAgreementsBtn() {
        return $(SELECTORS.FILTER_AGREEMENTS_BTN);
    }

    get filterNewCheckbox() {
        return $(SELECTORS.FILTER_NEW_CHECKBOX);
    }

    get filterDeniedCheckbox() {
        return $(SELECTORS.FILTER_DENIED_CHECKBOX);
    }

    get filterApplyBtn() {
        return $(SELECTORS.FILTER_APPLY_BTN);
    }

    get chatBtn() {
        return $(SELECTORS.CHAT_BTN);
    }

    get chatFirstFriend() {
        return $(SELECTORS.CHAT_FIRST_FRIEND);
    }

    get chatSkipBtn() {
        return $(SELECTORS.CHAT_SKIP_LABEL);
    }

    get chatRequestMoney() {
        return $(SELECTORS.CHAT_REQUEST_MONEY_BTN);
    }

    get chatSendMoney() {
        return $(SELECTORS.CHAT_SEND_MONEY_BTN);
    }
}

export default new ChatScreen();
