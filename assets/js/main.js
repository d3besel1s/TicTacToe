$(function () {
    /**
     * Creates player objects with attributes
     */
    var Players = {
        playerOne: {
            symbol: 'X',
            class: 'player-one',
            number: 1,
            score: 0
        },
        playerTwo: {
            symbol: 'O',
            class: 'player-two',
            number: 2,
            score: 0
        }
    };
    /**
     * Initialized the first player and game id
     */
    var currentPlayer = Players.playerOne;
    var currentGameId = getGuid();

    /**
     * Draws corresponsing symbol on the game board and checks the game status
     */
    $('.cell').click(function () {
        if (this.innerHTML === '') {
            $(this).addClass(currentPlayer.class).append(currentPlayer.symbol);
            var lastMove = $(this).data('cell-no')
            checkTurn(lastMove);
        }
    });

    /**
     * Checks the turn for a win or a draw, and switches players
     */
    function checkTurn(lastMove) {
        var cells = getCells();

        if (checkRows(cells) || checkCols(cells) || checkDiag(cells))
            showEndScreen(true, cells, lastMove);
        else if (isFullBoard(cells))
            showEndScreen(false, cells, lastMove);
        else
            switchPlayer(cells, lastMove);
    }

    /**
     * Prints a message saying whether it is a win or a draw, and updates score
     */
    function showEndScreen(isGameWon, cells, lastMove) {
        if (isGameWon) {
            $('.message').text(`Player ${currentPlayer.number} has won!`);
            updateScore();
        } else {
            $('.message').text('Draw!');
        }
        $('.end-game-screen').show();
        saveTurnData(cells, lastMove, isGameWon);
    }

    /**
     * Switches the player but before saves the turn data
     */
    function switchPlayer(cells, lastMove) {
        saveTurnData(cells, lastMove, null);
        switch (currentPlayer) {
            case Players.playerOne:
                currentPlayer = Players.playerTwo;
                break;
            case Players.playerTwo:
                currentPlayer = Players.playerOne;
                break;
            default:
                console.log('Something went horribly wrong');
                break;
        }
    }

    /**
     * Sends a post message to the server with the turn data
     */
    function saveTurnData(cells, lastMove, isGameWon) {
        isGameWon = isGameWon === null ? 'Game in progress' : isGameWon ? 'A win' : 'A draw';
        var boardStatus = getBoardStatus(cells);
        $.post('../TicTacToe/handler/TurnHandler.php', {
            'GameId': currentGameId,
            'BoardStatus': boardStatus,
            'LastMove': lastMove,
            'Player': currentPlayer.number,
            'GameStatus': isGameWon
        });
    }

    /**
     * Gets values from the game board as a 2d array
     */
    function getCells() {
        var cells = []
        $('.cells').each(function () {
            var values = []
            for (var i = 0; i < this.children.length; i++)
                values.push(this.children[i].innerHTML);
            cells.push(values);
        });
        return cells;
    }

    /**
     * Checks for a horizontal win
     */
    function checkRows(cells) {
        if (cells.some(row => row.every(col => col === currentPlayer.symbol)))
            return true
        return false;
    }

    /**
     * Checks for a vertical win
     */
    function checkCols(cells) {
        for (var col = 0; col < cells[0].length; col++)
            if (cells[0][col] === currentPlayer.symbol &&
                cells[1][col] === currentPlayer.symbol &&
                cells[2][col] === currentPlayer.symbol)
                return true;
        return false;
    }

    /**
     * Checks for a diagonal win
     */
    function checkDiag(cells) {
        if (cells[0][0] === currentPlayer.symbol &&
            cells[1][1] === currentPlayer.symbol &&
            cells[2][2] === currentPlayer.symbol ||
            cells[0][2] === currentPlayer.symbol &&
            cells[1][1] === currentPlayer.symbol &&
            cells[2][0] === currentPlayer.symbol)
            return true;
        return false;
    }

    /**
     * Checks for a draw
     */
    function isFullBoard(cells) {
        return cells.every(row => row.every(col => col !== ''));
    }

    /**
     * Updates the score on the game screen
     */
    function updateScore() {
        currentPlayer.score++;
        $(`.${currentPlayer.class}-score`).text(currentPlayer.score);
    }

    /**
     * Takes 2d array and converts into a string
     */
    function getBoardStatus(cells) {
        var boardStatus = '';
        for (var i = 0; i < cells.length; i++) {
            for (var j = 0; j < cells[i].length; j++) {
                boardStatus += cells[i][j] + ';';
            }
        }
        return boardStatus;
    }

    /**
     * Restarts the board
     */
    $('.btn-restart').click(function () {
        $('.cell').each(function () {
            $(this).text('')
                .removeClass(Players.playerOne.class + ' ' + Players.playerTwo.class);
        });
        currentPlayer = Players.playerOne;
        currentGameId = getGuid();
        $('.end-game-screen').hide();
    });

    /**
     * Generates GUID
     * Source: https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
     */
    function getGuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0,
                v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
});
