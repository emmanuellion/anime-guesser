module.exports = {
    'Test de la page de recherche d\'anime': function (browser) {
        browser
            .url('http://localhost:3000/anime')
            .waitForElementVisible('body', 5000)
            .assert.visible('input', 'La barre de recherche est visible')
            .setValue('input', 'ReLIFE')
            .pause(1500)
            .assert.visible('.grid', 'La grille est visible')
            .elements('css selector', '.grid > .ant-card', function (result) {
                browser.assert.textContains(result.value[0], 'ReLIFE');
            })
            .end();
    }
};