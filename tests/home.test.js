module.exports = {
    'Test de la page d\'accueil': function (browser) {
        browser
            .url('http://localhost:3000/')
            .waitForElementVisible('body', 5000)
            .assert.visible('.w-screen', 'Le div principal est visible')
            .elements('css selector', '.w-screen > button', function (result) {
                browser.assert.strictEqual(result.value.length, 3, 'Le div contient exactement 3 boutons');
            })
            .end();
    }
};