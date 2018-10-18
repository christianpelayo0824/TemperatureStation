<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');
    header('Access-Control-Allow-Methods: POST');
    header('Access-Control-Allow-Headers: Access-Control-Allow-Headers,Content-Type,Access-Control-Allow-Methods, Authorization, X-Requested-With');

    include_once '../../config/Database.php';
    include_once '../../model/Temperature.php';

    $database = new Database();
    $db = $database->connect();

    $temp = new Temperature($db);
    
    $data = json_decode(file_get_contents("php://input", true));

    $temp->station = $data->station;
    $temp->temperature = $data->temperature;
    
    if($temp->createTemp()) {
        echo json_encode(
            array('message' => 'Post Created')
        );
    } else {
        echo json_encode(
            array('message' => 'Post Not Created')
        );
    }


