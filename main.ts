basic.forever(function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(65, fwdSensors.ThresholdDirection.Over)) {
        fwdMotors.pump.fwdSetActive(false)
    }
    fwdSensors.ledRing.fwdSetAllPixelsColour(0x0000ff)
    fwdSensors.ledRing.fwdSetBrightness(10)
})
loops.everyInterval(900000, function () {
    if (fwdSensors.soilMoisture1.fwdIsMoistureLevelPastThreshold(5, fwdSensors.ThresholdDirection.Under)) {
        fwdMotors.pump.fwdSetActive(true)
    }
})
