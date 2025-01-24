module.exports = {
    'Test de la page de classement': function (browser) {
        browser
            .url('http://localhost:3000/ranking')
            .waitForElementVisible('body', 5000)
            .assert.visible('.grid', 'La grille est est visible')
            .elements('css selector', '.grid > div', function (result) {
                browser.assert.strictEqual(result.value.length, 25, 'La grille contient exactement 25 cartes');
            })
            .end();
    }
};