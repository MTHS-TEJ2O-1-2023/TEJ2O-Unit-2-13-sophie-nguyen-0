/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: sophie
 * Created on: oct 2023
 * This program moves a pixel LED
*/

// variables
let neopixelStrip: neopixel.Strip = null
let loopCounter: number = 4

// setup
basic.clearScreen()
basic.showIcon(IconNames.Ghost)
pause(500)
basic.clearScreen()

// neopixel setup
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()


// button A pressed
input.onButtonPressed(Button.A, function () {
  // setup
  basic.clearScreen()

  // neopixel
  neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
  neopixelStrip.show()

  // loop
  while (loopCounter >= 0) {
    basic.pause(500)
    basic.showNumber(loopCounter)
    neopixelStrip.setPixelColor(loopCounter, neopixel.colors(NeoPixelColors.Black))
    neopixelStrip.show()
    loopCounter = loopCounter - 1
  }
})
