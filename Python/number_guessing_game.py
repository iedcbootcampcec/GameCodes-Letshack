import random

num = random.randint(1, 100)
guess = None

while guess != num:
    guess = input("Guess a number between 1 and 100: ")
    guess = int(guess)

    if guess == num:
        print("Congratulations! you won!")
        break
    elif guess>num:
        print("Your guess is greater!!")
    else:
        print("Your guess is lower!!")