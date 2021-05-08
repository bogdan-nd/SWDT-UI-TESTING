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
        browser.manage().window().setSize(1600,1000);
        await browser.waitForAngularEnabled(false);
    },
};