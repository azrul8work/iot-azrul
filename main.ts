serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    recive_text = serial.readLine()
    if (TOMATOWIFIBLYNK.isBlynkSigTrue(recive_text)) {
        if (TOMATOWIFIBLYNK.getBlynkPin() == 1 && TOMATOWIFIBLYNK.getBlynkVal() == "1") {
            basic.showIcon(IconNames.Happy)
        } else if (TOMATOWIFIBLYNK.getBlynkPin() == 0 && TOMATOWIFIBLYNK.getBlynkVal() == "1") {
            basic.showIcon(IconNames.Sad)
        }
    }
})
let recive_text = ""
TOMATOWIFIBLYNK.initWifi(true)
TOMATOWIFIBLYNK.resetWifi()
TOMATOWIFIBLYNK.connectWifi(
"MySSID",
"MyPasscode",
"BlynkPassCode,",
8,
true
)
basic.pause(500)
basic.forever(function () {
	
})
