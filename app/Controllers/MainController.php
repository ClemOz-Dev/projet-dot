<?php

namespace App\Controllers;

class MainController extends CoreController
{

    /**
     * Méthode s'occupant de la page d'accueil
     *
     * @return void
     */
    public function home()
    {
        $this->show('main/home');
    }

    public function cv()
    {
        $this->show('main/cv');
    }

    public function game()
    {
        $this->show('main/game');
    }
}
