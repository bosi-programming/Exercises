# include <stdio.h>
#include <string.h>

int main() {
  char input[250];
  printf("What is the input string? ");
  fgets(input, 250, stdin);
  input[strcspn(input, "\n")] = 0;
  int length = strlen(input);
  printf("%s has %d characters", input, length);
  return 0;
}
