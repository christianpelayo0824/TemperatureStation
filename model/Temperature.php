<?php

class Temperature {
    
    //Config
    private $conn;
    private $table = 'temperature';

    //Properties
    public $id;
    public $station;
    public $temperature;
    public $timestamp;

    public function __construct($db) {
        $this->conn = $db;
    }

    //GET
    public function getTemperature() {
        $query = 'SELECT * FROM ' . $this->table;         
        $stmt = $this->conn->prepare($query);
        $stmt->execute();
        return $stmt;
    }

    public function createTemp() {
        $query = 
            "INSERT INTO temperature(station, temperature, timestamp) VALUES(:station, :temperature ,CURRENT_TIMESTAMP)"; 

        $stmt = $this->conn->prepare($query);

        $this->station = htmlspecialchars(strip_tags($this->station));
        $this->temperature = htmlspecialchars(strip_tags($this->temperature));

        echo $this->station;
        echo $this->temperature;

        $stmt->bindParam(':station', $this->station);
        $stmt->bindParam(':temperature', $this->temperature);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function getTempById() {
        
    }
}