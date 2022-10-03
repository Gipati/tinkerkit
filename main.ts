basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P0)) {
        music.startMelody(music.builtInMelody(Melodies.Funk), MelodyOptions.Once)
    } else if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P0)) {
        music.startMelody(music.builtInMelody(Melodies.Birthday), MelodyOptions.Once)
    } else if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P0)) {
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.Once)
    } else if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P0)) {
        music.startMelody(music.builtInMelody(Melodies.Wawawawaa), MelodyOptions.Once)
    } else if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P0)) {
        for (let index = 0; index < 2; index++) {
            music.playMelody("C D E - E - E F ", 120)
            music.playMelody("D - D - D E F - ", 120)
            music.playMelody("F - F - F E D - ", 120)
            music.playMelody("D - - - - - - - ", 120)
        }
    } else {
    	
    }
})
