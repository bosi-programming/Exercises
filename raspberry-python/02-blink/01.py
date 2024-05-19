from gpiozero import LED
from time import sleep
import argparse

argumento = argparse.ArgumentParser()
argumento.add_argument("repeticoes", type=int)
vezes = argumento.parse_args()

led = LED(14)

while True:
    for i in range(vezes.repeticoes):
        led.on()
        sleep(0.1)
        led.off()
        sleep(0.1)
    sleep(1)
