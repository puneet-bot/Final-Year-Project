var express = require('express');
var router = express.Router();
var multer = require('multer');
var QRCode = require('qrcode');
var helper = require('./../helpers/helper');
var keyConfig = require('./../config');
var QrCode = require('qrcode-reader');
var Jimp = require("jimp");
var twilio = require("twilio");
var upload = multer({
	dest: 'uploads/'
});
var const_date = 1622986205;

var eligibleVoters = {
	'1': { name: 'user1', age: '29' ,contact: "+918800880798" },
	'2': { name: 'user2', age: '12' ,contact: "+918800880798" },
	'3': { name: 'user3', age: '74' ,contact: "+918800880798" },
	'4': { name: 'user4', age: '76' ,contact: "+918800880798" },
	'5': { name: 'user5', age: '42' ,contact: "+918800880798" },
	'6': { name: 'user6', age: '29' ,contact: "+918800880798" },
	'7': { name: 'user7', age: '69' ,contact: "+918800880798" },
	'8': { name: 'user8', age: '48' ,contact: "+918800880798" },
	'9': { name: 'user9', age: '57' ,contact: "+918800880798" },
	'10': { name: 'user10', age: '24' ,contact: "+918800880798" },
	'11': { name: 'user11', age: '69' ,contact: "+918800880798" },
	'12': { name: 'user12', age: '47' ,contact: "+918800880798" },
	'13': { name: 'user13', age: '56' ,contact: "+918800880798" },
	'14': { name: 'user14', age: '32' ,contact: "+918800880798" },
	'15': { name: 'user15', age: '59' ,contact: "+918800880798" },
	'16': { name: 'user16', age: '74' ,contact: "+918800880798" },
	'17': { name: 'user17', age: '59' ,contact: "+918800880798" },
	'18': { name: 'user18', age: '22' ,contact: "+918800880798" },
	'19': { name: 'user19', age: '49' ,contact: "+918800880798" },
	'20': { name: 'user20', age: '36' ,contact: "+918800880798" },
	'21': { name: 'user21', age: '63' ,contact: "+918800880798" },
	'22': { name: 'user22', age: '25' ,contact: "+918800880798" },
	'23': { name: 'user23', age: '61' ,contact: "+918800880798" },
	'24': { name: 'user24', age: '31' ,contact: "+918800880798" },
	'25': { name: 'user25', age: '2' ,contact: "+918800880798" },
	'26': { name: 'user26', age: '23' ,contact: "+918800880798" },
	'27': { name: 'user27', age: '69' ,contact: "+918800880798" },
	'28': { name: 'user28', age: '26' ,contact: "+918800880798" },
	'29': { name: 'user29', age: '54' ,contact: "+918800880798" },
	'30': { name: 'user30', age: '4' ,contact: "+918800880798" },
	'31': { name: 'user31', age: '2' ,contact: "+918800880798" },
	'32': { name: 'user32', age: '71' ,contact: "+918800880798" },
	'33': { name: 'user33', age: '8' ,contact: "+918800880798" },
	'34': { name: 'user34', age: '76' ,contact: "+918800880798" },
	'35': { name: 'user35', age: '33' ,contact: "+918800880798" },
	'36': { name: 'user36', age: '12' ,contact: "+918800880798" },
	'37': { name: 'user37', age: '42' ,contact: "+918800880798" },
	'38': { name: 'user38', age: '68' ,contact: "+918800880798" },
	'39': { name: 'user39', age: '75' ,contact: "+918800880798" },
	'40': { name: 'user40', age: '50' ,contact: "+918800880798" },
	'41': { name: 'user41', age: '39' ,contact: "+918800880798" },
	'42': { name: 'user42', age: '44' ,contact: "+918800880798" },
	'43': { name: 'user43', age: '42' ,contact: "+918800880798" },
	'44': { name: 'user44', age: '29' ,contact: "+918800880798" },
	'45': { name: 'user45', age: '23' ,contact: "+918800880798" },
	'46': { name: 'user46', age: '65' ,contact: "+918800880798" },
	'47': { name: 'user47', age: '56' ,contact: "+918800880798" },
	'48': { name: 'user48', age: '40' ,contact: "+918800880798" },
	'49': { name: 'user49', age: '7' ,contact: "+918800880798" },
	'50': { name: 'user50', age: '60' ,contact: "+918800880798" },
	'51': { name: 'user51', age: '21' ,contact: "+918800880798" },
	'52': { name: 'user52', age: '10' ,contact: "+918800880798" },
	'53': { name: 'user53', age: '42' ,contact: "+918800880798" },
	'54': { name: 'user54', age: '9' ,contact: "+918800880798" },
	'55': { name: 'user55', age: '75' ,contact: "+918800880798" },
	'56': { name: 'user56', age: '74' ,contact: "+918800880798" },
	'57': { name: 'user57', age: '63' ,contact: "+918800880798" },
	'58': { name: 'user58', age: '54' ,contact: "+918800880798" },
	'59': { name: 'user59', age: '58' ,contact: "+918800880798" },
	'60': { name: 'user60', age: '77' ,contact: "+918800880798" },
	'61': { name: 'user61', age: '43' ,contact: "+918800880798" },
	'62': { name: 'user62', age: '38' ,contact: "+918800880798" },
	'63': { name: 'user63', age: '74' ,contact: "+918800880798" },
	'64': { name: 'user64', age: '15' ,contact: "+918800880798" },
	'65': { name: 'user65', age: '64' ,contact: "+918800880798" },
	'66': { name: 'user66', age: '43' ,contact: "+918800880798" },
	'67': { name: 'user67', age: '5' ,contact: "+918800880798" },
	'68': { name: 'user68', age: '13' ,contact: "+918800880798" },
	'69': { name: 'user69', age: '35' ,contact: "+918800880798" },
	'70': { name: 'user70', age: '25' ,contact: "+918800880798" },
	'71': { name: 'user71', age: '28' ,contact: "+918800880798" },
	'72': { name: 'user72', age: '38' ,contact: "+918800880798" },
	'73': { name: 'user73', age: '74' ,contact: "+918800880798" },
	'74': { name: 'user74', age: '59' ,contact: "+918800880798" },
	'75': { name: 'user75', age: '77' ,contact: "+918800880798" },
	'76': { name: 'user76', age: '16' ,contact: "+918800880798" },
	'77': { name: 'user77', age: '31' ,contact: "+918800880798" },
	'78': { name: 'user78', age: '4' ,contact: "+918800880798" },
	'79': { name: 'user79', age: '29' ,contact: "+918800880798" },
	'80': { name: 'user80', age: '28' ,contact: "+918800880798" },
	'81': { name: 'user81', age: '5' ,contact: "+918800880798" },
	'82': { name: 'user82', age: '33' ,contact: "+918800880798" },
	'83': { name: 'user83', age: '18' ,contact: "+918800880798" },
	'84': { name: 'user84', age: '80' ,contact: "+918800880798" },
	'85': { name: 'user85', age: '34' ,contact: "+918800880798" },
	'86': { name: 'user86', age: '72' ,contact: "+918800880798" },
	'87': { name: 'user87', age: '78' ,contact: "+918800880798" },
	'88': { name: 'user88', age: '52' ,contact: "+918800880798" },
	'89': { name: 'user89', age: '42' ,contact: "+918800880798" },
	'90': { name: 'user90', age: '20' ,contact: "+918800880798" },
	'91': { name: 'user91', age: '65' ,contact: "+918800880798" },
	'92': { name: 'user92', age: '29' ,contact: "+918800880798" },
	'93': { name: 'user93', age: '64' ,contact: "+918800880798" },
	'95': { name: 'user95', age: '76' ,contact: "+918800880798" },
	'96': { name: 'user96', age: '2' ,contact: "+918800880798" },
	'97': { name: 'user97', age: '1' ,contact: "+918800880798" },
	'98': { name: 'user98', age: '73' ,contact: "+918800880798" },
	'99': { name: 'user99', age: '62' ,contact: "+918800880798" },
	'100': { name: 'user100', age: '66' , contact: "+918800880798"}
}
  

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
	if(Math.floor(Date.now() / 1000) >= const_date){
		res.render('vote', {
			JWTData: req.JWTData
		});
	}
	else{
		return res.render('message', {
			message: 'Voting Phase Not Yet Started!!',
			JWTData: req.JWTData
		});
	}
});

router.get('/register', function (req, res, next) {
	res.render('register', {
		JWTData: req.JWTData
	});
});

router.get('/results', function (req, res, next) {
	if(Math.floor(Date.now() / 1000) >= const_date){
		res.render('results', {
			JWTData: req.JWTData
		});
	}
	else{
		return res.render('message', {
			message: 'Voting Phase Not Yet Started!!',
			JWTData: req.JWTData
		});
	}
})




router.get('/voteResults', async function (req, res, next) {
	var constituency = ['Delhi','Uttar Pradesh','Maharashtra','Rajasthan','Haryana','Gujarat','Uttarakhand']
	var resultHasRegistered = [];
	var resultHasVoted = [];
	for(var i = 0 ; i < constituency.length ; i++){
		await req.app.db.models.Voter.find({constituency:constituency[i]},function(err,data) {
		  if(err){
			console.log(err)
			return;
		  }
		  if(data.length === 0){
			resultHasRegistered.push(0);
		  }
		  else{
			resultHasRegistered.push(data.length);
		  }
		});
		await req.app.db.models.Voter.find({constituency:constituency[i],hasVoted:true},function(err,data) {
		  if(err){
			console.log(err)
			return;
		  }
		  if(data.length === 0){
			resultHasVoted.push(0);
		  }
		  else{
			resultHasVoted.push(data.length);
		  }
		});
	  
	}
	var data = {
		resultHasRegistered:resultHasRegistered,
		resultHasVoted:resultHasVoted,
	}
	res.json(data)
});

export function newData() {
	var data = fetch('localhost:3000/voteResults');
	return Promise.resolve(data)
}

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
		if (data.length !== 0 && data[0].hasVoted == true) {
		// if (false) {
			return res.render('message', {
				message: 'Sorry! You Already Voted.',
				JWTData: req.JWTData
			});
		} 
		else{
			if (data.length !== 0 && data[0].isValid == true) {
				data[0].remove();	
			}
			var voterDetails = {
				name: req.body.name,
				aadhaar: req.body.aadhaar,
				hasVoted: false,
				isValid: false,
				otp:0,
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
	console.log("**********************************************************************")
	if(Math.floor(Date.now() / 1000) >= const_date){
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

					/**************************Save Otp******************************/
					var digits = '0123456789';
					var OTP = '';
					for (let i = 0; i < 4; i++ ) {
						OTP += digits[Math.floor(Math.random() * 10)];
					}
					data.otp = parseFloat(OTP)
					data.save()
					/****************************************************************/

					/**************************Send Otp To The Registered Number******************************/

					var accountSid = "ACd14ec87abef0d3111231564206f11d91"; // Your Account SID from www.twilio.com/console
                    var authToken = "00356122fd9090a9d5c043d8230d4dae"; // Your Auth Token from www.twilio.com/console
                    var client = new twilio(accountSid, authToken);

					client.messages
					.create({
						body: `Enter this OTP for verification ${OTP}`,
						to: "+918800880798", // Text this number
						from: "+16122236402", // From a valid Twilio number
					})
					.then((message) => res.send(`The message to: ${message.to} was sent!`))
					.then(message => console.log(message.sid))
					.catch(err => console.log(err));

					/******************************************************************************************/
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
	}
	else{
		return res.render('message', {
			message: 'Voting Phase Not Yet Started!!',
			JWTData: req.JWTData
		});
	}
	
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
	
		res.render('about');
});

router.get('/Candidates',function(req,res){
	
	res.render('Candidates');
});
router.get('/refer',function(req,res){
	
	res.render('refer');
});
module.exports = router;