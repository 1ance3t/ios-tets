exports.config = {
    user: process.env.BROWSERSTACK_USERNAME || '',
    key: process.env.BROWSERSTACK_ACCESS_KEY || '',

    updateJob: false,
    specs: [
        './IOS/tests/specs/app.fulltest1.spec.js',
    ],
    exclude: [],

    capabilities: [{
        "automationName": "XCUITest",
        "browserstack.appium_version" : "1.18.0",
        project: "First Webdriverio iOS Project",
        build: 'Webdriverio iOS',
        name: 'single_test',
        device: 'iPhone SE 2020',
        os_version: "13",
        app: process.env.BROWSERSTACK_APP_ID || "",
        'browserstack.debug': true,
        // autoDismissAlerts: true,
    }],

    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://the-internet.herokuapp.com',
    deprecationWarnings: true,
    bail: 0,
    coloredLogs: true,
    logLevel: 'silent',
    waitforTimeout: 50000,
    connectionRetryTimeout: 90000,
    connectionRetryCount: 3,
    framework: 'jasmine',
    jasmineNodeOpts: {
        // Updated the timeout to 30 seconds due to possible longer appium calls
        // When using XPATH
        defaultTimeoutInterval: 2500000,
        helpers: [require.resolve('@babel/register')],
    },
    // services: [
    //     [
    //         'appium',
    //         {
    //             // For options see
    //             // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             args: {
    //                 // For arguments see
    //                 // https://github.com/webdriverio/webdriverio/tree/master/packages/wdio-appium-service
    //             },
    //             command: 'appium',
    //         },
    //     ],
    // ],
    // port: 4723,


};
