<?php
class DB {
    private $servername = 'localhost';
    private $username = 'id13877536_waxiwaxis';
    private $password = 'UI*AB~)X\YlTa5Q5';
    private $dbname = 'id13877536_compareme';
    private $conn;

    public function __construct() {
        $this->conn = new mysqli($this->servername, $this->username, $this->password, $this->dbname);
    }

    public function getData($sql) {
        $result = $this->conn->query($sql);
        if($result->num_rows > 0){
            $dataArr = array();
            while ($row = $result->fetch_assoc()) {
                $rowArr = new stdClass();
                foreach ($row as $k=>$v) {
                    $rowArr->$k = $v;
                }
                $dataArr[] = $rowArr;
            }
            return $dataArr;
        }
        return false;
    }

    public function execute($sql) {
        return $this->conn->query($sql);
    }

    public function error() {
        return $this->conn->error;
    }

    public function error_no() {
        return $this->conn->errno;
    }

    public function escape($str) {
        return $this->conn->real_escape_string($str);
    }
}