import random

num = random.randint(1, 100)
guess = None
print("Let's Start the Game!!")

while guess != num:
    guess = input("Guess a number between 1 and 100: ")
    guess = int(guess)

    if guess == num:
        print("Congratulations! You guessed it!")
        break
    elif guess>num:
        print("Your guess is greater!!")
    else:
        print("Your guess is lower!!")
