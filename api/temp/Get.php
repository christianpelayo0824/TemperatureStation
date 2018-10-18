<?php

    header('Access-Control-Allow-Origin: *');
    header('Content-Type: application/json');

    include_once '../../config/Database.php';
    include_once '../../model/Temperature.php';

    //Connection
    $database = new Database();
    $db = $database->connect();
    //Instantiate Temp
    $temperature = new Temperature($db);
    $result = $temperature->getTemperature();
    $num =  $result->rowCount();
    
    if($num > 0) {
        $temp_array = array();
        $temp_array ['data'] = array();

        while($row = $result->fetch(PDO::FETCH_ASSOC)) {
            extract($row);
            $temp_item = array(
                'id' => $id,
                'station' => $station,
                'temperature' => $temperature,
                'timestamp' => $timestamp,
            );
            array_push($temp_array['data'], $temp_item);
        }
        echo json_encode($temp_array);
    }else {
        // No Categories
        echo json_encode(
          array('message' => 'No Categories Found')
        );
     }

