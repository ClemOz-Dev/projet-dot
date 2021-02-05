const cv = {

    init: function () {
        
        cv.backButton();
    },

    backButton: function(){
        let button = document.querySelector('.back');
       //console.log(button);
        button.addEventListener('click', cv.handleClick);
    },

    handleClick: function(event){
        let button = event.currentTarget;        
        //redirection home page
       
        document.location.href="http://localhost/perso/projet-dot/public";
    }

    

}