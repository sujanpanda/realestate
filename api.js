const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const expressValidator = require('express-validator');
const User = require('./models/user');
const Admin = require('./models/admin');
const Contact = require('./models/contact');
const Property = require('./models/property');
const PropInquiry = require('./models/propInquiry');
const PropOffer = require('./models/propOffer');
const InnerPages = require('./models/innerPages');
const filessystem = require('fs');
const Jimp = require('jimp');

const mongoose = require('mongoose');

const db = "mongodb://127.0.0.1:27017/real_estate";

mongoose.connect(db, err => {
	if(err) {
		console.log('Error!' + err);
	} else {
		console.log('Connected to mongoDB');
	}
});


/* ==================================

  Time zone is not saved as indian time

===================================== */
// codes start

function verifyToken(req, res, next) {
	const reqToken = req.headers["x-access-token"];

	if(!reqToken) {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	let token = reqToken.split(' ')[1]
	if(token === 'null') {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	let payload = jwt.verify(token, 'secreteKey')
	if(!payload) {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	req.userId = payload.subject
	next()
}

router.get('/checkuser', verifyToken, (req, res) => {
	res.status(200).send({auth: true});
});

router.post('/register', (req, res) => {
	let userData = req.body;
	let user = new User(userData);
	var name = userData.name;
	var email = userData.email;
	var password = userData.password;
	var mobile = userData.mobile;
	var city = userData.city;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('name', 'Name Should be minimum 2 letters').isLength({min: 2});
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Use a valid Email Address').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	req.checkBody('password', 'Password must have 6 charecters').isLength({min: 6});
	req.checkBody('mobile', 'Please use 10 digit mobile numbers only').isNumeric();
	req.checkBody('mobile', 'Mobile must be 10 charecters').isLength(10);
	req.checkBody('city', 'City is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		User.findOne({email:userData.email}, (error, user) => {
			if (user) {
				res.status(401).send([{msg:'Email you have entered is already exists'}]);
			} else {
				let newUser = new User(userData);
				newUser.save((error, registeredUser) => {
					if (error) {
						res.status(401).send(error);
					} else {
						let payload = {subject: registeredUser._id};
						let token = jwt.sign(payload, 'secreteKey');
						res.status(200).send({token});
					}
				});
			}
		});
	}
});

router.post('/login', (req, res) => {
	let userData = req.body;
	var email = userData.email;
	var password = userData.password;

	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Use a valid Email Address').isEmail();
	req.checkBody('password', 'Password is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		User.findOne({email:userData.email}, (error, user) => {
			if(error) {
				res.status(401).send(error);
			} else {
				if(!user) {
					res.status(401).send([{msg:'Wrong Credentials! Please check Email and Password you have entered'}]);
				} else if (user.password !== userData.password) {
					res.status(401).send([{msg:'Wrong Credentials! Please check Email and Password you have entered'}])
				} else {
					let payload = {subject: user._id};
					let token = jwt.sign(payload, 'secreteKey');
					res.status(200).send({token});
				}
			}
		});
	}
});

router.get('/propertydetail/:id', (req, res) => {
	if(!req.params.id) {
		res.status(401).send([{msg:'Property not found'}]);
	} else {
		Property.findOne({_id: req.params.id}, (error, propertydet) => {
			if(error) {
				res.status(404).send([{msg:'Not Found'}]);
			} else {
				if(propertydet) {
	    			res.status(200).send(propertydet);
	    		} else {
	    			res.status(404).send([{msg:'Not Found'}]);
	    		}
			}
		});
	}
});

router.get('/gethomeids', function(req, res) {
	InnerPages.findOne({"table": "home_page"}, (err, propHome) => {
		if(err) {
			res.status(404).send([{msg:'Not Found'}]);
		} else {
			if(propHome) {
	     		res.status(200).send(propHome.ids);
    		} else {
    			res.status(404).send([{msg:'Not Found'}]);
    		}
		}
	});
});

router.get('/innerhomes', (req, res) => {
	InnerPages.findOne({"table": "home_page"}, (err, propHome) => {
		if(err) {
			res.status(404).send([{msg:'Not Found'}]);
		} else {
			if(propHome) {
    			let srchArr = propHome.ids;
				let propList = [];
				// console.log(propHome.ids);
				Property.find({
			    '_id': { $in: srchArr}
				},{},{}, function(err, list){
					if(err){
						res.status(404).send([{msg:'Not Found'}]);
					} else if (!list) {
						res.status(404).send([{msg:'Not Found'}]);
					} else {
				     	list.map((lst)=>{
				     		propList.push({
				     			"id": lst._id,
				     			"img": lst.img_detail[0],
				     			"price": lst.price,
				     			"bedrooms": lst.bedrooms,
				     			"property_area": lst.property_area,
				     			"house_type": lst.house_type,
				     			"bathrooms": lst.bathrooms,
				     			"parking_type": lst.parking_type,
				     			"property_type": lst.property_type,
				     			"status": lst.status,
				     			"user_upload_status": lst.user_upload_status,
				     			"want_to": lst.want_to
				     		});
				     	});
				     	res.status(200).send(propList);
				     }
				});
    		} else {
    			res.status(404).send([{msg:'Not Found'}]);
    		}
		}
	});
});

router.get('/hometest', (req, res) => {
	res.status(200).send("Working");
});


router.get('/userdetail', verifyToken, (req, res) => {
	let userDetail = {};
	User.findOne({_id:req.userId}, (error, user) => {
		if(error) {
			res.status(404).send([{msg:'User Not Exist'}]);
		} else{
			userDetail.name = user.name;
			userDetail.email = user.email;
			userDetail.mobile = user.mobile;
			userDetail.city = user.city;
			res.json(userDetail);
		}
	});
});

router.post('/userupdate', verifyToken, (req, res) => {
	let userData = req.body;
	var name = userData.name;
	var email = userData.email;
	var mobile = userData.mobile;
	var city = userData.city;

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('name', 'Name Should be minimum 2 letters').isLength({min: 2});
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Use a valid Email Address').isEmail();
	req.checkBody('mobile', 'Please use 10 digit mobile numbers only').isNumeric();
	req.checkBody('mobile', 'Mobile must be 10 charecters').isLength(10);
	req.checkBody('city', 'City is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		User.findOne({_id: req.userId}, function(err, foundObj){
			if(err) {
				res.status(401).send(err);
			} else {
				if(!foundObj) {
					res.status(404).send([{"msg":"No user found"}]);
				} else {
					if(req.body.name) {
						foundObj.name = req.body.name;
					}
					if(req.body.email) {
						foundObj.email = req.body.email;
					}
					if(req.body.mobile) {
						foundObj.mobile = req.body.mobile;
					}
					if(req.body.city) {
						foundObj.city = req.body.city;
					}
					foundObj.save(function(err, ubdatedObj){
						if(err) {
							res.status(401).send(err);
						} else {
							res.status(200).send({"msg":"Updated"});
						}
					});
				}
			}
		});
	}
});

router.post('/userpassupdate', verifyToken, (req, res) => {
	let userData = req.body;
	var oldPassword = userData.oldPassword;
	var newPassword = userData.password;

	req.checkBody('oldPassword', 'Password is required').notEmpty();
	req.checkBody('oldPassword', 'Password must have 6 charecters').isLength({min: 6});
	req.checkBody('oldPassword', 'Password is required').notEmpty();
	req.checkBody('oldPassword', 'Password must have 6 charecters').isLength({min: 6});
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		User.findOne({_id: req.userId}, function(err, foundObj){
			if(err) {
				res.status(401).send(err);
			} else {
				if(!foundObj) {
					res.status(404).send([{"msg":"No user found"}]);
				} else {
					if(req.body.oldPassword === foundObj.password) {
						foundObj.password = req.body.password;
						foundObj.save(function(err, ubdatedObj){
							if(err) {
								res.status(404).send([{"msg":"No user found"}]);
							} else {
								res.status(200).send([{"msg":"Updated"}]);
							}
						});
					} else {
						res.status(404).send([{"msg":"No user found"}]);
					}
				}
			}
		});
	}
});

router.post('/contactpost', (req, res) => {
	let contData = req.body;
	let name = contData.name;
	let email = contData.email;
	let subject = contData.subject;
	let message = contData.message;
	contData.read = 'no';

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('name', 'Name Should be minimum 2 letters').isLength({min: 2});
	req.checkBody('email', 'Email is required').notEmpty();
	req.checkBody('email', 'Use a valid Email Address').isEmail();
	req.checkBody('subject', 'Subject is required').notEmpty();
	req.checkBody('subject', 'Subject Should be minimum 2 letters').isLength({min: 2});
	req.checkBody('message', 'Message is required').notEmpty();
	req.checkBody('message', 'Message Should be minimum 2 letters').isLength({min: 2});
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		let newContact = new Contact(contData);
		newContact.save(function(err, feedBackDt){
			if(err) {
				res.status(401).send(err);
			} else {
				res.status(200).send({"msg":"Updated"});
			}
		});
	}
});

router.post('/propinquiry', (req, res) => {
	let inqData = req.body;
	let name = inqData.name;
	let phone = inqData.phone;
	let prop_id = inqData.prop_id;
	inqData.read = 'no';

	req.checkBody('name', 'Name is required').notEmpty();
	req.checkBody('name', 'Name Should be minimum 2 letters').isLength({min: 2});
	req.checkBody('phone', 'Phone is required').notEmpty();
	req.checkBody('phone', 'Phone Number not valid').isNumeric();
	req.checkBody('phone', 'Type your 10 digit phone number').isLength({min: 10, max:10});
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		let newPropInquiry = new PropInquiry(inqData);
		newPropInquiry.save(function(err, inq){
			if(err) {
				res.status(401).send(err);
			} else {
				res.status(200).send({"msg":"We got your query, we will contact you soon."});
			}
		});
	}
});
router.post('/propoffer', verifyToken, (req, res) => {
	let offData = req.body;
	let offerVal = offData.offerVal;
	let prop_id = offData.prop_id;
	offData.userId = req.userId;
	offData.read = 'no';

	req.checkBody('offerVal', 'Value is required').notEmpty();
	req.checkBody('offerVal', 'Value is not valid').isNumeric();
	req.checkBody('prop_id', 'Property not found').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		User.findOne({_id:req.userId}, (error, user) => {
			if(error) {
				res.status(404).send([{msg:'User Not Exist'}]);
			} else{
				user.offered.push(offData.prop_id);
				offData.name = user.name;
				offData.mobile = user.mobile;
				let newPropOffer = new PropOffer(offData)
				newPropOffer.save(function(err, inq){
					if(err) {
						res.status(401).send(err);
					} else {
						user.save();
						res.status(200).send({"msg":"Your offer is on review, we will get back to you soon."});
					}
				});
			}
		});
	}
});
router.post('/useroffered', verifyToken, (req, res) => {
	User.findOne({_id:req.userId}, (error, user) => {
		if(error) {
			res.status(404).send([{msg:'User Not Exist'}]);
		} else {
			if(user.offered.includes(req.body.prop_id) || user.shortlist.includes(req.body.prop_id)) {
				res.status(200).send({
					offer:user.offered.includes(req.body.prop_id),
					shortlist: user.shortlist.includes(req.body.prop_id)
				});
			} else {
				res.status(200).send({
					offer:false, shortlist:false
				});
			}
		}
	});
});
router.post('/shortlistprop', verifyToken, (req, res) => {
	if(req.body.prop_id){
		User.findOne({_id:req.userId}, (error, user) => {
			if(error) {
				res.status(404).send([{msg:'User Not Exist'}]);
			} else{
				user.shortlist.push(req.body.prop_id);
				user.save();
				res.status(200).send({"msg":"Shortlisted"});
			}
		});
	} else {
		res.status(401).send({"msg":"Not able to shortlist, please try again later"});
	}
});

router.get('/dashboardofferlist', verifyToken, (req, res) => {
	User.findOne({_id:req.userId}, (error, user) => {
		if(error) {
			res.status(404).send([{msg:'User Not Exist'}]);
		} else{
		    let offerList = [];
		    let shortList = [];
		    function loopingProp(inpArr, inpProp) {
		    	inpArr.push({
	     			"id": inpProp._id.toString().split("\"")[0],
	     			"img": inpProp.img_detail[0],
	     			"user_upload_status": inpProp.user_upload_status,
	     			"city": inpProp.city
	     		});
		    }
		    const PropAdd = new Promise(function(resolve, reject) {
				Property.find({
			    '_id': { $in: user.offered}
				},{},{limit: 2}, function(err, list){
			     	list.map((offLst) => {
			     		loopingProp(offerList, offLst);
			     	});
			     	resolve();
				});
			}).then(function() {
				Property.find({
				    '_id': { $in: user.shortlist}
				},{},{limit: 2}, function(err, list){
			     	list.map((shrtLst) => {
			     		loopingProp(shortList, shrtLst);
			     	});
			     	res.status(200).send({"offerList" :offerList, "shortList" :shortList});
				});
			}).catch(function(err){
				res.status(404).send(err);
			});
		}
	});
});

router.get('/shortproplist/:id', verifyToken, (req, res) => {
	let skipCnt = parseInt(req.params.id);
	if(isNaN(req.params.id) || req.params.id < 0) {
		res.status(401).send([{msg:'No result found'}]);
	} else {
		User.findOne({_id:req.userId}, (error, user) => {
			if(error) {
				res.status(404).send([{msg:'User Not Found'}]);
			} else{
				let srchArr = user.shortlist.sort()
				let propList = [];
				Property.find({
			    '_id': { $in: srchArr}
				},{},{skip: skipCnt, limit: limitProp}, function(err, list){
					if(err){
						res.status(404).send([{msg:'Not Found'}]);
					} else if (!list) {
						res.status(404).send([{msg:'Not Found'}]);
					} else {
				     	list.map((lst)=>{
				     		propList.push({
				     			"id": lst._id,
				     			"img": lst.img_detail[0],
				     			"price": lst.price,
				     			"bedrooms": lst.bedrooms,
				     			"property_area": lst.property_area,
				     			"house_type": lst.house_type,
				     			"bathrooms": lst.bathrooms,
				     			"parking_type": lst.parking_type,
				     			"property_type": lst.property_type,
				     			"status": lst.status,
				     			"user_upload_status": lst.user_upload_status,
				     			"want_to": lst.want_to
				     		});
				     	});
				     	// console.log(propList);
				     	res.status(200).send(propList);
			     	}
				});
			}
		});
	}
});

router.get('/offerproplist/:id', verifyToken, (req, res) => {
	let skipCnt = parseInt(req.params.id);
	if(isNaN(req.params.id) || req.params.id < 0) {
		res.status(401).send([{msg:'No result found'}]);
	} else {
		User.findOne({_id:req.userId}, (error, user) => {
			if(error) {
				res.status(404).send([{msg:'User Not Found'}]);
			} else{
				let srchArr = user.offered.sort();
				let propList = [];
				Property.find({
			    	'_id': { $in: srchArr}
				},{},{skip: skipCnt, limit: limitProp}, function(err, list){
					if(err){
						res.status(404).send([{msg:'Not Found'}]);
					} else if (!list) {
						res.status(404).send([{msg:'Not Found'}]);
					} else {
				     	list.map((lst)=>{
				     		propList.push({
				     			"id": lst._id,
				     			"img": lst.img_detail[0],
				     			"price": lst.price,
				     			"bedrooms": lst.bedrooms,
				     			"property_area": lst.property_area,
				     			"house_type": lst.house_type,
				     			"bathrooms": lst.bathrooms,
				     			"parking_type": lst.parking_type,
				     			"property_type": lst.property_type,
				     			"status": lst.status,
				     			"user_upload_status": lst.user_upload_status,
				     			"want_to": lst.want_to
				     		});
				     	});
				     	// console.log(propList);
				     	res.status(200).send(propList);
			     	}
				});
			}
		});
	}
});


router.get('/randomproperties', verifyToken, (req, res) => {
	propList= [];
	User.findOne({_id:req.userId}, (error, user) => {
		if(error) {
			res.status(401).send([{msg:'No result found'}]);
		} else {
			cityField = user.city;
			Property.count({}, function( err, proCount){
				let propId;
			    let count = proCount;
			    let r = Math.floor(Math.random() * count) + 1;
			    if(r > (count-4)) {
			    	propId = 0;
			    } else {
			    	propId = r;
			    }
			    Property.aggregate([ { "$match": { "city": { $regex: new RegExp("^" + cityField.toLowerCase(), "i") } } }, { $sample: { size : 4 } } ]).exec(function(err, list){
			    	if(err){
						res.status(404).send([{msg:'Not Found'}]);
					} else if (!list) {
						res.status(404).send([{msg:'Not Found'}]);
					} else {
				     	list.map((lst)=>{
				     		propList.push({
				     			"id": lst._id,
				     			"img": lst.img_detail[0],
				     			"price": lst.price,
				     			"bedrooms": lst.bedrooms,
				     			"property_area": lst.property_area,
				     			"house_type": lst.house_type,
				     			"bathrooms": lst.bathrooms,
				     			"parking_type": lst.parking_type,
				     			"property_type": lst.property_type,
				     			"status": lst.status,
				     			"user_upload_status": lst.user_upload_status,
				     			"want_to": lst.want_to
				     		});
				     	});
				     	res.status(200).send(propList);
			     	}
				});
			});
		}
	});
});

router.get('/searchprop/:id', (req, res) => {
	let queries = req.params.id.split("$");
	let propList = [];
	let searchString = [{ price: {$gte : 1} }];
	// console.log(queries);
	let sorting;
	if(queries[7] === 'high') {
		sorting = -1;
	} else {
		sorting = 1;
	}
	if(queries[9]) {
		if(!isNaN(queries[9])) {
			searchString = [{ pin: parseInt(queries[9]) }];
		} else {
			searchString = [{ city: { $regex: new RegExp("^" + queries[9].toLowerCase(), "i") } },
						{ state: { $regex: new RegExp("^" + queries[9].toLowerCase(), "i") } },
						{ place: { $regex: new RegExp("^" + queries[9].toLowerCase(), "i") } }];
		}
	}
	let want_to;
	if((queries[1] === "rent_out" || queries[1] === "Sell" || queries[1] === "Upcoming") && (queries[3] === "Commercial" || queries[3] === "Private")){
		if(queries[1] === "Upcoming") {
			want_to = {'want_to': { $in: "Sell"}, 'user_upload_status': { $in: "open"}, 'property_type': queries[1]+" "+queries[3]+" Project", $or: searchString};
		} else {
			want_to = {'want_to': { $in: queries[1]}, 'user_upload_status': { $in: "open"}, 'property_type': queries[3], $or: searchString};
		}
		Property.find(want_to,{},{skip: parseInt(queries[5]), limit: limitProp, sort: {price: sorting}}, function(err, list){
			if(err){
				res.status(404).send([{msg:'Not Found'}]);
			} else if (!list) {
				res.status(404).send([{msg:'Not Found'}]);
			} else {
		     	list.map((lst)=>{
		     		propList.push({
		     			"id": lst._id,
		     			"img": lst.img_detail[0],
		     			"price": lst.price,
		     			"bedrooms": lst.bedrooms,
		     			"property_area": lst.property_area,
		     			"house_type": lst.house_type,
		     			"bathrooms": lst.bathrooms,
		     			"parking_type": lst.parking_type,
		     			"property_type": lst.property_type,
		     			"status": lst.status,
		     			"user_upload_status": lst.user_upload_status,
		     			"want_to": lst.want_to
		     		});
		     	});
		     	res.status(200).send(propList);
	     	}
		});
	} else {
		res.status(404).send([{msg:'No item found'}]);
	}
	
	
});


/*=================
  
  For Limit to Send property list

===================*/
const limitProp = 12;

/*=================
  
  For Admin Loggin

===================*/


function verifyAdmin(req, res, next) {
	const reqToken = req.headers["x-access-token"];

	if(!reqToken) {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	let token = reqToken.split(' ')[1]
	if(token === 'null') {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	let payload = jwt.verify(token, 'adminKey')
	if(!payload) {
		return res.status(401).send({auth: false, message: "Unauthorized request"})
	}
	req.userId = payload.subject
	next()
}

router.get('/checkadmin', verifyAdmin, (req, res) => {
	res.status(200).send({auth: true});
});

router.post('/adminlogin', (req, res) => {
	let adminData = req.body;
	var username = adminData.username;
	var password = adminData.password;

	req.checkBody('username', 'username is required').notEmpty();
	req.checkBody('password', 'Password is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		Admin.findOne({username:adminData.username}, (error, user) => {
			if(error) {
				res.status(401).send(error);
			} else {
				if(!user) {
					res.status(401).send([{msg:'Wrong Credentials'}]);
				} else if (user.password !== adminData.password) {
					res.status(401).send([{msg:'Wrong Credentials'}])
				} else {
					let payload = {subject: user._id};
					let adm = jwt.sign(payload, 'adminKey');
					res.status(200).send({adm});
				}
			}
		});
	}
});

router.post('/uploadproperty', verifyAdmin, function(req, res) {

	let propData = req.body;
	let property_type = propData.property_type;
	let stories = propData.stories;
	let year_build =propData.year_build;
	let A_C = propData.A_C;
	let heating = propData.heating;
	let bathrooms = propData.bathrooms;
	let pool = propData.pool;
	let fireplace = propData.fireplace;
	let parking_space = propData.parking_space;
	let parking_type = propData.parking_type;
	let patio = propData.patio;
	let playground = propData.playground;
	let description = propData.description;
	let details = propData.details;
	let yt_url = propData.yt_url;
	let g_map_url = propData.g_map_url;
	let hse_for = propData.hse_for;
	let bedrooms = propData.bedrooms;
	let want_to = propData.want_to;
	let price = propData.price;
	let status = propData.status;
	let city = propData.city;
	let state = propData.state;
	let place = propData.place;
	let house_type = propData.house_type;
	let pin = propData.pin;
	let property_area = propData.property_area;

	req.checkBody('property_type', 'Property type is required').notEmpty();
	req.checkBody('stories', 'Stories is required').notEmpty();
	req.checkBody('year_build', 'Year is required').notEmpty();
	req.checkBody('year_build', 'Please enter a valid year').isLength({min: 4});
	req.checkBody('year_build', 'Please enter a valid year').isNumeric();
	req.checkBody('A_C', 'A/C is required').notEmpty();
	req.checkBody('heating', 'Heating is required').notEmpty();
	req.checkBody('bathrooms', 'Bathrooms is required').notEmpty();
	req.checkBody('pool', 'Pool is required').notEmpty();
	req.checkBody('fireplace', 'Fireplace is required').notEmpty();
	req.checkBody('parking_space', 'Parking Space is required').notEmpty();
	req.checkBody('parking_type', 'Parking Type is required').notEmpty();
	req.checkBody('patio', 'patio is required').notEmpty();
	req.checkBody('playground', 'Playground is required').notEmpty();
	req.checkBody('description', 'Description is required').notEmpty();
	req.checkBody('details', 'Details is required').notEmpty();
	req.checkBody('yt_url', 'Youtube URL is required').notEmpty();
	req.checkBody('g_map_url', 'G map URL is required').notEmpty();
	req.checkBody('house_type', 'House Type is required').notEmpty();
	req.checkBody('hse_for', 'House For is required').notEmpty();
	req.checkBody('bedrooms', 'Bedrooms is required').notEmpty();
	req.checkBody('want_to', 'Want to is required').notEmpty();
	req.checkBody('price', 'Price is required').notEmpty();
	req.checkBody('price', 'Please enter a valid price').isNumeric();
	req.checkBody('status', 'Status is required').notEmpty();
	req.checkBody('city', 'City is required').notEmpty();
	req.checkBody('state', 'State is required').notEmpty();
	req.checkBody('place', 'Place is required').notEmpty();
	req.checkBody('pin', 'Pin is required').notEmpty();
	req.checkBody('pin', 'Please enter a valid pin').isNumeric();
	req.checkBody('property_area', 'Property Area is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		let count;
		let errImg = 0;
		let imgNames = [];
		propData.user_upload_status = "open"; // close can be also conditionally
		const PropAdd = new Promise(function(resolve, reject) {
			// Property.find().exec(function (err, results) {
		 //  		count = results.length;
		 //  		propData.prop_id = (count+1);
			// 	resolve();
			// });
			Property.count({}, function( err, proCount){
			    count = proCount;
			    propData.prop_id = (count+1);
			    resolve();
			});
		}).then(function() {
			if(req.files && req.body) {
				var orpath = 'upload/'+(count+1)+'/';
				var dir = './public/'+orpath;
			 	async function ImageCropAndSave(file, posX, posY, crWidth, crHeight) {
			 		if(file.name.match(/.(jpg|jpeg|png)$/i) && file.mimetype.match(/(jpg|jpeg|png)$/i)) {
						var fileExt = file.name.split('.').pop();
						var fileDt = new Date().getTime();
						var extfilename = "prop_"+fileDt+file.size+"_."+fileExt;
						const propertyImg = new Promise(function(resolve, reject) {
							if (!filessystem.existsSync(dir)){
						        filessystem.mkdirSync(dir);
					        }
					        resolve();
						}).then(function() {
							file.mv(dir+extfilename, function(err) {
								if(err) {
									res.status(401).send([{msg:"Error occored"}]);
								} else {
									Jimp.read(dir+extfilename, (err, proImg) => {
									  	if (err){
									  		res.status(401).send(err);
									  	} else {
									  		function imgCrop() {
											  	proImg
										  		.crop(parseInt(posX), parseInt(posY), parseInt(crWidth), parseInt(crHeight))
											    .quality(80) // set JPEG quality
											    .resize(500, Jimp.AUTO)
											    .write(dir+extfilename); // save
											    imgNames.push(orpath+extfilename+"");
											}
											imgCrop();
											errImg++;
											if(errImg === req.files.prop_img.length || req.files.prop_img.name) {
												savingProperty(imgNames);
											}
									  	}
									});
									
								}
							});
							function savingProperty(imgList) {
								propData.img_detail = imgList;
								let newProperty = new Property(propData);
								newProperty.save(function(err, feedBackDt){
									if(err) {
										res.status(401).send(err);
									} else {
										res.status(200).send({"msg":"Updated"});
									}
								});
							}
						}).catch((err)=> {
							res.status(401).send(err);
						});
					}
			 	}			 	
				if(req.files.prop_img.length === undefined) {
					let file = req.files.prop_img;
					ImageCropAndSave(file, req.body.posX, req.body.posY, req.body.crWidth, req.body.crHeight);
				} else {
					for(let f = 0; f<req.files.prop_img.length; f++) {
						ImageCropAndSave(req.files.prop_img[f], req.body.posX[f], req.body.posY[f], req.body.crWidth[f], req.body.crHeight[f]);
					}
				}
			} else {
				req.status(401).send([{msg:'Not able to upload try again later'}]);
			}
		}).catch(function(err){
			req.status(401).send(err);
		});
	}
});

router.get('/admindash', verifyAdmin, function(req, res) {
	let outData = {};
	PropOffer.find({
	    'read': 'no'
	},{},{}, function(err, list){
		if(err) {
			req.status(401).send(err);
		} else {
			outData.offerList = list.length;
	     	PropInquiry.find({
			    'read': 'no'
			},{},{}, function(err2, list2){
				if(err2) {
					req.status(401).send(err2);
				} else {
					outData.inqList = list2.length;
		     		Contact.find({
					    'read': 'no'
					},{},{}, function(err3, list3){
						if(err3) {
							req.status(401).send(err3);
						} else {
							outData.contList = list3.length;
				     		res.status(200).send(outData);
						}
			     	});
				}
	     	});
		}
	});
});

router.get('/adminoffered/:id', verifyAdmin, function(req, res) {
	PropOffer.find({},{},{skip: parseInt(req.params.id), limit: limitProp, sort: {today: -1}}, function(err, list){
		if(err) {
			req.status(401).send(err);
		} else {
			res.status(200).send(list);
		}
	});
});

router.get('/admofferdone/:id', verifyAdmin, function(req, res) {
	PropOffer.findOne({_id: req.params.id}, function(err, foundObj){
		if(err) {
			res.status(401).send(err);
		} else {
			if(!foundObj) {
				res.status(404).send([{"msg":"No item found"}]);
			} else {
				foundObj.read = 'yes';
				foundObj.save(function(err, ubdatedObj){
					if(err) {
						res.status(404).send([{"msg":"No item found"}]);
					} else {
						res.status(200).send([{"msg":"Updated"}]);
					}
				});
			}
		}
	});
});

router.get('/admininquiries/:id', verifyAdmin, function(req, res) {
	PropInquiry.find({},{},{skip: parseInt(req.params.id), limit: limitProp, sort: {today: -1}}, function(err, list){
		if(err) {
			req.status(401).send(err);
		} else {
			res.status(200).send(list);
		}
	});
});

router.get('/adminqdone/:id', verifyAdmin, function(req, res) {
	PropInquiry.findOne({_id: req.params.id}, function(err, foundObj){
		if(err) {
			res.status(401).send(err);
		} else {
			if(!foundObj) {
				res.status(404).send([{"msg":"No item found"}]);
			} else {
				foundObj.read = 'yes';
				foundObj.save(function(err, ubdatedObj){
					if(err) {
						res.status(404).send([{"msg":"No item found"}]);
					} else {
						res.status(200).send([{"msg":"Updated"}]);
					}
				});
			}
		}
	});
});

router.get('/admincontacts/:id', verifyAdmin, function(req, res) {
	Contact.find({},{},{skip: parseInt(req.params.id), limit: limitProp, sort: {today: -1}}, function(err, list){
		if(err) {
			req.status(401).send(err);
		} else {
			res.status(200).send(list);
		}
	});
});

router.get('/admcontdone/:id', verifyAdmin, function(req, res) {
	Contact.findOne({_id: req.params.id}, function(err, foundObj){
		if(err) {
			res.status(401).send(err);
		} else {
			if(!foundObj) {
				res.status(404).send([{"msg":"No item found"}]);
			} else {
				foundObj.read = 'yes';
				foundObj.save(function(err, ubdatedObj){
					if(err) {
						res.status(404).send([{"msg":"No item found"}]);
					} else {
						res.status(200).send([{"msg":"Updated"}]);
					}
				});
			}
		}
	});
});

router.post('/editproperty', verifyAdmin, function(req, res) {
	let propList = [];
	if(req.body.byIPlace) {
		Property.find({'city': { $regex: new RegExp("^" + req.body.byIPlace.toLowerCase(), "i") }},{},{skip: parseInt(req.body.skip), limit: limitProp}, function(err, list){
			if(err) {
				req.status(401).send(err);
			} else {
				list.map((lst)=>{
		     		propList.push({
		     			"id": lst._id,
		     			"img": lst.img_detail[0],
		     			"price": lst.price,
		     			"bedrooms": lst.bedrooms,
		     			"property_area": lst.property_area,
		     			"house_type": lst.house_type,
		     			"bathrooms": lst.bathrooms,
		     			"parking_type": lst.parking_type,
		     			"property_type": lst.property_type,
		     			"status": lst.status,
		     			"user_upload_status": lst.user_upload_status,
		     			"want_to": lst.want_to
		     		});
		     	});
		     	res.status(200).send(propList);
			}
		});
	} else if(req.body.byID) {
		Property.findOne({_id: req.body.byID},{},{}, function(err, list){
			if(err) {
				res.status(404).send({"msg":"No item found"});
			} else if(!list) {
				res.status(404).send({"msg":"No item found"});
			} else {
	     		propList.push({
	     			"id": list._id,
	     			"img": list.img_detail[0],
	     			"price": list.price,
	     			"bedrooms": list.bedrooms,
	     			"property_area": list.property_area,
	     			"house_type": list.house_type,
	     			"bathrooms": list.bathrooms,
	     			"parking_type": list.parking_type,
	     			"property_type": list.property_type,
	     			"status": list.status,
	     			"user_upload_status": list.user_upload_status,
	     			"want_to": list.want_to
	     		});
		     	res.status(200).send(propList);
	     	}
		});
	} else {
		res.status(404).send([{"msg":"No item found"}]);
	}
});

router.get('/getpropforedit/:id', verifyAdmin, function(req, res) {
	Property.findOne({_id: req.params.id},{},{}, function(err, list){
		if(err) {
			res.status(404).send({"msg":"No item found"});
		} else if(!list) {
			res.status(404).send({"msg":"No item found"});
		} else {
			res.status(200).send(list);
		}
		// console.log(list);
	});
});

router.post('/imageremoval', verifyAdmin, function(req, res) {
	Property.findOne({_id: req.body.proId},{},{}, function(err, list){
		if(err) {
			res.status(404).send({"msg":"No item found"});
		} else if(!list) {
			res.status(404).send({"msg":"No item found"});
		} else {
			list.img_detail = list.img_detail.filter(e => e !== req.body.img);
			list.save(function(err, ubdatedObj){
				if(err) {
					res.status(404).send([{"msg":"No item found"}]);
				} else {
					res.status(200).send(list.img_detail);
				}
			});
		}
	});
});

router.post('/editedproperty', verifyAdmin, function(req, res) {
	let propData = req.body;
	let property_type = propData.property_type;
	let stories = propData.stories;
	let year_build =propData.year_build;
	let A_C = propData.A_C;
	let heating = propData.heating;
	let bathrooms = propData.bathrooms;
	let pool = propData.pool;
	let fireplace = propData.fireplace;
	let parking_space = propData.parking_space;
	let parking_type = propData.parking_type;
	let patio = propData.patio;
	let playground = propData.playground;
	let description = propData.description;
	let details = propData.details;
	let yt_url = propData.yt_url;
	let g_map_url = propData.g_map_url;
	let hse_for = propData.hse_for;
	let bedrooms = propData.bedrooms;
	let want_to = propData.want_to;
	let price = propData.price;
	let status = propData.status;
	let city = propData.city;
	let state = propData.state;
	let place = propData.place;
	let house_type = propData.house_type;
	let pin = propData.pin;
	let property_area = propData.property_area;
	let user_upload_status = propData.user_upload_status;
	let prop_id = propData.prop_id;

	req.checkBody('property_type', 'Property type is required').notEmpty();
	req.checkBody('stories', 'Stories is required').notEmpty();
	req.checkBody('year_build', 'Year is required').notEmpty();
	req.checkBody('year_build', 'Please enter a valid year').isLength({min: 4});
	req.checkBody('year_build', 'Please enter a valid year').isNumeric();
	req.checkBody('A_C', 'A/C is required').notEmpty();
	req.checkBody('heating', 'Heating is required').notEmpty();
	req.checkBody('bathrooms', 'Bathrooms is required').notEmpty();
	req.checkBody('pool', 'Pool is required').notEmpty();
	req.checkBody('fireplace', 'Fireplace is required').notEmpty();
	req.checkBody('parking_space', 'Parking Space is required').notEmpty();
	req.checkBody('parking_type', 'Parking Type is required').notEmpty();
	req.checkBody('patio', 'patio is required').notEmpty();
	req.checkBody('playground', 'Playground is required').notEmpty();
	req.checkBody('description', 'Description is required').notEmpty();
	req.checkBody('details', 'Details is required').notEmpty();
	req.checkBody('yt_url', 'Youtube URL is required').notEmpty();
	req.checkBody('g_map_url', 'G map URL is required').notEmpty();
	req.checkBody('house_type', 'House Type is required').notEmpty();
	req.checkBody('hse_for', 'House For is required').notEmpty();
	req.checkBody('bedrooms', 'Bedrooms is required').notEmpty();
	req.checkBody('want_to', 'Want to is required').notEmpty();
	req.checkBody('price', 'Price is required').notEmpty();
	req.checkBody('price', 'Please enter a valid price').isNumeric();
	req.checkBody('status', 'Status is required').notEmpty();
	req.checkBody('city', 'City is required').notEmpty();
	req.checkBody('state', 'State is required').notEmpty();
	req.checkBody('place', 'Place is required').notEmpty();
	req.checkBody('pin', 'Pin is required').notEmpty();
	req.checkBody('pin', 'Please enter a valid pin').isNumeric();
	req.checkBody('property_area', 'Property Area is required').notEmpty();
	req.checkBody('user_upload_status', 'Status of Property is required').notEmpty();
	req.checkBody('prop_id', 'ID of Property is required').notEmpty();
	var errors = req.validationErrors();
	if (errors) {
		res.status(401).send(errors);
	} else {
		Property.findOne({_id: req.body.prop_id},{},{}, function(err, list){
			if(err) {
				res.status(404).send({"msg":"No item found"});
			} else if(!list) {
				res.status(404).send({"msg":"No item found"});
			} else {
				list.property_type = propData.property_type;
				list.stories = propData.stories;
				list.year_build =propData.year_build;
				list.A_C = propData.A_C;
				list.heating = propData.heating;
				list.bathrooms = propData.bathrooms;
				list.pool = propData.pool;
				list.fireplace = propData.fireplace;
				list.parking_space = propData.parking_space;
				list.parking_type = propData.parking_type;
				list.patio = propData.patio;
				list.playground = propData.playground;
				list.description = propData.description;
				list.details = propData.details;
				list.yt_url = propData.yt_url;
				list.g_map_url = propData.g_map_url;
				list.hse_for = propData.hse_for;
				list.bedrooms = propData.bedrooms;
				list.want_to = propData.want_to;
				list.price = propData.price;
				list.status = propData.status;
				list.city = propData.city;
				list.state = propData.state;
				list.place = propData.place;
				list.house_type = propData.house_type;
				list.pin = propData.pin;
				list.property_area = propData.property_area;
				list.user_upload_status = propData.user_upload_status;
				let errImg = 0;
				let imgNames = [];
				if(req.files.prop_img) {
					var orpath = 'upload/'+list.prop_id+'/';
					var dir = './public/'+orpath;
					function ImageCropAndSave(file, posX, posY, crWidth, crHeight) {
				 		if(file.name.match(/.(jpg|jpeg|png)$/i) && file.mimetype.match(/(jpg|jpeg|png)$/i)) {
							var fileExt = file.name.split('.').pop();
							var fileDt = new Date().getTime();
							var extfilename = "prop_"+fileDt+file.size+"_."+fileExt;
							file.mv(dir+extfilename, function(err) {
								if(err) {
									res.status(401).send([{msg:"Error occored"}]);
								} else {
									Jimp.read(dir+extfilename, (err, proImg) => {
									  	if (err){
									  		res.status(401).send(err);
									  	} else {
									  		function imgCrop() {
											  	proImg
										  		.crop(parseInt(posX), parseInt(posY), parseInt(crWidth), parseInt(crHeight))
											    .quality(80)
											    .resize(500, Jimp.AUTO)
											    .write(dir+extfilename);
											    imgNames.push(orpath+extfilename+"");
											}
											imgCrop();
											errImg++;
											if(errImg === req.files.prop_img.length || req.files.prop_img.name) {
												savingProperty(imgNames);
											}
									  	}
									});
									
								}
							});
							function savingProperty(imgList) {
								Property.findOneAndUpdate({_id: req.body.prop_id},{ $push: { img_detail: imgList } },{}, function(err, list){
									if(err) {
										res.status(404).send([{"msg":"No item found"}]);
									} else {
										list.save(function(err, ubdatedObj){
											if(err) {
												res.status(404).send([{"msg":"No item found"}]);
											} else {
												res.status(200).send([{"msg":"Updated"}]);
											}
										});
									}
								});
							}
						}
				 	}
					if(req.files.prop_img.length === undefined) {
						let file = req.files.prop_img;
						ImageCropAndSave(file, req.body.posX, req.body.posY, req.body.crWidth, req.body.crHeight);
					} else {
						for(let f = 0; f<req.files.prop_img.length; f++) {
							ImageCropAndSave(req.files.prop_img[f], req.body.posX[f], req.body.posY[f], req.body.crWidth[f], req.body.crHeight[f]);
						}
					}
				 	
				} else {
					list.save(function(err, ubdatedObj){
						if(err) {
							res.status(404).send([{"msg":"No item found"}]);
						} else {
							res.status(200).send([{"msg":"Updated"}]);
						}
					});
				}
			}
		});
	}
});

router.post('/homeids', verifyAdmin, function(req, res) {
	// console.log(req.body.arr);
	if(req.body.arr) {
		InnerPages.findOne({"table": "home_page"}, (err, propHome) => {
			if(err) {
				res.status(404).send([{msg:'Not Found'}]);
			} else {
				propHome.ids = req.body.arr;
				propHome.save(function(err, ubdatedObj){
					if(err) {
						res.status(404).send([{msg:'Not Found'}]);
					} else {
						res.status(200).send([{msg:"Updated"}]);
					}
				});
			}
		});
	} else {
		res.status(404).send([{msg:'Not Found'}]);
	}
	
});

router.get('/abcd', (req, res) => {
	res.send("jdhskgjash");
});

module.exports = router;