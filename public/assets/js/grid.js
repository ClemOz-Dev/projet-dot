const grid = {
    /**
     * Randomly distribute cards backs
     */
    distribute: function () {

        let number = 0;
        for (let i = 0; i < 12; i++) {
            if (number == 6) {
                number = 0;
            }
            let allCardBacks = document.querySelectorAll("[data-status='0']");
            let randomNumber = allCardBacks[Math.floor(Math.random() * allCardBacks.length)];
            randomNumber.dataset.status = "1";
            number = parseInt(number) + 1;
            randomNumber.classList.add('back' + number);
        }

    },

}