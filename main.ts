input.onButtonPressed(Button.A, function () {
    A += 1
})
input.onGesture(Gesture.Shake, function () {
    A = 0
    B = 0
    _1000의자리수 = randint(1, 9)
    _100의자리수 = randint(1, 9)
    _10의자리수 = randint(1, 9)
    _1의자리수 = randint(1, 9)
    servos.P0.setAngle(0)
    strip.clear()
    basic.showNumber(_1000의자리수 * 1000 + (_100의자리수 * 100 + (_10의자리수 * 10 + _1의자리수)))
})
input.onButtonPressed(Button.AB, function () {
    if (A == Math.min(_10의자리수, _1000의자리수) && B == Math.max(_100의자리수, _1의자리수)) {
        servos.P0.setAngle(180)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        music.startMelody(music.builtInMelody(Melodies.PowerUp), MelodyOptions.Once)
        if (거리 < 0.5) {
            servos.P0.setAngle(0)
            music.playTone(784, music.beat(BeatFraction.Half))
            basic.pause(5)
            music.playTone(784, music.beat(BeatFraction.Half))
            basic.pause(50)
            music.playTone(784, music.beat(BeatFraction.Half))
            basic.pause(5)
            music.playTone(784, music.beat(BeatFraction.Half))
            basic.pause(200)
            music.playTone(988, music.beat(BeatFraction.Whole))
            basic.pause(5)
            music.playTone(988, music.beat(BeatFraction.Half))
            music.playTone(784, music.beat(BeatFraction.Half))
        }
    } else {
        servos.P0.setAngle(0)
        for (let index = 0; index < 4; index++) {
            strip.showColor(neopixel.colors(NeoPixelColors.Red))
            music.playTone(988, music.beat(BeatFraction.Half))
            music.playTone(784, music.beat(BeatFraction.Half))
            strip.clear()
            music.playTone(988, music.beat(BeatFraction.Half))
            music.playTone(784, music.beat(BeatFraction.Half))
        }
    }
})
input.onButtonPressed(Button.B, function () {
    B += 1
})
let _1의자리수 = 0
let _10의자리수 = 0
let _100의자리수 = 0
let _1000의자리수 = 0
let 거리 = 0
let strip: neopixel.Strip = null
let B = 0
let A = 0
A = 0
B = 0
strip = neopixel.create(DigitalPin.P0, 12, NeoPixelMode.RGB)
servos.P0.setAngle(0)
거리 = sonar.ping(
DigitalPin.P1,
DigitalPin.P2,
PingUnit.Centimeters
)
basic.forever(function () {
	
})
