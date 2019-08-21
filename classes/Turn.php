<?php

include('Database.php');

class Turn
{
    /**
     * @var PDO
     */
    public $connection;

    /**
     * Turn constructor
     */
    public function __construct()
    {
        $database = new Database();
        $this->connection = $database->connection;
    }

    /**
     * Saves the turn data to the database
     */
    public function saveData($data)
    {
        if($data){
            $sql = "INSERT INTO Turns (GameId, BoardStatus, LastMove, Player, GameStatus)
                    VALUES (:gameId, :boardStatus, :lastMove, :player, :gameStatus)";
                
            $stmt = $this->connection->prepare($sql);
            $stmt->execute(
                [
                ':gameId' => $data['GameId'],
                ':boardStatus' => $data['BoardStatus'],
                ':lastMove' => $data['LastMove'],
                ':player' => $data['Player'],
                ':gameStatus' => $data['GameStatus']
                ]
            );
        }
        $stmt = null;
    }
}
