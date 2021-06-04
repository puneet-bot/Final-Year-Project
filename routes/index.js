var express = require('express');
var router = express.Router();
var multer = require('multer');
var QRCode = require('qrcode');
var helper = require('./../helpers/helper');
var keyConfig = require('./../config');
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");

var upload = multer({
	dest: 'uploads/'
});

var eligibleVoters = {
	'1': { name: 'user1', age: '29' },
	'2': { name: 'user2', age: '12' },
	'3': { name: 'user3', age: '74' },
	'4': { name: 'user4', age: '76' },
	'5': { name: 'user5', age: '42' },
	'6': { name: 'user6', age: '29' },
	'7': { name: 'user7', age: '69' },
	'8': { name: 'user8', age: '48' },
	'9': { name: 'user9', age: '57' },
	'10': { name: 'user10', age: '24' },
	'11': { name: 'user11', age: '69' },
	'12': { name: 'user12', age: '47' },
	'13': { name: 'user13', age: '56' },
	'14': { name: 'user14', age: '32' },
	'15': { name: 'user15', age: '59' },
	'16': { name: 'user16', age: '74' },
	'17': { name: 'user17', age: '59' },
	'18': { name: 'user18', age: '22' },
	'19': { name: 'user19', age: '49' },
	'20': { name: 'user20', age: '36' },
	'21': { name: 'user21', age: '63' },
	'22': { name: 'user22', age: '25' },
	'23': { name: 'user23', age: '61' },
	'24': { name: 'user24', age: '31' },
	'25': { name: 'user25', age: '2' },
	'26': { name: 'user26', age: '23' },
	'27': { name: 'user27', age: '69' },
	'28': { name: 'user28', age: '26' },
	'29': { name: 'user29', age: '54' },
	'30': { name: 'user30', age: '4' },
	'31': { name: 'user31', age: '2' },
	'32': { name: 'user32', age: '71' },
	'33': { name: 'user33', age: '8' },
	'34': { name: 'user34', age: '76' },
	'35': { name: 'user35', age: '33' },
	'36': { name: 'user36', age: '12' },
	'37': { name: 'user37', age: '42' },
	'38': { name: 'user38', age: '68' },
	'39': { name: 'user39', age: '75' },
	'40': { name: 'user40', age: '50' },
	'41': { name: 'user41', age: '39' },
	'42': { name: 'user42', age: '44' },
	'43': { name: 'user43', age: '42' },
	'44': { name: 'user44', age: '29' },
	'45': { name: 'user45', age: '23' },
	'46': { name: 'user46', age: '65' },
	'47': { name: 'user47', age: '56' },
	'48': { name: 'user48', age: '40' },
	'49': { name: 'user49', age: '7' },
	'50': { name: 'user50', age: '60' },
	'51': { name: 'user51', age: '21' },
	'52': { name: 'user52', age: '10' },
	'53': { name: 'user53', age: '42' },
	'54': { name: 'user54', age: '9' },
	'55': { name: 'user55', age: '75' },
	'56': { name: 'user56', age: '74' },
	'57': { name: 'user57', age: '63' },
	'58': { name: 'user58', age: '54' },
	'59': { name: 'user59', age: '58' },
	'60': { name: 'user60', age: '77' },
	'61': { name: 'user61', age: '43' },
	'62': { name: 'user62', age: '38' },
	'63': { name: 'user63', age: '74' },
	'64': { name: 'user64', age: '15' },
	'65': { name: 'user65', age: '64' },
	'66': { name: 'user66', age: '43' },
	'67': { name: 'user67', age: '5' },
	'68': { name: 'user68', age: '13' },
	'69': { name: 'user69', age: '35' },
	'70': { name: 'user70', age: '25' },
	'71': { name: 'user71', age: '28' },
	'72': { name: 'user72', age: '38' },
	'73': { name: 'user73', age: '74' },
	'74': { name: 'user74', age: '59' },
	'75': { name: 'user75', age: '77' },
	'76': { name: 'user76', age: '16' },
	'77': { name: 'user77', age: '31' },
	'78': { name: 'user78', age: '4' },
	'79': { name: 'user79', age: '29' },
	'80': { name: 'user80', age: '28' },
	'81': { name: 'user81', age: '5' },
	'82': { name: 'user82', age: '33' },
	'83': { name: 'user83', age: '18' },
	'84': { name: 'user84', age: '80' },
	'85': { name: 'user85', age: '34' },
	'86': { name: 'user86', age: '72' },
	'87': { name: 'user87', age: '78' },
	'88': { name: 'user88', age: '52' },
	'89': { name: 'user89', age: '42' },
	'90': { name: 'user90', age: '20' },
	'91': { name: 'user91', age: '65' },
	'92': { name: 'user92', age: '29' },
	'93': { name: 'user93', age: '64' },
	'95': { name: 'user95', age: '76' },
	'96': { name: 'user96', age: '2' },
	'97': { name: 'user97', age: '1' },
	'98': { name: 'user98', age: '73' },
	'99': { name: 'user99', age: '62' },
	'100': { name: 'user100', age: '66' }
}
  
// var candidatedata = [
// 	{	   
// 		name: "Narendra Modi",
// 		constituency: "Delhi"
// 	},
// 	{
// 		name: "pqr",
// 		constituency: "rajasthan"
// 	},
// 	{
// 		name: "bca",	
// 		constituency: "jammu"
// 	}];

router.get('/', function (req, res, next) {
	res.render('index', {
		JWTData: req.JWTData
	});
});

router.get('/votecandidate', function (req, res, next) {

	if (!req.cookies.votePayload) {
		return res.redirect('/vote');
	}

	var id = req.cookies.votePayload.id;
	var constituency = req.cookies.votePayload.constituency;
	var name = req.cookies.votePayload.name;
	var aadhaar = req.cookies.votePayload.aadhaar;

	res.clearCookie('votePayload');

	req.app.db.models.Candidate.find({
		constituency: constituency
	}, function (err, data) {
		console.log("data =>",data);
		// var temp = [];
		// candidatedata.forEach(element => {
		// 	if(element.constituency == constituency)
        //     temp.push(element);
		// });
		if (err) {
			console.log(err);
			return next(err);
		}
		//console.log("temp ->",temp);
		res.render('votecandidate', {
			JWTData: req.JWTData,
			data: data,
			id: id,
			constituency: constituency,
			name: name,
			aadhaar: aadhaar
		});
	});
});

router.get('/vote', function (req, res, next) {
	res.render('vote', {
		JWTData: req.JWTData
	});
});

router.get('/register', function (req, res, next) {
	res.render('register', {
		JWTData: req.JWTData
	});
});

router.get('/results', function (req, res, next) {
	res.render('results', {
		JWTData: req.JWTData
	});
});

router.get('/test', function (req, res, next) {
	helper.test(5, function (data) {
		res.send(data.toString());
	});
});

router.post('/register', upload.single('avatar'), function (req, res, next) {
	console.log("entered /register");

	req.app.db.models.Voter.find({aadhaar: req.body.aadhaar}, function (err, data) {
		if (err) {
			console.log(err);
		}
		if (data && data[0].hasVoted == true) {
		// if (false) {
			return res.render('message', {
				message: 'Sorry! You Already Voted.',
				JWTData: req.JWTData
			});
		} 
		else{
			if (data && data[0].isValid == true) {
				data[0].remove();	
			}
			var voterDetails = {
				name: req.body.name,
				aadhaar: req.body.aadhaar,
				hasVoted: false,
				isValid: false,
				constituency: req.body.constituency
			}
			if(eligibleVoters[voterDetails.aadhaar].name !== voterDetails.name || eligibleVoters[voterDetails.aadhaar].age<18){
				return res.render('message', {
					message: 'Sorry! You are not allowed to vote.',
					JWTData: req.JWTData
				});
			}
		
			req.app.db.models.Voter.create(voterDetails, function (err, data) {
				if (err) {
					console.log(err);
					return next(err);
				}
		
				var voterID = JSON.stringify(data._id);
		
				QRCode.toDataURL(voterID, function (err, url) {
					console.log(url);
					var im = url.split(",")[1];
					var img = new Buffer(im, 'base64');
		
					res.writeHead(200, {
						'Content-Type': 'image/png',
						'Content-Length': img.length,
						'Content-Disposition': 'attachment; filename="Voter_QR.png"'
					});
					res.end(img);
				})
			});
		}
	})
});

router.post('/verifyvoter', upload.any(), function (req, res, next) {

	var qr_uri = req.body.qrdata;
	var qr = new QrCode();
	var id;

	var buffer = new Buffer(qr_uri.split(",")[1], 'base64');

	console.log("entered");

	Jimp.read(buffer, function (err, image) {
		if (err) {
			console.error(err);
			// TODO handle error
		}

		qr.callback = function (err, value) {
			console.log(value+"----------------------------------------------------");
			if (err) {
				console.error(err);
				// TODO handle error
			}

			id = value.result.substr(1).slice(0, -1);

			req.app.db.models.Voter.findById(id, function (err, data) {
				if (err) {
					console.log(err);
				}
				if (data && data.hasVoted == true) {
				// if (false) {
					return res.render('message', {
						message: 'Sorry! You are not allowed to vote.',
						JWTData: req.JWTData
					});
				} else {
					console.log('Entered here');
					data.isValid = true;
			        data.save();
					var voteUrl = '/votecandidate';

									var votePayload = {
										id: id,
										constituency: data.constituency,
										name: data.name,
										aadhaar: data.aadhaar
									}

									res.cookie('votePayload', votePayload);

									return res.redirect(voteUrl);
				}
			});
		};
		qr.decode(image.bitmap);
	});
});

router.get('/voteadded/:id', function (req, res, next) {
	req.app.db.models.Voter.findById(req.params.id, function (err, data) {
		if (err) {
			console.log(err);
			return next(err);
		}
		data.hasVoted = true;

		data.save();

		return res.redirect('/');
	});
});

router.get('/about',function(req,res){
	
		console.log("here");
		res.render('about');
});

router.get('/Candidates',function(req,res){
	
	console.log("here");
	res.render('Candidates');
});
module.exports = router;