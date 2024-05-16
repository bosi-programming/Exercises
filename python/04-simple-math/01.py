firstNumber = input("What is the first number? ")
secondNumber = input("What is the second number? ")

first = int(firstNumber)
second = int(secondNumber)

add = first + second
subtract = first - second
multiply = first * second
divide = first / second

print(firstNumber + " + " + secondNumber + " = " + str(add))
print(firstNumber + " - " + secondNumber + " = " + str(subtract))
print(firstNumber + " * " + secondNumber + " = " + str(multiply))
print(firstNumber + " / " + secondNumber + " = " + str(int(divide)))
