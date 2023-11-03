"""
Created by: sophie
Created on: oct 2023
This module is a Micro:bit MicroPython program counts down from 4 to 0 and lights up neopixels
"""

from microbit import *
import neopixel

# variables
neopixel_strip = neopixel.NeoPixel(pin16, 4)
loop_counter = 4

# setup
display.clear()
display.show(Image.HEART)
sleep(500)

# neopixel clean up
neopixel_strip[0] = (0, 0, 0)
neopixel_strip[1] = (0, 0, 0)
neopixel_strip[2] = (0, 0, 0)
neopixel_strip[3] = (0, 0, 0)
print(neopixel_strip[0])
print(neopixel_strip[1])
print(neopixel_strip[2])
print(neopixel_strip[3])
neopixel_strip.show()

# loop
while True:
    if button_a.is_pressed():
        # setup
        display.clear()

        # all neopixels on
        neopixel_strip[0] = (255, 0, 0)
        neopixel_strip[1] = (255, 0, 0)
        neopixel_strip[2] = (255, 0, 0)
        neopixel_strip[3] = (255, 0, 0)
        print(neopixel_strip[0])
        print(neopixel_strip[1])
        print(neopixel_strip[2])
        print(neopixel_strip[3])
        neopixel_strip.show()

        while loop_counter >= 0:
            display.show(str(loop_counter))

            # loop_counter goes down by 1
            loop_counter -= 1

            sleep(500)

            # turn off neopixels one by one
            neopixel_strip[loop_counter] = (0, 0, 0)
            print(neopixel_strip[loop_counter])
            neopixel_strip.show()

            sleep(1000)
        else:
            display.show(Image.RABBIT)
