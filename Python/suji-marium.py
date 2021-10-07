print(" Welcome to 'Guess the number game'\n\n Instruction: \n   >You will have to guess the number through the clues provided!\n   >Guessing number is between 1 and 20 \n   >Four chance for each play!\n\n Best of luck....\n")             

print("Secret number should be between 1 and 10")                                                                                                                                                                            
count=0                                                                                                                                                                                                                     
secret_num=int(input("Enter the secret number:"))                                                                                                                                                                             
x=secret_num*2-5+3                                                                                                                                                                                                                   

def guess(a,b):                                                                                                                                                                                                                        
        if x==y:                                                                                                                                                                                                                 
            print("You have guessed the right number!\n\n YOU WON THE GAME!\n CONGRATULATION!")                                                                                                                                
        elif x<y:                                                                                                                                                                                                        
             print("Your guess is greater than actual number")                                                                                                                                                               
        else:                                                                                                                                                                                                               
             print("Your guess is lower than actual number")                                                                                                                                                                   
        return guess                                                 

for i in range(1,5):                                                                                                                                                                                                 
        print("\n")
        y=int(input("Guess the number:"))                                          
        z=guess(x,y)                          
        if x==y:                                                                                                                                                                                                           
            break                                                                                                                                                                                                     
        count=count+1                                                                                                                                                                                                       

if count==4:                                 
    print("\n Oops you have used all your chances!\n Try again...\n GAME OVER!")     
