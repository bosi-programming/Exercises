# include <stdio.h>
#include <stdlib.h>
# include <string.h>

void getInput(char* variable, int size) {
  fgets(variable, size, stdin);
  variable[strcspn(variable, "\n")] = 0;
}

int main() {
  char firstNumber[50];
  char secondNumber[50];

  printf("What is the first number? ");
  getInput(firstNumber, 50);
  printf("What is the second number? ");
  getInput(secondNumber, 50);

  int first = strtol(firstNumber, NULL, 10);
  int second = strtol(secondNumber, NULL, 10);

  int add = first + second;
  int subtract = first - second;
  int multiply = first * second;
  int divide = first / second;

  printf("%d + %d = %d\n", first, second, add);
  printf("%d - %d = %d\n", first, second, subtract);
  printf("%d * %d = %d\n", first, second, multiply);
  printf("%d / %d = %d\n", first, second, divide);

  return 0;
}
