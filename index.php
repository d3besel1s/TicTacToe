<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Tic Tac Toe</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="assets/css/gameboard.min.css">
</head>

<body>
    <div class="container">
        <div class="score d-flex flex-column align-items-center">
            <div class="player-one">
                Player 1 score:
                <span class="player-one-score">0</span>
            </div>
            <div class="player-two">
                Player 2 score:
                <span class="player-two-score">0</span>
            </div>
        </div>
        <div class="d-flex flex-column game-board">
            <div class="d-flex flex-row justify-content-center cells">
                <div class="cell" data-cell-no="0"></div>
                <div class="cell" data-cell-no="1"></div>
                <div class="cell" data-cell-no="2"></div>
            </div>
            <div class="d-flex flex-row justify-content-center cells">
                <div class="cell" data-cell-no="3"></div>
                <div class="cell" data-cell-no="4"></div>
                <div class="cell" data-cell-no="5"></div>
            </div>
            <div class="d-flex flex-row justify-content-center cells">
                <div class="cell" data-cell-no="6"></div>
                <div class="cell" data-cell-no="7"></div>
                <div class="cell" data-cell-no="8"></div>
            </div>
        </div>
        <div class="end-game-screen">
            <div class="d-flex flex-column align-items-center justify-content-center alert">
                <span class="message"></span>
                <button class="btn-restart btn btn-light">Restart</button>
            </div>
        </div>
    </div>
    <script src="https://code.jquery.com/jquery-3.4.1.min.js"
        integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo=" crossorigin="anonymous">
    </script>
    <script src="assets/js/main.min.js"></script>
</body>

</html>