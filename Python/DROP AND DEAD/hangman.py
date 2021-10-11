#                                         DROP AND DEAD 2.1


from hangman_model import hangman
import random

#ask user to guess the word
def guess():
    word=random.choice(words)   #to chooose a random word
    print("Guess it!")
    return word

def is_present(letter):
    if letter.lower() in word.lower(): #to check whether the letter is present in the word or not
        return letter.lower()
    else:
        return False 

def fill_blank(letter): #to fill the dashed line with the letter
    global dash,word
    dash = list(dash)
    for i,l in enumerate(word):# returns index and value
        if letter == l:
            dash[i]=letter
    print("".join(dash))


def make_hangman():
    global chances
    chances += 1
    print(hangman[chances])
    

def check_letter(player_choice):  #when user enters single letter
    letter=is_present(player_choice)
    if letter:
        fill_blank(letter) #if letter is present,fill the dash with the letter
    else:
        make_hangman()

def check_word(player_choice): #when user enters a word
    if player_choice.lower()== word.lower():
        return True
    else:
        return False
 
#initial setup
chances=0                     #chances given to the user
is_win=False
words=["pizza","burger","chips","chocos","apple","plum"]
word=guess()
dash=("-"*len(word))     #to print dashed lines
print(dash)
print(hangman[0])

while chances<=5 and not  is_win:
    player_choice=input()     #user input
    #the case where the user enters a letter
    if len(player_choice)==1:
        check_letter(player_choice) 
    else:
        is_win= check_word(player_choice)
        break # only a single chance is given to user when a full word is entered

    if '-' not in dash:
        is_win = True 

if is_win:
    print("Well done....You are great!")
else:
    print("Sorry,You Lost:(")