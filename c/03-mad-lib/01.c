# include <stdio.h>
# include <string.h>

void getInput(char* variable, int size) {
  fgets(variable, size, stdin);
  variable[strcspn(variable, "\n")] = 0;
}

int main() {
  char noun[50];
  char verb[50];
  char adjective[50];
  char adverb[50];

  printf("Enter a noun: ");
  getInput(noun, 50);

  printf("Enter a verb: ");
  getInput(verb, 50);

  printf("Enter a adjective: ");
  getInput(adjective, 50);

  printf("Enter a adverb: ");
  getInput(adverb, 50);

  printf("Do you %s your %s %s %s? That's hilarious!", verb, adjective, noun, adverb);

  return 0;
}
