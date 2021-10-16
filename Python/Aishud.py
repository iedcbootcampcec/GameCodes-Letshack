#simple-number-game
print("Welcome \nLets try your luck. \n * * * * * ")      # printing a string to welcome the user

p = input("Are you ready to start the competition? (yes/no) \n ")    #input: yes or no
list=["yes","no","YES","NO","Yes","No"]                            #declairing a list
for p in list:                                                        #for loop
    if p=="yes" or p=="YES" or p=="Yes":             #checks if input is "yes" or "YES" or "Yes"(condition1)
        continue                                            #continue statement       #executes when first if condition is true
        print("Lets start.")                                                 #printing a sting to start the game
        a=int(input("Enter a single digit number as your secret number : "))           #input: integer(single digit)
        
        b=a+4                             #declairing a variable 'b'

        def diff(q):                      #defining a function diff , with parameter q
            if q!=b:                         #(condition 1 in definition): checks if of q not equal to b
                if q>b:                        #(condition 2 in definition): checks if q is greater than b
                    print("The number you have entered is greater than the lucky number.")    #executes if condition2 in deffinition is true
                elif q<b:                      #(condition 3 in in deffinition): checks if q is lesser than b
                    print("The number you have entered is lesser than the lucky number.")     #excutes if condition3 in deffinition is true

        s="WOW ! \nYou have won the Competition . \nCongratulations! "         #assigning a string to a variable

        #if-else-if ladder
        x = int(input("Your golden chance is here. \n Guess the lucky number : "))     #input:integer
        if x==b:                                  #if condition2: checks if x is equal to b
            print(s)
        else:                                     #executes when if condition2 is false
            diff(x)                                #checks the definition deff on x

            print("Goodbye.")
            break                                                          #break statement    #executes when first if condition is false
