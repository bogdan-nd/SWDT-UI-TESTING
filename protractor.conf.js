exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    // require feature files
    specs: [
        './features/*.feature'
    ],
    cucumberOpts: {
        // require step definitions
        require: [
            './tests/*.js' // accepts a glob
        ]
    },
    onPrepare: async () => {
        browser.driver.manage().window().maximize();
        await browser.waitForAngularEnabled(false);
    },
};