#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define NUM_SUITS 4
#define NUM_VALUES 13

typedef enum {
    SPADES,
    HEARTS,
    DIAMONDS,
    CLUBS
} Suit;

typedef struct {
    int value;
    Suit suit;
} Card;

typedef struct {
    Card cards[52];
    int num_cards;
} Deck;

typedef struct {
    int wins;
    Card card;
    char name[100];
} Player;

void shuffleDeck(Deck *deck) {
    srand(time(NULL));
    for (int i = 0; i < deck->num_cards; i++) {
        int j = rand() % deck->num_cards;
        Card temp = deck->cards[i];
        deck->cards[i] = deck->cards[j];
        deck->cards[j] = temp;
    }
}

void initializeDeck(Deck *deck) {
    int index = 0;
    for (int suit = SPADES; suit <= CLUBS; suit++) {
        for (int value = 2; value <= 14; value++) {
            deck->cards[index].value = value;
            deck->cards[index].suit = suit;
            index++;
        }
    }
    deck->num_cards = 52;
}

void removeCard(Deck *deck, int index) {
    if (index >= 0 && index < deck->num_cards) {
        for (int i = index; i < deck->num_cards - 1; i++) {
            deck->cards[i] = deck->cards[i + 1];
        }
        deck->num_cards--;
    }
}

void draw(Player *player, Deck *deck) {
    if (deck->num_cards > 0) {
        player->card = deck->cards[deck->num_cards - 1];
        removeCard(deck, deck->num_cards - 1);
    }
}

int compareCards(Card card1, Card card2) {
    if (card1.value < card2.value) {
        return -1;
    } else if (card1.value > card2.value) {
        return 1;
    } else {
        if (card1.suit < card2.suit) {
            return -1;
        } else if (card1.suit > card2.suit) {
            return 1;
        } else {
            return 0;
        }
    }
}

void printCard(Card card) {
    char *suits[] = {"Spades", "Hearts", "Diamonds", "Clubs"};
    char *values[] = {"", "", "2", "3", "4", "5", "6", "7", "8", "9", "10", "Jack", "Queen", "King", "Ace"};

    printf("%s of %s\n", values[card.value], suits[card.suit]);
}

int main() {
    Deck deck;
    Player p1, p2;

    initializeDeck(&deck);
    shuffleDeck(&deck);

    printf("Enter player 1 name: ");
    scanf("%s", p1.name);

    printf("Enter player 2 name: ");
    scanf("%s", p2.name);

    p1.wins = 0;
    p2.wins = 0;

    printf("Beginning War!\n");

    while (deck.num_cards >= 2) {
        printf("Press 'q' to quit. Any other key to play: ");
        char response;
        scanf(" %c", &response);

        if (response == 'q') {
            break;
        }

        draw(&p1, &deck);
        draw(&p2, &deck);

        printf("%s drew ", p1.name);
        printCard(p1.card);
        printf("%s drew ", p2.name);
        printCard(p2.card);

        int result = compareCards(p1.card, p2.card);

        if (result == -1) {
            p2.wins++;
            printf("%s wins this round!\n", p2.name);
        } else if (result == 1) {
            p1.wins++;
            printf("%s wins this round!\n", p1.name);
        } else {
            printf("It's a tie!\n");
        }
    }

    if (p1.wins > p2.wins) {
        printf("War is over. %s wins!\n", p1.name);
    } else if (p2.wins > p1.wins) {
        printf("War is over. %s wins!\n", p2.name);
    } else {
        printf("War is over. It's a tie!\n");
    }

    return 0;
}
