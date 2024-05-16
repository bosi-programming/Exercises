from datetime import datetime

currentAge = input("What is your current age? ")
ageToRetire = input("At what age would you like to retire? ")

currentYear = datetime.now().year
yearsUntilRetire = int(ageToRetire) - int(currentAge)
yearThatWillRetire = currentYear + yearsUntilRetire

print("You have " + str(yearsUntilRetire) + " years left until you can retire.")
print("It's " + str(currentYear) + ", so you can retire in " + str(yearThatWillRetire))
