<?php
require 'database.php';
require 'Slim/Slim.php';
\Slim\Slim::registerAutoloader();

$db = new Database();
$app = new \Slim\Slim();
$app->setName('ParimeoFlappResources');
$app->config('cookies.lifetime', '1 minutes');
$app->config('cookies.path', '/');

$authorize = function (\Slim\Route $route) use ($app, $db) {
	$token = $app->getCookie("XSRF-TOKEN");
	if ($token) {
# TODO CHanf: Hier habe ich mit einen Auth-Token (Cookie) herumexperimentiert.
#		echo "Token: ".$token;
	} else {
#		$app->halt(403);
#		echo "App halted! 403";
	}
};

$app->get('/setCookie', function () use ($app, $db) {
	$app->setCookie("XSRF-TOKEN", "who are you :) ?");
	echo "Cookie set!";
});

$app->get('/delCookie', function () use ($app, $db) {
	$app->deleteCookie("XSRF-TOKEN");
	echo "Cookie deleted!";
});

$app->get('/', function () {
        $template = <<<EOT
<!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8"/>
            <title>Parimeo FLAPP ReST</title>
        </head>
        <body>
            <h1>Parimeo FLAPP Representational State Transfer</h1>
            <ul>
                <li><a href="#">TODO Routen auflisten!</a></li>
            </ul>
        </body>
    </html>
EOT;
        echo $template;
    });

# ===================================================================
# Sonstiges
# ===================================================================

$app->options('/:path+', function() use ($app, $db) {
	$app->response->headers->set('Allow', 'GET,POST,PUT,DELETE,OPTIONS');
});

# ===================================================================
# Berater - Consultant
# ===================================================================

$app->get('/consultants', $authorize, function() use ($app, $db) {
	$app->response->headers->set('Content-Type', 'application/json');
	$consultants = $db->selectQuery("select id, pictureid, fullname, start, locations, keyskills, address, address_billing, shortdescription, email, mobile, phone, fax from consultant where isnull(deleted)");
	echo json_encode($consultants);
});

$app->get('/consultants/:id', function($id) use ($app, $db) {
	$app->response->headers->set('Content-Type', 'application/json');
	$consultant = $db->selectQuery("select id, pictureid, fullname, start, locations, keyskills, address, address_billing, shortdescription, email, mobile, phone, fax from consultant where id='".$db->escape($id)."'");
	echo json_encode($consultant);
});

$app->post('/consultants', $authorize, function() use ($app, $db) {
	$data = $app->request->getBody();
	$values = array();
	$consultant = json_decode($data, TRUE);
//	$consultants = json_decode($data, TRUE);
//	foreach ($consultants as $consultant)
		$values[] = "('".$db->escape($consultant["fullname"])."', '".$db->escape($consultant["start"])."', '".$db->escape($consultant["locations"])."', '".$db->escape($consultant["keyskills"])."', '".$db->escape($consultant["address"])."', '".$db->escape($consultant["address_billing"])."', '".$db->escape($consultant["shortdescription"])."', '".$db->escape($consultant["email"])."', '".$db->escape($consultant["mobile"])."', '".$db->escape($consultant["phone"])."', '".$db->escape($consultant["fax"])."')";
	$db->modifyQuery("insert into consultant (fullname, start, locations, keyskills, address, address_billing, shortdescription, email, mobile, phone, fax) values ".implode(",", $values));
});

$app->put('/consultants', $authorize, function() use ($app, $db) {
	$data = $app->request->getBody();
	$consultant = json_decode($data, TRUE);
//	$consultants = json_decode($data, TRUE);
//	foreach ($consultants as $consultant) 
		$db->modifyQuery("update consultant set fullname='".$db->escape($consultant["fullname"])."', start='".$db->escape($consultant["start"])."', locations='".$db->escape($consultant["locations"])."', keyskills='".$db->escape($consultant["keyskills"])."', address='".$db->escape($consultant["address"])."', address_billing='".$db->escape($consultant["address_billing"])."', shortdescription='".$db->escape($consultant["shortdescription"])."', email='".$db->escape($consultant["email"])."', mobile='".$db->escape($consultant["mobile"])."', phone='".$db->escape($consultant["phone"])."', fax='".$db->escape($consultant["fax"])."' where id='".$db->escape($consultant["id"])."'");
});

$app->delete('/consultants/:id', $authorize, function($id) use ($app, $db) {
	$db->modifyQuery("update consultant set deleted = now() where id='".$db->escape($id)."'");
});

# ===================================================================
# Lebenslauf - CV
# ===================================================================

$app->get('/cvs', function() use ($app, $db) {
	$app->response->headers->set('Content-Type', 'application/json');
	$cvs = $db->selectQuery("select id, idconsultant, title, description from cv");
	echo json_encode($cvs);
});

$app->get('/cvs/:id', function($id) use ($app, $db) {
	$app->response->headers->set('Content-Type', 'application/json');
	$cv = $db->selectQuery("select id, idconsultant, title, description from cv where id='".$db->escape($id)."'");
	echo json_encode($cv);
});

$app->get('/consultants/:id/cvs', function($id) use ($app, $db) {
	$app->response->headers->set('Content-Type', 'application/json');
	$cvs = $db->selectQuery("select id, idconsultant, title, description from cv where idconsultant='".$db->escape($id)."'");
	echo json_encode($cvs);
});

$app->post('/cvs', $authorize, function() use ($app, $db) {
	$data = $app->request->getBody();
    $values = array();
	$cv = json_decode($data, TRUE);
//	$cvs = json_decode($data, TRUE);
//	foreach ($cvs as $cv)
		$values[] = "('".$db->escape($cv["title"])."', '".$db->escape($cv["description"])."')";
	$db->modifyQuery("insert into cv (idconsultant, title, description) values ".implode(",", $values));
});

$app->put('/cvs', $authorize, function() use ($app, $db) {
	$data = $app->request->getBody();
	$cv = json_decode($data, TRUE);
//	$cvs = json_decode($data, TRUE);
//	foreach ($cvs as $cv) 
		$db->modifyQuery("update cv set idconsultant='".$db->escape($cv["idconsultant"])."', set title='".$db->escape($cv["title"])."', description='".$db->escape($cv["description"])."' where id='".$db->escape($cv["id"])."'");
});

$app->delete('/cvs/:id', $authorize, function($id) use ($app, $db) {
	$db->modifyQuery("delete from cv where id='".$db->escape($id)."'");
});

# ===================================================================
# Applikation
# ===================================================================

$app->run();
?>