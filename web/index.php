<?php

require('../vendor/autoload.php');

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;

$app = new Silex\Application();
$app['debug'] = true;

// Register the monolog logging service
$app->register(new Silex\Provider\MonologServiceProvider(), array(
  'monolog.logfile' => 'php://stderr',
));

// Our web handlers

$app->get('/', function() use($app) {
	 $app['monolog']->addDebug('logging output.');
    return file_get_contents('game.php');
});
$app->post('/', function(Request $request) use($app) {
  $app['monolog']->addDebug('logging output.');
    return file_get_contents('game.php');;
});
$app->get('/paymentCallback.php', function() use($app) {
  $app['monolog']->addDebug('logging output.');
    return new Response('paymentCallback.php');
});
$app->post('/paymentCallback.php', function(Request $request) use($app) {
  $app['monolog']->addDebug('logging output.');
    return new Response('paymentCallback.php');
});
$app->run();

?>