from gpiozero import LED, Button

led = LED(14)
button = Button(15)

while True:
    button.when_activated = led.on
    button.when_deactivated = led.off
