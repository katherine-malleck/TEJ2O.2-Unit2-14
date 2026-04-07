/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: katherine
 * Created on: Apr 2026
 * This program will go clockwise and counterclockwise!!!! :D
*/

let sprite: game.LedSprite = null
let loopCounter = 0

//pressing a button to make it go clockwise
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // top row going left to right side
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 0)
        loopCounter = loopCounter + 1
        basic.pause(200)
    }

    // next one going top to bottom
    loopCounter = 1
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, 4)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(200)
    }

    // bottom row
    loopCounter = 3
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 4)
        loopCounter = loopCounter - 1
        basic.pause(200)
    }

    // bottom to top
    loopCounter = 3
    while (loopCounter >= 1) {
        sprite.set(LedSpriteProperty.X, 0)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(200)
    }

    sprite.delete()
})

// a button 
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    sprite = game.createSprite(0, 0)

    // left column (top → bottom)
    loopCounter = 0
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, 0)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter + 1
        basic.pause(200)
    }

    // bottom row (left → right)
    loopCounter = 1
    while (loopCounter <= 4) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 4)
        loopCounter = loopCounter + 1
        basic.pause(200)
    }

    // right column (bottom → top)
    loopCounter = 3
    while (loopCounter >= 0) {
        sprite.set(LedSpriteProperty.X, 4)
        sprite.set(LedSpriteProperty.Y, loopCounter)
        loopCounter = loopCounter - 1
        basic.pause(200)
    }

    // top row (right → left)
    loopCounter = 3
    while (loopCounter >= 1) {
        sprite.set(LedSpriteProperty.X, loopCounter)
        sprite.set(LedSpriteProperty.Y, 0)
        loopCounter = loopCounter - 1
        basic.pause(200)
    }

    sprite.delete()
})