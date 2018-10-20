<?php

    header('Access-Controll-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../model/Temperature.php';
    include_once '../../config/Database.php';

    $database = new Database();
    $db = $database->connect();

    $temp =new Temperature($db);

    $temp->id = isset($_GET['id']) ? $_GET['id'] : die();

    $temp->getTempById();

    $temp_array = array(
        'id' => $temp->id,
        'station' => $temp->station,
        'temperature' => $temp->temperature,
        'timestamp' => $temp->timestamp
    );

    print_r(json_encode($temp_array));