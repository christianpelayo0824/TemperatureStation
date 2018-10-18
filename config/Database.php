<?php

class Database {

    private $SERVER = 'localhost';
    private $DB_NAME = 'temperatureStation';
    private $DB_USER = 'root';
    private $DB_PASS = '';
    private $conn;

    public function connect() {
        $this->conn = null;

        try{
            $this->conn = new 
                PDO(
                    'mysql:host=' . $this->SERVER . 
                    ';dbname=' . $this->DB_NAME, 
                    $this->DB_USER, 
                    $this->DB_PASS
                );
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            echo 'Connection Establish!';
        }catch(PDOException $e){
            echo 'Connection Error: ' .$e-getMessage(); 
        }
        return $this->conn;
    }
}