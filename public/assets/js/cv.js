const cv = {

    init: function () {
        cv.cvDisplay();
    },

    // home page display
    cvDisplay: function () {
        // clear the container
        let container = document.querySelector('.container');
        container.innerHTML = "";
        let cvContainer = document.createElement('div');
        cvContainer.classList.add('cvContainer');
        container.appendChild(cvContainer);

        // layout
        let topDiv = document.createElement('div');
        topDiv.classList.add('row--top');
        let midDiv = document.createElement('div');
        midDiv.classList.add('row--mid');
        let botDiv = document.createElement('div');
        botDiv.classList.add('row--bot');
        cvContainer.appendChild(botDiv);
        cvContainer.prepend(midDiv);
        cvContainer.prepend(topDiv);

        cv.content();
    },
    // insert cv's content
    content: function () {
        // TOP DIV
        let rowTop = document.querySelector('.row--top');
        // top div photo + name
        let myPhoto = document.createElement('div');
        myPhoto.classList.add('myPhoto');
        let myName = document.createElement('div');
        myName.classList.add('myName');
        myName.textContent = "Jay Padiday " + " Développeur junior fullstack";
        rowTop.appendChild(myPhoto);
        rowTop.appendChild(myName);

    }
}