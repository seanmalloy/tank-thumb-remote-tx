input.onButtonPressed(Button.A, function () {
    controlValSpeed = 9
    radio.sendNumber(controlValSpeed)
})
input.onButtonPressed(Button.B, function () {
    controlValSpeed = 10
    radio.sendNumber(controlValSpeed)
})
let controValAccessory = 0
let controlValRight = 0
let RightVal = 0
let controlValLeft = 0
let LeftVal = 0
let controlValSpeed = 0
radio.setGroup(2)
pins.setPull(DigitalPin.P13, PinPullMode.PullUp)
pins.setPull(DigitalPin.P14, PinPullMode.PullUp)
let controlValLeftPrev = 0
let controlValRightPrev = 0
let controlValAccessoryPrev = 0
controlValSpeed = 0
basic.forever(function () {
    LeftVal = pins.analogReadPin(AnalogReadWritePin.P0)
    if (LeftVal < 256) {
        controlValLeft = 1
    } else if (LeftVal > 768) {
        controlValLeft = 3
    } else {
        controlValLeft = 2
    }
    if (controlValLeft != controlValLeftPrev) {
        radio.sendNumber(controlValLeft)
        controlValLeftPrev = controlValLeft
    }
})
basic.forever(function () {
    RightVal = pins.analogReadPin(AnalogReadWritePin.P1)
    if (RightVal < 256) {
        controlValRight = 4
    } else if (RightVal > 768) {
        controlValRight = 6
    } else {
        controlValRight = 5
    }
    if (controlValRight != controlValRightPrev) {
        radio.sendNumber(controlValRight)
        controlValRightPrev = controlValRight
    }
})
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0) {
        controValAccessory = 7
    } else if (pins.digitalReadPin(DigitalPin.P14) == 0) {
        controValAccessory = 8
    }
    if (controValAccessory != controlValAccessoryPrev) {
        radio.sendNumber(controValAccessory)
        controlValAccessoryPrev = controValAccessory
    }
})
