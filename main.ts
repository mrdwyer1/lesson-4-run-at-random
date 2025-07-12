let right_speed = 0
let left_speed = 0
basic.showIcon(IconNames.Ghost)
basic.forever(function () {
    left_speed = randint(-100, 100)
    right_speed = randint(-100, 100)
    cuteBot.motors(left_speed, right_speed)
    basic.pause(1000)
})
