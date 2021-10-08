 #                    THE GUESSING GAME

#About the game     
print("This game is all about guessing the secret number.\n In first step the admin has to enter a number which in turn is converted to an another number- THE SECRET NO:.\n The player is given 3 clues and 4 chances throughout the game. ")    
print("\nThe admin has to enter a number between 0 and 9")


def nochange(a):  
    if (a%2==0):
        a=a+1
    else:
        a=a+2
    return a  
    

x = int(input("\nAdmin please enter the number: "))


for i in range(0,4):
    y = int(input("\nPlayer, Enter your guessing: ")) # Player is asked to enter the guessing
    c = nochange(x)                                   # Function calling 
    

    if (y==c):
        print ("YOU WON!!! CONGRATS!!")
        break   
    elif (y>c):
        print(" The guessing is greater than the secret number")
    else:
        print("The guessing is smaller than the secret number ")

print("GAME OVER!!!....")
  
    
    







