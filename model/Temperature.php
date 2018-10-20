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
            "INSERT INTO $this->table(station, temperature, timestamp) VALUES(:station, :temperature ,CURRENT_TIMESTAMP)"; 

        $stmt = $this->conn->prepare($query);

        $this->station = htmlspecialchars(strip_tags($this->station));
        $this->temperature = htmlspecialchars(strip_tags($this->temperature));

        $stmt->bindParam(':station', $this->station);
        $stmt->bindParam(':temperature', $this->temperature);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }

    public function deleteTempById() {
        $query = "DELETE FROM $this->table WHERE id = :id";
        $stmt = $this->conn->prepare($query);
        $this->id = htmlspecialchars(strip_tags($this->id));
        $stmt->bindParam(':id', $this->id);

        if($stmt->execute()) {
            return true;
        }
        return false;
    }


    public function getTempById() {
        $query = "SELECT * FROM $this->table WHERE id= :id";

        $stmt = $this->conn->prepare($query);

        $stmt->bindParam(':id', $this->id);

        $stmt->execute();

        $row = $stmt->fetch(PDO::FETCH_ASSOC);
        
        $this->id = $row['id'];
        $this->station = $row['station'];
        $this->temperature = $row['temperature'];
        $this->timestamp = $row['timestamp'];
    }

    
    public function updateTemp() {
        $query = "UPDATE $this->table SET station = :station, temperature = :temperature, timestamp = CURRENT_TIMESTAMP WHERE id = :id";
        $stmt = $this->conn->prepare($query);

        
        $this->id = htmlspecialchars(strip_tags($this->id));
        $this->station = htmlspecialchars(strip_tags($this->station));
        $this->temperature = htmlspecialchars(strip_tags($this->temperature));

        //$this->id = 270;
        //$this->station = 'A';

        $stmt->bindParam(':id', $this->id);
        $stmt->bindParam(':station', $this->station);
        $stmt->bindParam(':temperature', $this->temperature);

       
        if($stmt->execute()) {
            return true;
        }

        return false;
    }
    
}