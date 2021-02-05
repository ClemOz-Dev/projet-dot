<?php

require_once '../vendor/autoload.php';


//** ========================================= ROUTAGE =============================== **// 

$router = new AltoRouter();

if (array_key_exists('BASE_URI', $_SERVER)) {
    $router->setBasePath($_SERVER['BASE_URI']);
} else {
    $_SERVER['BASE_URI'] = '/';
}


//? --------- ROUTE PAGE D'ACCUEIL ---------- ?\\

$router->map(
    'GET',
    '/',
    [
        'method' => 'home',
        'controller' => '\App\Controllers\MainController'
    ],
    'main-home'
);

//? ---------- ROUTE PAGE DU CV ----------- ?\\

$router->map(
    'GET',
    '/cv',
    [
        'method' => 'cv',
        'controller' => '\App\Controllers\MainController'
    ],
    'main-cv'
);










//** =============================== DISPATCHING ====================== **// 

$match = $router->match();

$dispatcher = new Dispatcher($match, '\App\Controllers\ErrorController::err404');

$dispatcher->setControllersArguments($router);


$dispatcher->dispatch();