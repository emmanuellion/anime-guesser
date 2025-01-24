module.exports = {
    'Test de la page de recherche de personnage': function (browser) {
        browser
            .url('http://localhost:3000/character')
            .waitForElementVisible('body', 5000)
            .assert.visible('input', 'La barre de recherche est visible')
            .setValue('input', 'Eren Yeager')
            .pause(1500)
            .assert.visible('.grid', 'La grille est visible')
            .elements('css selector', '.grid > .flex', function (result) {
                browser.assert.textContains(result.value[0], 'Eren Yeager');
            })
            .end();
    }
};