## TicTacToe
A web based game of tic tac toe

The idea was to create a web based tic tac toe game and to save the data in the database so that it could be fed to a machine learning algorithm.

First, the game's layout was created with HTML and the game was styled with CSS. Later, the interactivity, functionality and data flow were created with JavaScript. The game starts by creating two players and assigning a corresponding symbol. The program checks whether there is a win or a draw after each turn a player makes. If there is a win or a draw the program displays a table with the status and displays a restart button which clears the game board and restarts the game. If there is a win, the program updates the players' scores. 
The connection to the MySQL database was created using PHP. As the idea was to save the data for a machine learning algorithm, the decision was made to save the data after each turn of each player. To be able to collect the data for one game, a GUID identifier is generated for each game. After establishing a database connection, the decisions of which kind of data needs to be saved were made.

#### Running the program

The MySQL database connection is made with PHP. In order to run the program a PHP development environment is required, such as XAMMP, MAMP or AMPPS. Instructions how to set up AMPPS and to run the program can be found below.

##### Instructions

1. Download AMPPS from https://ampps.com/download.
1. Install.
1. Run as administrator.
1. If the default port is in use:
    1. Right click on the AMPPS icon in the taskbar. 
    1. Hover on configuration and select Apache.
    1. Search for the line *Listen 80*, change the port, save the file and restart Apache. 
    1. To access localhost on your browser you will need to insert the port manually (http://localhost:{your-port}/ampps/). 
1. Add a domain:
    1. Click on the Home icon in the AMPPS panel to open AMPPS Home in your browser.
    1. Under 'Configure' click on 'Add Domain'.
    1. Enter the domain name in the 'Domain' field.
    1. Click 'Add Domain'.
1.  Change the MySQL default root password:
    1. Click on the Home icon in the AMPPS panel to open AMPPS Home in your browser.
    1. Under 'Configure' click on 'Security Center'.
    1. Click on 'Change MySQL root Password'.
    1. Change password (default password can be found in the brackets under 'Old Password').
    1. Click 'Change Password'.    
1. Clone the project from GIT and add the project folder to the new domain (can be found in *C:\Program Files (x86)\Ampps\www* folder).
1. Set up the database.
    1. Click on the Home icon in the AMPPS panel to open AMPPS Home in your browser.
    1. Under 'Database Tools' click on 'phpMyAdmin'.
    1. Create a new database by clicking 'New' on the left side of the screen.
    1. Enter the database name under 'Create database' and click 'Create'.
    1. Open *config.php* from the project folder and enter the database information.  
1. To run the program go to localhost/{domain name}/TicTacToe in your browser.

After the first turn a table named 'Turns' should be generated in the database and data should be stored after each turn. 





