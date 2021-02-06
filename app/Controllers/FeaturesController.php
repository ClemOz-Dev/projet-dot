<?php

namespace App\Controllers;

class FeaturesController extends CoreController {

    public function list(){
        $this->show('features/list');
    }
}