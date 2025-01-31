module.exports = {
    'Test de la page d\'accueil': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body', 5000)
            .assert.visible('.w-screen', 'Le div principal est visible')
            .end();
    }
};
