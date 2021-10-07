#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(void) {
    srand(time(NULL));
    int r = rand() % 10 + 1;
    int correct = 0; 
    int guess; 
    int counter = 0; 

    printf("Guess my number! "); 

    do {
        scanf("%d", &guess);
        if (guess == r) {
            counter++;
            printf("You guessed correctly in %d tries! Congratulations!\n", counter);
            correct = 1; 
        }

        if (guess < r) {
            counter++;
            printf("Your guess is too low. Guess again. ");
        }

        if (guess > r) { 
            counter++; 
            printf("Your guess is too high. Guess again. ");
        }
    } while (correct == 0);

    return 0;
}


