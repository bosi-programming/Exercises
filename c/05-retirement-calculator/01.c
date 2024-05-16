# include <stdio.h>
#include <stdlib.h>
# include <string.h>
# include <time.h>

void getInput(char* variable, int size) {
  fgets(variable, size, stdin);
  variable[strcspn(variable, "\n")] = 0;
}

int main() {
  char currentAge[10];
  char ageToRetire[10];
  printf("What is you current age? ");
  getInput(currentAge, 10);
  printf("At what age would you like to retire? ");
  getInput(ageToRetire, 10);

  int currentAgeNumber = strtol(currentAge, NULL, 10);
  int ageToRetireNumber = strtol(ageToRetire, NULL, 10);
  time_t t = time(NULL);
  struct tm currentTime = *localtime(&t);
  int currentYear = currentTime.tm_year + 1900;

  int yearsUntilRetire = ageToRetireNumber - currentAgeNumber;
  int yearThatWillRetire = currentYear + yearsUntilRetire;

  printf("You have %d years left until you can retire.\n", yearsUntilRetire);
  printf("It's %d, so you can retire in %d", currentYear, yearThatWillRetire);

  return 0;
}
