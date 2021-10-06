# --------- Global Variables -----------
board = ["-", "-", "-",
         "-", "-", "-",
         "-", "-", "-"]  # board data
game_still_going = True  # to know game end or not
winner = None  # to define who is the winner
current_player = "X"  # x is the current player


# ------------- functions ---------------
def play_game():  # play XOX game
    display_board()  # to show first game board
    while game_still_going:  # loop the game until stops (winner or tie)
        handle_turn(current_player)  # handing over turn to next player
        check_if_game_over()  # to check the game over or not
        flip_player()  # handing over to the other player
    if winner == "X" or winner == "O":  # game is over & print winner or tie
        print(winner + " WON.")
    elif winner is None:
        print("TIE.")


def display_board():  # display game board on the screen
    print("\n")
    print(" | " + board[6] + " | " + board[7] + " | " + board[8] + " | " + "      | 7 | 8 | 9 | ")
    print(" | " + board[3] + " | " + board[4] + " | " + board[5] + " | " + "      | 4 | 5 | 6 | ")
    print(" | " + board[0] + " | " + board[1] + " | " + board[2] + " | " + "      | 1 | 2 | 3 | ")
    print("\n")


def handle_turn(player):  # handing over turn for an arbitrary player
    print(player + "'S TURN.")  # get player's position
    position = input(
        "CHOOSE A POSITION FROM 1 - 9: ")  # whatever user gives as input, make sure a valid input & the spot is open
    valid = False
    while not valid:  # check the input is valid
        while position not in ["1", "2", "3", "4", "5", "6", "7", "8", "9"]:
            position = input("Choose a position from 1-9: ")
        position = int(position) - 1  # get correct position(index) in our board list
        if board[position] == "-":  # assure the availability on the board
            valid = True
        else:
            print("YOU CAN'T GO THERE. GO AGAIN.")
    board[position] = player  # drop the game piece on the board
    display_board()  # display the game board


def check_if_game_over():  # check whether the game is over or running
    check_for_winner()
    check_for_tie()


def check_for_winner():  # check to verify if anybody has won
    global winner  # globalize global variables
    row_winner = check_rows()  # verify any winner anywhere
    column_winner = check_columns()
    diagonal_winner = check_diagonals()
    if row_winner:  # get winner
        winner = row_winner
    elif column_winner:
        winner = column_winner
    elif diagonal_winner:
        winner = diagonal_winner
    else:
        winner = None


def check_rows():  # Check rows for even a singe WIN
    global game_still_going  # globalize global variables
    row_1 = board[0] == board[1] == board[2] != "-"
    row_2 = board[3] == board[4] == board[5] != "-"
    row_3 = board[6] == board[7] == board[8] != "-"    # check any of the rows have all the values same(& filled)
    if row_1 or row_2 or row_3:  # if no rows make match, flag that there is a WIN
        game_still_going = False
    if row_1:  # return the winner
        return board[0]
    elif row_2:
        return board[3]
    elif row_3:
        return board[6]
    else:  # return None if there was no winner
        return None


def check_columns():  # check columns for even a singe WIN
    global game_still_going  # Set global variables
    column_1 = board[0] == board[3] == board[6] != "-"
    column_2 = board[1] == board[4] == board[7] != "-"
    column_3 = board[2] == board[5] == board[8] != "-"  # check any of the columns have all the values same (& filled)
    if column_1 or column_2 or column_3:  # if no rows make match, flag that there is a WIN
        game_still_going = False
    if column_1:  # return the winner
        return board[0]
    elif column_2:
        return board[1]
    elif column_3:
        return board[2]
    else:
        return None  # return None if there was no winner


def check_diagonals():  # check diagonals for a win
    global game_still_going  # globalize global variables
    diagonal_1 = board[0] == board[4] == board[8] != "-"
    diagonal_2 = board[2] == board[4] == board[6] != "-"  # check any of the columns have all the values same (& filled)
    if diagonal_1 or diagonal_2:  # if no row match, flag that there is a WIN
        game_still_going = False
    if diagonal_1:  # return the winner
        return board[0]
    elif diagonal_2:
        return board[2]
    else:  # return None if there was no winner
        return None


def check_for_tie():  # check if there is a tie
    global game_still_going  # globalize global variables
    if "-" not in board:  # if board is full
        game_still_going = False
        return True
    else:  # else there is no tie
        return False


def flip_player():  # change the current player from X to O, or O to X
    global current_player  # global variables we required
    if current_player == "X":  # if current player == X, make it O
        current_player = "O"
    elif current_player == "O":  # if current player == O, make it X
        current_player = "X"


# ------------ Start Execution -------------
play_game()  # Play XOX game