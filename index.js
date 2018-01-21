var YamahaAPI = require("yamaha-nodejs");
var yamaha = new YamahaAPI()

exports.turnOnB = function() {
    yamaha.zoneBPowerOn().then(function(result) {
		console.log(JSON.stringify(result, null, 2))
	})
}

exports.turnOffB = function() {
    yamaha.zoneBPowerOff().then(function(result) {
		console.log(JSON.stringify(result, null, 2))
	})
}

exports.turnOnA = function() {
	yamaha.powerOn(1)
}

exports.turnOffA = function() {
	yamaha.powerOff(1)
}

exports.logCurrentState = function() {
	yamaha.getBasicInfo(1).then(function(result) {
		console.log(JSON.stringify(result, null, 2))
	})
}

exports.yamaha = yamaha
