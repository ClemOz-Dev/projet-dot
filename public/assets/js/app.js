console.log('Fichier App Chargé');
const app = {

    init: function () {
        home.init();
        // cv.cvDisplay();
    },

}

document.addEventListener('DOMContentLoaded', app.init);