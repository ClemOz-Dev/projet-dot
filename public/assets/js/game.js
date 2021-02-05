console.log("App chargé");
const game = {
    countTour: 0,
    firstTourCard: "",

    init: function () {
        //console.log('method init ok');

        grid.distribute();
        game.cardFlip();
    },

    /**
     *  Gestion du flip des cartes + son handler
     */
    cardFlip: function () {
        let cards = document.querySelectorAll('.card');
        //console.log(cards);
        for (let card of cards) {
            card.addEventListener('click', game.handleCardFlip);
        }
    },
    handleCardFlip: function (event) {
        //console.log(game.countTour);
        let card = event.currentTarget;
        let cardFace = card.querySelector('div .card__face--back');
        cardFace = cardFace.className.split(' ').pop();;
        card.classList.toggle('is-flipped');
        if (game.countTour > 0) {
            game.checkMatch(cardFace);
        } else {
            game.countTour++;
            game.firstTourCard = cardFace;
        }
        //console.log(game.firstTourCard);
    },

    checkMatch: function (cardFace) {
        game.countTour = 0;
        let flippedCards = document.querySelectorAll('.is-flipped');
        if (cardFace == game.firstTourCard) {
            console.log('It\'s a match !');
            for (let flippedCard of flippedCards) {
                // console.log(flippedCard.firstElementChild);
                flippedCard.removeEventListener('click', game.handleCardFlip);
                flippedCard.firstElementChild.classList.add(cardFace);
                flippedCard.classList.remove('is-flipped');
                flippedCard.dataset.win++;
            };
            game.firstTourCard = "";
            game.isOver();
        } else {
            game.firstTourCard = "";
            for (let flippedCard of flippedCards) {
                setTimeout(function () {
                    flippedCard.classList.remove('is-flipped');
                }, 1000);
            }

        }
    },
    /**
     * Check if game is over
     */
    isOver: function () {
        let notYet = 0;
        let allCards = document.querySelectorAll('.card');
        for (let card of allCards) {
            console.log(card.dataset.win);
            if (card.dataset.win == 1) {
                notYet++;
            }
        }
        console.log(notYet);
        if (notYet === 0) {
            console.log('it\'s over !!!');
            document.querySelector('.win').style.display = "block";
        }

    }



}

document.addEventListener('DOMContentLoaded', game.init);