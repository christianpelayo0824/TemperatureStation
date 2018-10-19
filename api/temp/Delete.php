<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: DELETE');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../model/Temperature.php';
    include_once '../../config/Database.php';

    $database = new Database();
    $db = $database->connect();
    $temp = new Temperature($db);

    $data = json_decode(file_get_contents("php://input", true));

    $temp->id = $data->id;

    if($temp->deleteTempById()) {
        echo json_encode(
            array('Message: '=> 'Deleted')
        );
    }else {
        echo json_encode(
            array('Message: '=> 'Not Deleted')
        );
    }