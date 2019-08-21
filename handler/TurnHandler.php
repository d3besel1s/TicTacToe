<?php

include('../classes/Turn.php');

if (isset($_POST)) {
    $data = $_POST;
    $turn = new Turn();
    $turn->saveData($data);
}