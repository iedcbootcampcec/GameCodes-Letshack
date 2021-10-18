 #                    THE GUESSING GAME

Import random

#About the game     
print("This game is all about guessing the secret number.\nIn first step the admin has to enter a number which in turn is converted to an another number- THE SECRET NO: .\nThe player is given 3 clues and 4 chances throughout the game.")    
print("\nThe admin has to enter a number between 0 and 5")


def nochange(a):  
    if (a%2==0):
        a+=z
    else:
        a+=z
    return a  
    

x = int(input("\nAdmin please enter the number : "))
z = random.randint(0, 5)


for i in range(0,4):
    y = int(input("\nPlayer, Enter your guessing : ")) # Player is asked to enter the guessing
    c = nochange(x)                                   # Function calling 
    

    if (y==c):
        print ("\nYOU WON!!! CONGRATS!!")
        break   
    elif (y>c):
        print("The guessing is greater than the secret number")
    else:
        print("The guessing is smaller than the secret number ")

print("\nGAME OVER!!!....")
print()
print(f"The SECRET NUMBER was : {c}")
  
    
    







