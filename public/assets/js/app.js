console.log('Fichier App Chargé');
const app = {

    init: function () {
       
        if (document.getElementById('game-container')){
           game.init();
        } 

    },

}

document.addEventListener('DOMContentLoaded', app.init);