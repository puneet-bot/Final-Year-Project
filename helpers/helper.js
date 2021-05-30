exports.test = function (arg, callback) {
	console.log("#################### TEST ######################");
	console.log(arg);
	var val = arg + 5;
	callback(val);
}

