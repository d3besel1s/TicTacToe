<?php

require('../config.php');

class Database
{
    /**
     * Query to create the table
     */
    const DB_TABLE_INFO = [
        'turns' => 'CREATE TABLE Turns 
            (
                id INT NOT NULL AUTO_INCREMENT,
                GameId varchar(255),
                BoardStatus varchar(255),
                LastMove int(11),
                Player int(11),
                GameStatus varchar(255),
                PRIMARY KEY (id)
            )',
    ];

    /**
     * @var PDO
     */
    public $connection;

    /**
     * Database constructor
     */
    public function __construct()
    {
        try {
            $this->connection = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME, DB_USER, DB_PASSWORD);
            $this->connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            $this->checkIfTablesExist();
        } catch (PDOException $e) {
            echo "Database failed: ".$e->getMessage();
        }

    }

    /**
     * Creates table if it does not exist in database
     */
    public function checkIfTablesExist()
    {
        foreach (self::DB_TABLE_INFO as $tableName => $createSql) {
            try {
                $result = $this->connection->query('SELECT 1 FROM turns LIMIT 1');
            } catch (Exception $e) {
                $result = false;
            }

            if ($result === false) {
                $this->connection->exec($createSql);
            }
        }
    }
}

?>
